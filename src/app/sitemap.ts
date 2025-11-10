import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://qr.elice.pro';
  const locales = ['ko', 'en', 'ja', 'ru'];
  const lastModified = new Date('2025-01-01'); // Fixed date to prevent hydration issues
  
  const sitemap: MetadataRoute.Sitemap = [];
  
  // Add root URL (redirects to default locale)
  sitemap.push({
    url: baseUrl,
    lastModified: lastModified,
    changeFrequency: 'daily',
    priority: 1.0,
    alternates: {
      languages: {
        ko: `${baseUrl}/ko`,
        en: `${baseUrl}/en`,
        ja: `${baseUrl}/ja`,
        ru: `${baseUrl}/ru`,
      }
    }
  });
  
  // Generate URLs for all locales with proper alternates
  locales.forEach(locale => {
    // Main page for each locale
    sitemap.push({
      url: `${baseUrl}/${locale}`,
      lastModified: lastModified,
      changeFrequency: 'daily',
      priority: 1.0,
      alternates: {
        languages: locales.reduce((acc, l) => ({
          ...acc,
          [l]: `${baseUrl}/${l}`
        }), {})
      }
    });
    
    // Add sub-pages for valid QR types only
    const subPages = [
      'url', 'text', 'wifi', 'vcard', 'sms', 'email',
      'bitcoin', 'twitter', 'facebook', 'pdf', 'mp3',
      'appstore', 'image'
    ];
    
    subPages.forEach(page => {
      sitemap.push({
        url: `${baseUrl}/${locale}/${page}`,
        lastModified: lastModified,
        changeFrequency: 'weekly',
        priority: 0.8,
        alternates: {
          languages: locales.reduce((acc, l) => ({
            ...acc,
            [l]: `${baseUrl}/${l}/${page}`
          }), {})
        }
      });
    });
  });
  
  return sitemap;
}