import { notFound } from 'next/navigation';
import { locales } from '@/i18n/routing';
import { QrCode } from 'lucide-react';
import QRGenerator from '@/components/QRGenerator';
import LanguageSelector from '@/components/LanguageSelector';
import GoogleAdsense from '@/components/GoogleAdsense';
import Footer from '@/components/Footer';
import ThemeToggle from '@/components/ThemeToggle';
import { getTranslations } from 'next-intl/server';
import { generateTypeMetadata } from '@/utils/seo';

const validQRTypes = [
  'url', 'text', 'email', 'sms', 'wifi', 'vcard',
  'bitcoin', 'twitter', 'facebook', 'pdf', 'mp3',
  'appstore', 'image'
] as const;

interface PageProps {
  params: Promise<{
    locale: string;
    type: string;
  }>;
}

// Helper function to validate locale and type
function isValidLocaleAndType(locale: string, type: string): boolean {
  return (locales as ReadonlyArray<string>).includes(locale) &&
         (validQRTypes as ReadonlyArray<string>).includes(type);
}

export async function generateMetadata({ params }: PageProps) {
  const { locale, type } = await params;

  // Validate locale and type
  if (!isValidLocaleAndType(locale, type)) {
    return {};
  }

  return generateTypeMetadata(locale, type);
}

export default async function QRTypePage({ params }: PageProps) {
  const { locale, type } = await params;

  // Validate locale and type
  if (!isValidLocaleAndType(locale, type)) {
    notFound();
  }

  const t = await getTranslations();

  return (
    <div className="min-h-screen flex flex-col relative">
      {/* Enhanced Header */}
      <header className="surface-elevated shadow-sm border-b border-primary rounded-none">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center justify-between">
            {/* Logo Section */}
            <div className="flex items-center space-x-4">
              <div className="p-3 bg-[rgb(var(--color-primary))] rounded-xl shadow-md">
                <QrCode size={28} className="text-white" />
              </div>
              <div>
                <h1 className="text-2xl sm:text-3xl font-bold text-primary">
                  {t('header.title')}
                </h1>
                <p className="text-sm text-secondary mt-1">
                  {t('header.subtitle')}
                </p>
              </div>
            </div>

            {/* Actions */}
            <div className="flex items-center space-x-3">
              <ThemeToggle />
              <LanguageSelector currentLocale={locale} />
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 container mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8 lg:py-12" suppressHydrationWarning>
        {/* Enhanced Hero Section */}
        <div className="text-center mb-12">
          <div className="relative inline-block">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-primary mb-4">
              {t('hero.title')}
            </h2>
            <div className="absolute -bottom-2 left-0 right-0 h-1 bg-[rgb(var(--color-primary))] rounded-full opacity-60"></div>
          </div>
          <p className="text-lg text-secondary max-w-3xl mx-auto mt-6 leading-relaxed">
            {t('hero.subtitle')}
          </p>
        </div>

        {/* Top Ad - Display ad */}
        <div className="mb-8 flex justify-center">
          <GoogleAdsense
            slot="YOUR_AD_SLOT_ID_1"
            format="horizontal"
            style={{ width: '100%', maxWidth: '728px', height: '90px' }}
          />
        </div>

        {/* QR Generator Component with preselected type */}
        <QRGenerator preselectedType={type} />

        {/* Middle Ad - In-article ad */}
        <div className="my-12 flex justify-center">
          <GoogleAdsense
            slot="YOUR_AD_SLOT_ID_2"
            format="rectangle"
            style={{ width: '100%', maxWidth: '336px', height: '280px' }}
          />
        </div>

        {/* Enhanced How it Works Section */}
        <div className="mt-20 max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-primary mb-4">
              {t('howTo.title')}
            </h3>
            <div className="w-24 h-1 bg-[rgb(var(--color-primary))] rounded-full mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Step 1 */}
            <div className="surface-elevated p-8 text-center group hover:scale-105 transition-all duration-300">
              <div className="relative mb-6">
                <div className="w-20 h-20 bg-[rgb(var(--color-primary))] rounded-2xl flex items-center justify-center mx-auto shadow-lg">
                  <span className="text-2xl font-bold text-white">1</span>
                </div>
                <div className="absolute -inset-2 bg-[rgb(var(--color-primary)/0.2)] rounded-3xl -z-10 group-hover:scale-110 transition-transform duration-300"></div>
              </div>
              <h4 className="font-bold text-xl mb-4 text-primary">
                {t('howTo.step1.title')}
              </h4>
              <p className="text-secondary leading-relaxed">
                {t('howTo.step1.description')}
              </p>
            </div>

            {/* Step 2 */}
            <div className="surface-elevated p-8 text-center group hover:scale-105 transition-all duration-300">
              <div className="relative mb-6">
                <div className="w-20 h-20 bg-[rgb(var(--color-primary))] rounded-2xl flex items-center justify-center mx-auto shadow-lg">
                  <span className="text-2xl font-bold text-white">2</span>
                </div>
                <div className="absolute -inset-2 bg-[rgb(var(--color-primary)/0.2)] rounded-3xl -z-10 group-hover:scale-110 transition-transform duration-300"></div>
              </div>
              <h4 className="font-bold text-xl mb-4 text-primary">
                {t('howTo.step2.title')}
              </h4>
              <p className="text-secondary leading-relaxed">
                {t('howTo.step2.description')}
              </p>
            </div>

            {/* Step 3 */}
            <div className="surface-elevated p-8 text-center group hover:scale-105 transition-all duration-300">
              <div className="relative mb-6">
                <div className="w-20 h-20 bg-[rgb(var(--color-primary))] rounded-2xl flex items-center justify-center mx-auto shadow-lg">
                  <span className="text-2xl font-bold text-white">3</span>
                </div>
                <div className="absolute -inset-2 bg-[rgb(var(--color-primary)/0.2)] rounded-3xl -z-10 group-hover:scale-110 transition-transform duration-300"></div>
              </div>
              <h4 className="font-bold text-xl mb-4 text-primary">
                {t('howTo.step3.title')}
              </h4>
              <p className="text-secondary leading-relaxed">
                {t('howTo.step3.description')}
              </p>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <Footer locale={locale} />
    </div>
  );
}

// Only generate static params for valid QR types to prevent invalid URLs
export async function generateStaticParams() {
  const params = [];

  for (const locale of locales) {
    for (const type of validQRTypes) {
      params.push({ locale, type });
    }
  }

  return params;
}

// Allow dynamic params but validate them in the component
export const dynamicParams = true;