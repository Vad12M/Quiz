import { useRouter } from "next/router";

export default function useLanguage() {
  const router = useRouter();
  const { query } = router;
  const language = query.lang || 'en-US';

  const getTranslation = (text?: { [key: string]: string }): string => {
    return text?.[language as string] || '';
  }

  return { language, getTranslation };
}
