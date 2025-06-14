'use client';
import { translations, Locale } from '@/lib/translations';

export function useTranslation(locale: Locale) {
  return translations[locale];
}
