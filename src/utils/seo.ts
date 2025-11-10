import { Metadata } from 'next';

// SEO Configuration for each locale
export const SEO_CONFIG = {
  ko: {
    title: 'QR 코드 생성기 - 무료 온라인 QR 코드 메이커 | 2025',
    description: '무료 QR 코드 생성기. URL, WiFi, 명함, SMS 등 즉시 생성. 로고·색상 커스터마이징, 회원가입 없이 무제한 사용.',
    keywords: 'QR 코드 생성기, 무료 QR 코드, QR 메이커, 바코드 생성, 한국 QR 코드, WiFi QR, 명함 QR, URL QR, 모바일 QR, QR 코드 만들기',
    ogTitle: '무료 QR 코드 생성기 - 맞춤형 QR 코드 즉시 생성',
    ogDescription: '무료 QR 코드 생성기. URL, WiFi, 명함 등 다양한 형식 지원. 로고·색상 커스터마이징, PNG/SVG 다운로드 가능.',
  },
  en: {
    title: 'QR Code Generator - Free Online QR Code Maker | 2025',
    description: 'Create free QR codes instantly for URLs, WiFi, vCard, SMS and more. Customize with logo, colors, and styles. Download in high-quality PNG or SVG format. No signup required, unlimited usage.',
    keywords: 'QR code generator, free QR code, QR maker, barcode generator, online QR code, WiFi QR, vCard QR, URL QR, mobile QR, create QR code, QR code scanner',
    ogTitle: 'Free QR Code Generator - Create Custom QR Codes Instantly',
    ogDescription: 'Generate free QR codes online. Customize with logo and colors. Support WiFi, URL, vCard and more. Download high-quality PNG/SVG.',
  },
  ja: {
    title: 'QRコードジェネレーター - 無料オンラインQRコードメーカー | 2025',
    description: '無料でQRコードを即座に作成。URL、WiFi、名刺（vCard）、SMSなど対応。ロゴ挿入、色カスタマイズ可能。高品質PNG/SVGダウンロード。登録不要、無制限使用。',
    keywords: 'QRコード生成, 無料QRコード, QRメーカー, バーコード作成, 日本QRコード, WiFi QR, 名刺QR, URL QR, モバイルQR, QRコード作成, QRコードリーダー',
    ogTitle: '無料QRコードジェネレーター - カスタムQRコード即座作成',
    ogDescription: 'オンラインで無料QRコード生成。ロゴ、色カスタマイズ対応。WiFi、URL、名刺等サポート。高品質PNG/SVGダウンロード。',
  },
  ru: {
    title: 'Генератор QR-кодов - Бесплатный онлайн создатель QR | 2025',
    description: 'Создавайте QR-коды бесплатно и мгновенно для URL, WiFi, визиток (vCard), SMS и другого. Настройка с логотипом, цветами и стилями. Скачивание в высоком качестве PNG или SVG. Без регистрации, неограниченное использование.',
    keywords: 'генератор QR кода, бесплатный QR код, создатель QR, генератор штрих-кода, онлайн QR код, WiFi QR, визитка QR, URL QR, мобильный QR, создать QR код, сканер QR кода',
    ogTitle: 'Бесплатный генератор QR-кодов - Мгновенное создание QR-кодов',
    ogDescription: 'Генерируйте бесплатные QR-коды онлайн. Настройка с логотипом и цветами. Поддержка WiFi, URL, визиток. Скачивание PNG/SVG высокого качества.',
  },
};

