// Exporta um objeto com os seletores
export const gremioElements = {
  // O seletor correto para o logo (que é um link <a>)
  tituloPrincipal: 'a[title="Grêmio Foot-Ball Porto Alegrense - Página principal"]',
  
  // O link de "Notícias" não tem 'title', mas podemos pegá-lo pelo texto
  // Usamos getByRole, que é o método preferido do Playwright
  linkNoticias: 'a.nav-link[href="https://gremio.net/noticias/"]'
};