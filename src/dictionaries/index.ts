import "server-only";

const dictionaries = {
  vi: () => import("./vi.json").then((module) => module.default),
  en: () => import("./en.json").then((module) => module.default),
};

export type Locale = keyof typeof dictionaries;

export const getDictionary = async (locale: Locale) => {
  const lang = dictionaries[locale] ? locale : "vi";
  return dictionaries[lang]();
};
