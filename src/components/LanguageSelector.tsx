'use client'

import { usePathname, useRouter } from 'next/navigation';
import { locales } from '@/i18n/routing';

const languages = {
  ko: { name: '한국어', flag: '🇰🇷' },
  en: { name: 'English', flag: '🇺🇸' },
  ja: { name: '日本語', flag: '🇯🇵' },
  ru: { name: 'Русский', flag: '🇷🇺' },
};

export default function LanguageSelector({ currentLocale }: { currentLocale: string }) {
  const pathname = usePathname();
  const router = useRouter();

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const newLocale = e.target.value;
    
    // Remove current locale from pathname if it exists
    const segments = pathname.split('/');
    const currentLocaleIndex = segments.findIndex(segment => locales.includes(segment as any));
    
    if (currentLocaleIndex > -1) {
      segments[currentLocaleIndex] = newLocale;
    } else {
      segments.splice(1, 0, newLocale);
    }
    
    const newPath = segments.join('/') || '/';
    router.push(newPath);
  };

  return (
    <select
      value={currentLocale}
      onChange={handleChange}
      className="surface px-3 py-2 text-sm font-medium text-primary focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 transition-all duration-200 hover:scale-105"
      suppressHydrationWarning
    >
      {locales.map(locale => (
        <option key={locale} value={locale} className="text-primary">
          {languages[locale].flag} {languages[locale].name}
        </option>
      ))}
    </select>
  );
}