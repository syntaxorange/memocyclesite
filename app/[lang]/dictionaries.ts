import 'server-only'

export type Locale = keyof typeof dictionaries

const dictionaries = {
  en: () => import('./dictionaries/en.json').then((module) => module.default),
  ru: () => import('./dictionaries/ru.json').then((module) => module.default),
}
 
export const getDictionary = async (locale: Locale) => dictionaries[locale]()