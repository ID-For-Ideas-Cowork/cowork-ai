describe('Ejemplo de Test E2E con Playwright', () => {
  // Nota: Este es un archivo de ejemplo
  // Implementa tus propios tests en qa/tests/
  
  test('should load homepage', async ({ page }) => {
    await page.goto('http://localhost:3000');
    await expect(page).toHaveTitle(/CoWork AI/);
  });
  
  test('should navigate to chat page', async ({ page }) => {
    await page.goto('http://localhost:3000');
    await page.click('text=Chat');
    await expect(page).toHaveURL(/.*chat/);
  });
  
  // TODO: Completa las tareas QA-01 a QA-06
});
