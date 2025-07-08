/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://noxatrisdev.fr', // Remplace par ton vrai domaine
  generateRobotsTxt: true,
  // Optionnel : exclure certaines routes
  exclude: ['/admin/*', '/secret'],
  // Optionnel : inclure des routes dynamiques
  sitemapSize: 5000,
};