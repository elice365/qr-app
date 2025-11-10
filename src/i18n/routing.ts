import {defineRouting} from 'next-intl/routing';
import {createNavigation} from 'next-intl/navigation';

export const locales = ['ko', 'en', 'ja', 'ru'] as const;

export const routing = defineRouting({
  locales,
  defaultLocale: 'ko',
  localePrefix: 'always'
});

// Lightweight wrappers around Next.js' navigation APIs
// that will consider the routing configuration
export const {Link, redirect, usePathname, useRouter} =
  createNavigation(routing);