// Generate metadata for each locale
export function generateMetadata(locale: string): Metadata {
  const config = SEO_CONFIG[locale as keyof typeof SEO_CONFIG] || SEO_CONFIG.ko;
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://qr.elice.pro';
  const currentUrl = `${baseUrl}/${locale}`;
  
  return {
    title: config.title,
    description: config.description,
    keywords: config.keywords,
    authors: [{ name: 'QR Generator Team' }],
    creator: 'QR Generator',
    publisher: 'QR Generator',
    formatDetection: {
      email: false,
      address: false,
      telephone: false,
    },
    metadataBase: new URL(baseUrl),
    alternates: {
      canonical: currentUrl,
      languages: {
        'ko': '/ko',
        'en': '/en',
        'ja': '/ja',
        'ru': '/ru',
      },
    },
    openGraph: {
      title: config.ogTitle,
      description: config.ogDescription,
      url: currentUrl,
      siteName: 'QR Code Generator',
      images: [
        {
          url: `${baseUrl}/og-image.png`,
          width: 1200,
          height: 630,
          alt: config.ogTitle,
        },
      ],
      locale: locale,
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: config.ogTitle,
      description: config.ogDescription,
      images: [`${baseUrl}/og-image.png`],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
    icons: {
      icon: '/favicon.ico',
      shortcut: '/favicon-16x16.png',
      apple: '/apple-touch-icon.png',
    },
  };
}

// Structured Data for SEO
export function generateStructuredData(locale: string) {
  const config = SEO_CONFIG[locale as keyof typeof SEO_CONFIG] || SEO_CONFIG.ko;
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://qr.elice.pro';
  
  // Validate locale parameter
  if (!locale || typeof locale !== 'string') {
    locale = 'ko';
  }
  
  // Language-specific names
  const appNames = {
    ko: 'QR 코드 생성기',
    en: 'QR Code Generator',
    ja: 'QRコードジェネレーター',
    ru: 'Генератор QR-кодов'
  };
  
  return [
    // WebApplication schema
    {
      '@context': 'https://schema.org',
      '@type': 'WebApplication',
      '@id': `${baseUrl}/#webapp`,
      name: appNames[locale as keyof typeof appNames] || appNames.en,
      description: config.description,
      url: `${baseUrl}/${locale}`,
      inLanguage: locale,
      applicationCategory: 'UtilityApplication',
      operatingSystem: 'Any',
      offers: {
        '@type': 'Offer',
        price: '0',
        priceCurrency: 'USD',
      },
      aggregateRating: {
        '@type': 'AggregateRating',
        ratingValue: '4.8',
        ratingCount: '1250',
        bestRating: '5',
        worstRating: '1'
      },
      creator: {
        '@type': 'Organization',
        name: 'QR Generator Team',
        url: baseUrl
      },
      featureList: [
        'URL QR Code Generation',
        'WiFi QR Code Generation',
        'vCard QR Code Generation',
        'SMS QR Code Generation',
        'Custom Colors and Styles',
        'Logo Integration',
        'PNG/SVG Export',
        'No Registration Required'
      ]
    },
    // BreadcrumbList schema
    {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        {
          '@type': 'ListItem',
          position: 1,
          item: {
            '@id': baseUrl,
            name: 'Home'
          }
        },
        {
          '@type': 'ListItem',
          position: 2,
          item: {
            '@id': `${baseUrl}/${locale}`,
            name: appNames[locale as keyof typeof appNames] || appNames.en
          }
        }
      ]
    },
    // Organization schema
    {
      '@context': 'https://schema.org',
      '@type': 'Organization',
      '@id': `${baseUrl}/#organization`,
      name: 'QR Generator',
      url: baseUrl,
      logo: `${baseUrl}/qr.svg`,
      sameAs: [
        // Add your social media URLs here if available
      ]
    },
    // FAQPage schema
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: locale === 'ko' ? 'QR 코드는 무료인가요?' : 
                locale === 'ja' ? 'QRコードは無料ですか？' :
                locale === 'ru' ? 'QR-коды бесплатные?' :
                'Are QR codes free?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: locale === 'ko' ? '네, 모든 QR 코드 생성은 완전 무료입니다. 회원가입도 필요 없습니다.' :
                  locale === 'ja' ? 'はい、すべてのQRコード生成は完全無料です。登録も不要です。' :
                  locale === 'ru' ? 'Да, все QR-коды генерируются совершенно бесплатно. Регистрация не требуется.' :
                  'Yes, all QR code generation is completely free. No registration required.'
          }
        },
        {
          '@type': 'Question',
          name: locale === 'ko' ? 'QR 코드에 로고를 넣을 수 있나요?' :
                locale === 'ja' ? 'QRコードにロゴを追加できますか？' :
                locale === 'ru' ? 'Можно ли добавить логотип в QR-код?' :
                'Can I add a logo to my QR code?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: locale === 'ko' ? '네, QR 코드 중앙에 로고나 이미지를 추가할 수 있습니다.' :
                  locale === 'ja' ? 'はい、QRコードの中央にロゴや画像を追加できます。' :
                  locale === 'ru' ? 'Да, вы можете добавить логотип или изображение в центр QR-кода.' :
                  'Yes, you can add a logo or image to the center of your QR code.'
          }
        }
      ]
    }
  ];
}