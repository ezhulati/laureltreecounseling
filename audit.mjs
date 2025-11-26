import { chromium } from 'playwright';
import fs from 'fs';
import path from 'path';

const BASE_URL = 'http://localhost:4322';

const pages = [
  { path: '/', name: 'home' },
  { path: '/about', name: 'about' },
  { path: '/services', name: 'services' },
  { path: '/team', name: 'team' },
  { path: '/insurance', name: 'insurance' },
  { path: '/faq', name: 'faq' },
  { path: '/contact', name: 'contact' },
  { path: '/insights', name: 'insights' },
  { path: '/michigan', name: 'michigan-hub' },
  { path: '/michigan/detroit', name: 'michigan-city' },
  { path: '/insights/emotional-side-bariatric-surgery', name: 'blog-post' },
  { path: '/services/bariatric-support', name: 'service-detail' },
];

const viewports = [
  { name: 'mobile', width: 375, height: 812 },
  { name: 'tablet', width: 768, height: 1024 },
  { name: 'desktop', width: 1440, height: 900 },
];

async function audit() {
  const outputDir = './audit-screenshots';
  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
  }

  const browser = await chromium.launch();
  const observations = [];

  for (const viewport of viewports) {
    console.log(`\n=== Testing ${viewport.name} (${viewport.width}x${viewport.height}) ===\n`);

    const context = await browser.newContext({
      viewport: { width: viewport.width, height: viewport.height },
    });
    const page = await context.newPage();

    for (const p of pages) {
      const url = `${BASE_URL}${p.path}`;
      console.log(`Capturing: ${p.name} at ${viewport.name}`);

      try {
        await page.goto(url, { waitUntil: 'networkidle' });
        await page.waitForTimeout(500);

        // Take full page screenshot
        const filename = `${p.name}-${viewport.name}.png`;
        await page.screenshot({
          path: path.join(outputDir, filename),
          fullPage: true
        });

        // Analyze page elements
        const analysis = await page.evaluate(() => {
          const issues = [];

          // Check for horizontal overflow
          if (document.documentElement.scrollWidth > document.documentElement.clientWidth) {
            issues.push('OVERFLOW: Page has horizontal scroll');
          }

          // Check all sections for padding/margin consistency
          const sections = document.querySelectorAll('section, .section');
          sections.forEach((section, i) => {
            const styles = window.getComputedStyle(section);
            const paddingTop = styles.paddingTop;
            const paddingBottom = styles.paddingBottom;
            if (paddingTop !== paddingBottom) {
              issues.push(`Section ${i}: Asymmetric vertical padding (${paddingTop} / ${paddingBottom})`);
            }
          });

          // Check container widths
          const containers = document.querySelectorAll('.container-custom');
          const containerWidths = new Set();
          containers.forEach(c => {
            containerWidths.add(c.getBoundingClientRect().width);
          });
          if (containerWidths.size > 1) {
            issues.push(`Inconsistent container widths: ${[...containerWidths].join(', ')}px`);
          }

          // Check for squished content (narrow max-width)
          const narrowElements = document.querySelectorAll('[class*="max-w-"]');
          narrowElements.forEach(el => {
            const rect = el.getBoundingClientRect();
            const parent = el.parentElement;
            if (parent) {
              const parentRect = parent.getBoundingClientRect();
              const widthRatio = rect.width / parentRect.width;
              if (widthRatio < 0.5 && rect.width < 400) {
                issues.push(`Narrow element: ${el.className.substring(0, 50)} (${Math.round(rect.width)}px, ${Math.round(widthRatio * 100)}% of parent)`);
              }
            }
          });

          // Check hero sections
          const heroes = document.querySelectorAll('section:first-of-type');
          heroes.forEach(hero => {
            const h1 = hero.querySelector('h1');
            const p = hero.querySelector('p');
            if (h1 && p) {
              const h1Rect = h1.getBoundingClientRect();
              const pRect = p.getBoundingClientRect();
              if (Math.abs(h1Rect.left - pRect.left) > 5) {
                issues.push(`Hero: H1 and P not aligned (${h1Rect.left}px vs ${pRect.left}px)`);
              }
            }
          });

          // Check grid gaps consistency
          const grids = document.querySelectorAll('.grid');
          const gaps = new Set();
          grids.forEach(grid => {
            const styles = window.getComputedStyle(grid);
            gaps.add(styles.gap);
          });

          // Check button sizes
          const buttons = document.querySelectorAll('.btn, .btn-primary, .btn-secondary, button, a[class*="btn"]');
          const buttonHeights = new Set();
          buttons.forEach(btn => {
            const rect = btn.getBoundingClientRect();
            if (rect.height > 0) {
              buttonHeights.add(Math.round(rect.height));
            }
          });
          if (buttonHeights.size > 2) {
            issues.push(`Inconsistent button heights: ${[...buttonHeights].join(', ')}px`);
          }

          // Check card padding consistency
          const cards = document.querySelectorAll('.card');
          const cardPaddings = new Set();
          cards.forEach(card => {
            const styles = window.getComputedStyle(card);
            cardPaddings.add(styles.padding);
          });
          if (cardPaddings.size > 1) {
            issues.push(`Inconsistent card padding: ${[...cardPaddings].join(', ')}`);
          }

          // Check text alignment in sections
          const textElements = document.querySelectorAll('h1, h2, h3, p');
          let leftAligned = 0, centerAligned = 0;
          textElements.forEach(el => {
            const styles = window.getComputedStyle(el);
            if (styles.textAlign === 'center') centerAligned++;
            else leftAligned++;
          });

          return {
            issues,
            stats: {
              sections: sections.length,
              containers: containers.length,
              grids: grids.length,
              cards: cards.length,
              buttons: buttons.length,
              gridGaps: [...gaps],
              buttonHeights: [...buttonHeights],
            }
          };
        });

        if (analysis.issues.length > 0) {
          observations.push({
            page: p.name,
            viewport: viewport.name,
            issues: analysis.issues,
            stats: analysis.stats
          });
          analysis.issues.forEach(issue => console.log(`  ⚠️  ${issue}`));
        } else {
          console.log(`  ✓ No major issues detected`);
        }

      } catch (error) {
        console.error(`  ✗ Error: ${error.message}`);
      }
    }

    await context.close();
  }

  await browser.close();

  // Write report
  const report = {
    timestamp: new Date().toISOString(),
    observations,
    summary: {
      totalPages: pages.length,
      totalViewports: viewports.length,
      pagesWithIssues: new Set(observations.map(o => o.page)).size,
    }
  };

  fs.writeFileSync('./audit-report.json', JSON.stringify(report, null, 2));
  console.log('\n\n=== AUDIT COMPLETE ===');
  console.log(`Screenshots saved to: ${outputDir}/`);
  console.log(`Report saved to: audit-report.json`);
  console.log(`Pages with issues: ${report.summary.pagesWithIssues}/${pages.length}`);
}

audit().catch(console.error);
