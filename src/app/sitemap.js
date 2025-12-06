export default function sitemap() {
    return [
      {
        url: 'https://abubakkar-portfolio.vercel.app',
        lastModified: new Date(),
        changeFrequency: 'yearly',
        priority: 1,
      },
      {
        url: 'https://abubakkar-portfolio.vercel.app/#about',
        lastModified: new Date(),
        changeFrequency: 'monthly',
        priority: 0.8,
      },
      {
        url: 'https://abubakkar-portfolio.vercel.app/#projects',
        lastModified: new Date(),
        changeFrequency: 'weekly',
        priority: 0.8,
      },
      {
        url: 'https://abubakkar-portfolio.vercel.app/#contact',
        lastModified: new Date(),
        changeFrequency: 'yearly',
        priority: 0.5,
      },
    ]
  }
