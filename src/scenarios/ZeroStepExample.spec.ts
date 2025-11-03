import { test } from '@playwright/test';
import { ai } from '@zerostep/playwright';

test('zerostep example', async ({ page }) => {
  await page.goto('https://gremio.net/');

  const aiArgs = { page, test };
  await ai('Click in buy T-shirt', aiArgs);
});
