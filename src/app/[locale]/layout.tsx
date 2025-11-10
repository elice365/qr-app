import { Inter } from "next/font/google";
import Script from "next/script";
import "@/styles/globals.css";
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { generateMetadata as generateSEOMetadata, generateStructuredData } from '@/utils/seo';
import { themeScript } from '@/lib/themeScript';

const inter = Inter({ subsets: ["latin"] });

export async function generateMetadata({
  params
}: {
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params;
  return generateSEOMetadata(locale as 'ko' | 'en' | 'ja' | 'ru');
}

export default async function RootLayout({
  children,
  params
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}>) {
  const { locale } = await params;
  const messages = await getMessages();

  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://qr.elice.pro';
  const locales = ['ko', 'en', 'ja', 'ru'];
  
  // Generate hreflang links for all locales
  const hreflangLinks = locales.map(l => ({
    rel: 'alternate',
    hreflang: l,
    href: `${baseUrl}/${l}`
  }));
  
  // Add x-default for root
  hreflangLinks.push({
    rel: 'alternate',
    hreflang: 'x-default',
    href: baseUrl
  });

  // Safe structured data generation
  const safeStructuredData = (() => {
    try {
      return JSON.stringify(generateStructuredData(locale));
    } catch (error) {
      console.error('Error serializing structured data:', error);
      return JSON.stringify([]);
    }
  })();

  return (
    <html lang={locale} className="h-full" suppressHydrationWarning>
      <head>
        <meta name="google-adsense-account" content="ca-pub-2536194114435637"/>
        <meta name="naver-site-verification" content="716a1517209449c210dc438abe96e6dbaaf8b6c6" />
        <meta name="color-scheme" content="light" />
        <style dangerouslySetInnerHTML={{
          __html: `
            html { color-scheme: light !important; background: white !important; }
            @media (prefers-color-scheme: dark) {
              html:not(.dark) { color-scheme: light !important; background: white !important; }
            }
          `
        }} />
        {/* Hreflang tags for language alternates */}
        {hreflangLinks.map((link) => (
          <link
            key={link.hreflang}
            rel={link.rel}
            hrefLang={link.hreflang}
            href={link.href}
          />
        ))}
        <Script
          id="structured-data"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: safeStructuredData,
          }}
        />

      </head>
      <body className={`${inter.className} h-full flex flex-col`} suppressHydrationWarning>
        <Script 
          id="theme-script"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{ __html: themeScript }} 
        />
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-2536194114435637"
          crossOrigin="anonymous"
        />
        <NextIntlClientProvider messages={messages}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}