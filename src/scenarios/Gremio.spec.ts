import { test } from '@playwright/test';
import { GremioPage } from '../support/pages/GremioPage';

test.describe('Testes do Site do Grêmio', () => {
  
  let gremioPage: GremioPage; // Declara a page fora para ser acessível em todos os testes

  test.beforeEach(async ({ page }) => {
    gremioPage = new GremioPage(page);
  });

  // Teste 1: Validar o título da página inicial
  test('deve carregar a home e validar o título', async () => {
    await gremioPage.navegarParaHome();
    await gremioPage.validarTituloPrincipal();
  });

  // Teste 2: Validar navegação para a página de notícias
  test('deve navegar para a página de notícias', async () => {
    await gremioPage.navegarParaHome();
    await gremioPage.clicarEmNoticias();
    await gremioPage.validarUrlDeNoticias();
  });

});