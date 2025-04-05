export const loadTranslations = async (locale: string): Promise<any> => {
    const cachedTranslations = localStorage.getItem(`translations_${locale}`);
    if (cachedTranslations) {
        return JSON.parse(cachedTranslations);
    } else {
        try {
            const response = await fetch(`/assets/locales/${locale}.json`);
            if (response.ok) {
                const data = await response.json();
                localStorage.setItem(`translations_${locale}`, JSON.stringify(data));
                return data;
            } else {
                console.error('Error loading translations');
                return null;
            }
        } catch (error) {
            console.error('Network error:', error);
            return null;
        }
    }
};
