#!/usr/bin/env node
import { dirname, join } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const projectRoot = join(__dirname, '..');

async function savePersonAdressData(
    postOrt,
    postNummer,
    gatuadressNamn,
    personCount,
    ratsitLink,
) {
    try {
        const { exec } = await import('child_process');
        const { promisify } = await import('util');
        const execAsync = promisify(exec);

        // Sanitize values to safely include inside single-quoted PHP strings
        const esc = (s) => (s === null || s === undefined) ? '' : String(s).replace(/\\/g, '\\\\').replace(/'/g, "\\'");

        const pOrt = esc(postOrt);
        const pNum = esc(postNummer);
        const gAddr = esc(gatuadressNamn);
        const rLink = esc(ratsitLink);

        // Use artisan tinker to save data. Increase maxBuffer to handle larger output.
        const cmd = `cd ${projectRoot} && php artisan tinker --execute="\\App\\Models\\RatsitAdresser::create(['post_ort' => '${pOrt}', 'post_nummer' => '${pNum}', 'gatuadress_namn' => '${gAddr}', 'personer_count' => ${personCount}, 'personer_link' => '${rLink}']); echo 'Saved person address: ${gAddr}, ${pNum} ${pOrt}, Count: ${personCount}';"`;

        const { stdout, stderr } = await execAsync(cmd, { maxBuffer: 10 * 1024 * 1024 });

        if (stderr) {
            console.error('Save stderr:', stderr);
        }

        console.log('Save result:', stdout.trim());
        return true;
    } catch (error) {
        console.error('Error saving person address data:', error.message);
        return false;
    }
}

async function scrapeRatsitPersonAdresser(url) {
    console.log(`Starting Ratsit person address scraping for: ${url}`);

    const { chromium } = await import('playwright');
    let browser = null;

    try {
        // Launch browser with realistic settings
        browser = await chromium.launch({
            headless: true,
            executablePath: '/usr/bin/google-chrome',
            args: [
                '--no-sandbox',
                '--disable-setuid-sandbox',
                '--disable-dev-shm-usage',
                '--disable-accelerated-2d-canvas',
                '--no-first-run',
                '--no-zygote',
                '--disable-gpu',
            ],
        });

        const context = await browser.newContext({
            userAgent:
                'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
            viewport: { width: 1920, height: 1080 },
            locale: 'sv-SE',
        });

        const page = await context.newPage();

        // Navigate to URL and capture response
        const response = await page.goto(url, { waitUntil: 'networkidle' });

        // Log final page URL and response status for diagnostics
        console.log('Final page URL:', page.url());
        console.log('Response status:', response ? response.status() : 'no response');

        // Wait for page to load
        await page.waitForTimeout(2000);

        // Handle cookie dialog if present
        try {
            const cookieButton = await page.$(
                'button:has-text("Acceptera alla"), button:has-text("Accept all"), button[data-testid="accept-all-button"]',
            );
            if (cookieButton) {
                await cookieButton.click();
                await page.waitForTimeout(1000);
            }
        } catch (error) {
            console.log('No cookie dialog found or already handled');
        }

        // Find main heading to extract post_ort and post_nummer
        const headingElement = await page.$('h1.tree-structure__h1.site-h2');
        if (!headingElement) {
            console.error('Could not find main heading element');
            console.error('Current page URL:', page.url());
            console.error('Response status:', response ? response.status() : 'no response');
            try {
                const content = await page.content();
                console.error('Page content snippet:', content.slice(0, 1000));
            } catch (e) {
                console.error('Failed to read page content:', e.message);
            }
            await browser.close();
            return;
        }

        const headingText = await headingElement.textContent();
        console.log('Heading found:', headingText.trim());

        // Extract post_ort and post_nummer from heading
        // Example: "Privatpersoner i Surte på postnummer 445 55 (528 st)"
        const headingMatch = headingText
            .trim()
            .match(/i\s+(\w+)\s+på\s+postnummer\s+(\d+\s+\d+)/);

        if (!headingMatch) {
            console.error('Could not extract post_ort and post_nummer from heading');
            console.log('Heading text:', headingText.trim());
            console.error('Current page URL:', page.url());
            console.error('Response status:', response ? response.status() : 'no response');
            try {
                const content = await page.content();
                console.error('Page content snippet:', content.slice(0, 1000));
            } catch (e) {
                console.error('Failed to read page content:', e.message);
            }
            await browser.close();
            return;
        }

        const postOrt = headingMatch[1];
        const postNummer = headingMatch[2];

        console.log(
            `Extracted - Post ort: ${postOrt}, Post nummer: ${postNummer}`,
        );

        // Find all tree-structure__ul elements and extract address data
        const addressElements = await page.$$('.tree-structure__ul');

        if (addressElements.length === 0) {
            console.log('No address lists found');
            await browser.close();
            return;
        }

        let totalAddresses = 0;

        for (const ulElement of addressElements) {
            // Get all li elements within this ul
            const listItems = await ulElement.$$('li');

            for (const li of listItems) {
                try {
                    // Extract address name and link
                    const linkElement = await li.$('a');
                    if (!linkElement) continue;

                    const gatuadressNamn = await linkElement.textContent();
                    const ratsitLink = await linkElement.getAttribute('href');

                    // Extract person count
                    const countElement = await li.$('.tree-structure__count');
                    let personCount = 0;

                    if (countElement) {
                        const countText = await countElement.textContent();
                        const countMatch = countText.match(/\((\d+)\)/);
                        if (countMatch) {
                            personCount = parseInt(countMatch[1]);
                        }
                    }

                    // Construct full URL if it's relative
                    const fullLink = ratsitLink.startsWith('http')
                        ? ratsitLink
                        : `https://www.ratsit.se${ratsitLink}`;

                    console.log(
                        `Found address: ${gatuadressNamn}, Count: ${personCount}, Link: ${fullLink}`,
                    );

                    // Save to database
                    const saved = await savePersonAdressData(
                        postOrt,
                        postNummer,
                        gatuadressNamn,
                        personCount,
                        fullLink,
                    );

                    if (saved) {
                        totalAddresses++;
                    }
                } catch (error) {
                    console.error(
                        'Error processing address item:',
                        error.message,
                    );
                }
            }
        }

        console.log(
            `Scraping completed successfully. Total addresses saved: ${totalAddresses}`,
        );
        await browser.close();
    } catch (error) {
        console.error('Error during scraping:', error);
        if (browser) {
            await browser.close();
        }
    }
}

// Get URL from command line argument
const url = process.argv[2];

if (!url) {
    console.error('Please provide a URL as argument');
    console.error(
        'Example: node ratsit_person_adresser.mjs "https://www.ratsit.se/personer/Ale-kommun/Surte-44555"',
    );
    process.exit(1);
}

// Run scraper
scrapeRatsitPersonAdresser(url).catch(console.error);
