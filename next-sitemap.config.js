/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.NEXT_PUBLIC_BASE_URL || 'https://tod.com.sa',
  generateRobotsTxt: true, // (optional)
  sitemapSize: 7000,
  changefreq: 'daily',
  priority: 0.7,
};
