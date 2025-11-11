import { NextResponse } from 'next/server';

// Shared list of QR code types
export const QR_PAGES = [
  '',
  '/url', '/text', '/email', '/sms', '/wifi', '/vcard',
  '/bitcoin', '/twitter', '/facebook', '/pdf', '/mp3',
  '/appstore', '/image'
] as const;

// Supported locales
export const SUPPORTED_LOCALES = ['ko', 'en', 'ja', 'ru'] as const;

/**
 * Generate XML sitemap for a specific locale
 * @param locale - Language locale (ko, en, ja, ru)
 * @returns NextResponse with XML sitemap
 */
export function generateLocaleSitemap(locale: string): NextResponse {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://qr.elice.pro';

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xhtml="http://www.w3.org/1999/xhtml">
${QR_PAGES.map(page => `  <url>
    <loc>${baseUrl}/${locale}${page}</loc>
    <lastmod>${new Date().toISOString()}</lastmod>
    <changefreq>${page === '' ? 'daily' : 'weekly'}</changefreq>
    <priority>${page === '' ? '1.0' : '0.8'}</priority>
    <xhtml:link rel="alternate" hreflang="ko" href="${baseUrl}/ko${page}"/>
    <xhtml:link rel="alternate" hreflang="en" href="${baseUrl}/en${page}"/>
    <xhtml:link rel="alternate" hreflang="ja" href="${baseUrl}/ja${page}"/>
    <xhtml:link rel="alternate" hreflang="ru" href="${baseUrl}/ru${page}"/>
    <xhtml:link rel="alternate" hreflang="x-default" href="${baseUrl}/en${page}"/>
  </url>`).join('\n')}
</urlset>`;

  return new NextResponse(sitemap, {
    headers: {
      'Content-Type': 'application/xml',
      'Cache-Control': 'public, max-age=3600, must-revalidate'
    },
  });
}
