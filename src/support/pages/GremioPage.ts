import { Page, expect } from '@playwright/test';
import  BasePage  from './BasePage'; 
import { config } from '../helpers/config'; 

export class GremioPage extends BasePage {
  
  constructor(page: Page) {
    super(page); 
  }

  async navegarParaHome() {
    await this.page.goto(config.gremio);
  }

  async clicarEmNoticias() {

    await this.page.getByRole('link', { name: 'Notícias', exact: true }).click();
  }

  async validarTituloPrincipal() {
    await expect(this.page.getByRole('link', { name: 'Grêmio Foot-Ball Porto Alegrense', exact: true })).toBeVisible();
  }

  async validarUrlDeNoticias() {
    await expect(this.page).toHaveURL(/.*noticias/);
  }
}