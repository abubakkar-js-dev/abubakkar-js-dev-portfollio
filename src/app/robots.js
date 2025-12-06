export default function robots() {
    return {
      rules: {
        userAgent: '*',
        allow: '/',
        disallow: '/private/',
      },
      sitemap: 'https://abubakkar-portfolio.vercel.app/sitemap.xml',
    }
  }
