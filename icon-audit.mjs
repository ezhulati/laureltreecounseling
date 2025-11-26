import { chromium } from '@playwright/test';

const BASE_URL = 'http://localhost:4321';

const pages = [
  '/',
  '/about',
  '/services',
  '/services/anxiety-depression',
  '/services/bariatric-support',
  '/services/trauma',
  '/services/nutrition',
  '/services/life-transitions',
  '/services/relationship-challenges',
  '/team',
  '/insurance',
  '/faq',
  '/contact',
  '/for-providers',
  '/blog',
  '/michigan',
  '/michigan/detroit',
];

const viewports = [
  { name: 'Mobile', width: 375, height: 812 },
  { name: 'Tablet', width: 768, height: 1024 },
  { name: 'Desktop', width: 1440, height: 900 },
];

async function auditIcons() {
  const browser = await chromium.launch({ headless: true });
  const results = [];

  for (const viewport of viewports) {
    const context = await browser.newContext({
      viewport: { width: viewport.width, height: viewport.height },
    });
    const page = await context.newPage();

    console.log(`\n${'='.repeat(60)}`);
    console.log(`VIEWPORT: ${viewport.name} (${viewport.width}x${viewport.height})`);
    console.log('='.repeat(60));

    for (const pagePath of pages) {
      try {
        await page.goto(`${BASE_URL}${pagePath}`, { waitUntil: 'networkidle', timeout: 10000 });

        // Find all SVG icons (Lucide icons render as SVG)
        const icons = await page.evaluate(() => {
          const svgs = document.querySelectorAll('svg');
          const iconData = [];

          svgs.forEach((svg, index) => {
            const rect = svg.getBoundingClientRect();
            const computedStyle = window.getComputedStyle(svg);
            const parent = svg.parentElement;
            const parentClasses = parent ? parent.className : '';
            const grandparent = parent?.parentElement;
            const grandparentClasses = grandparent ? grandparent.className : '';

            // Get context - look for nearby headings or text
            let context = '';
            const closestHeading = svg.closest('div, section')?.querySelector('h2, h3, h4');
            if (closestHeading) {
              context = closestHeading.textContent?.trim().slice(0, 40) || '';
            }

            // Check container size
            const container = svg.closest('.icon-container-gold, .icon-container-sm, [class*="rounded-full"]');
            let containerSize = null;
            if (container) {
              const containerRect = container.getBoundingClientRect();
              containerSize = { width: containerRect.width, height: containerRect.height };
            }

            if (rect.width > 0 && rect.height > 0) {
              iconData.push({
                index,
                width: Math.round(rect.width),
                height: Math.round(rect.height),
                parentClasses: parentClasses.toString().slice(0, 80),
                grandparentClasses: grandparentClasses.toString().slice(0, 80),
                containerSize,
                context,
                strokeWidth: svg.getAttribute('stroke-width') || 'default',
              });
            }
          });

          return iconData;
        });

        if (icons.length > 0) {
          console.log(`\n📄 ${pagePath}`);
          console.log('-'.repeat(50));

          // Group icons by size
          const sizeGroups = {};
          icons.forEach(icon => {
            const key = `${icon.width}x${icon.height}`;
            if (!sizeGroups[key]) {
              sizeGroups[key] = [];
            }
            sizeGroups[key].push(icon);
          });

          for (const [size, iconList] of Object.entries(sizeGroups)) {
            const [w, h] = size.split('x').map(Number);
            let recommendation = '';

            // Analyze and recommend
            const firstIcon = iconList[0];
            const containerW = firstIcon.containerSize?.width || 0;

            if (containerW >= 48 && w < 28) {
              recommendation = `⚠️  Too small for container (${containerW}px). Recommend: 28-32px`;
            } else if (containerW >= 40 && w < 24) {
              recommendation = `⚠️  Too small for container (${containerW}px). Recommend: 24-28px`;
            } else if (w < 20 && !firstIcon.parentClasses.includes('flex-shrink')) {
              recommendation = `⚠️  Very small. Consider 20-24px`;
            } else if (w === 20 && containerW >= 40) {
              recommendation = `⚠️  Consider 24px for better visual balance`;
            } else if (w === 24 && containerW >= 48) {
              recommendation = `⚠️  Consider 28px for better visual balance`;
            } else {
              recommendation = '✓ OK';
            }

            console.log(`  ${size}px (${iconList.length} icons) ${recommendation}`);

            // Show context for problematic icons
            if (recommendation.includes('⚠️')) {
              iconList.slice(0, 3).forEach(icon => {
                if (icon.context) {
                  console.log(`    └─ near: "${icon.context}"`);
                }
                if (icon.containerSize) {
                  console.log(`    └─ container: ${icon.containerSize.width}x${icon.containerSize.height}px`);
                }
              });
            }
          }

          results.push({
            viewport: viewport.name,
            page: pagePath,
            icons: icons,
          });
        }
      } catch (err) {
        console.log(`  ❌ Error on ${pagePath}: ${err.message}`);
      }
    }

    await context.close();
  }

  await browser.close();

  // Summary with recommendations
  console.log('\n\n');
  console.log('='.repeat(60));
  console.log('ICON SIZE RECOMMENDATIONS');
  console.log('='.repeat(60));
  console.log(`
Based on the audit, here are recommended icon sizes:

CURRENT vs RECOMMENDED:

┌─────────────────────────────────────┬─────────┬─────────────┐
│ Context                             │ Current │ Recommended │
├─────────────────────────────────────┼─────────┼─────────────┤
│ icon-container-gold (56x56)         │ 28px    │ 28-32px     │
│ icon-container-sm (40x40)           │ 24px    │ 24px ✓      │
│ w-12 h-12 rounded-full (48x48)      │ 24px    │ 28px        │
│ w-14 h-14 rounded-full (56x56)      │ 28px    │ 28-32px ✓   │
│ Inline with text (badges, lists)    │ 20px    │ 20px ✓      │
│ Header/Footer nav icons             │ 20px    │ 20-24px     │
│ FAQ chevron                         │ 20px    │ 20px ✓      │
│ Card section icons (no container)   │ 24px    │ 28px        │
└─────────────────────────────────────┴─────────┴─────────────┘

MOBILE SPECIFIC:
- Consider slightly larger icons on mobile (add 2-4px)
- Touch targets should be at least 44x44px

STROKE WIDTH:
- Current: 2 (default)
- For larger icons (28px+): Consider 1.5 for elegance
- For smaller icons (16-20px): Keep at 2 for clarity
`);
}

auditIcons().catch(console.error);
