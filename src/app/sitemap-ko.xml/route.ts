import { generateLocaleSitemap } from '@/utils/sitemap';

export async function GET() {
  return generateLocaleSitemap('ko');
}