import React, { createContext, useContext, useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Translation } from '../constants';

interface Language {
    code: string;
    name: string;
    abbreviation: string;
}

interface LanguageContextProps {
    selectedLanguage: Language;
    languages: Language[];
    changeLanguage: (code: string) => void;
}

const LanguageContext = createContext<LanguageContextProps | undefined>(undefined);

const languages: Language[] = [
    { code: Translation.Languages.en_US.key, name: Translation.Languages.en_US.languageSwitchMenuItemText, abbreviation: 'ENG' },
    { code: Translation.Languages.uk_UA.key, name: Translation.Languages.uk_UA.languageSwitchMenuItemText, abbreviation: 'UA' },
];

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const { i18n } = useTranslation();
    const [selectedLanguage, setSelectedLanguage] = useState<Language>(() => {
        const savedLanguageCode = localStorage.getItem('selectedLanguage') || i18n.language;
        return languages.find(lang => lang.code === savedLanguageCode) || languages[0];
    });

    useEffect(() => {
        i18n.on('languageChanged', (lng) => {
            const newLanguage = languages.find(lang => lang.code === lng);
            if (newLanguage) {
                setSelectedLanguage(newLanguage);
            }
        });

        return () => {
            i18n.off('languageChanged');
        };
    }, [i18n]);

    const changeLanguage = (code: string) => {
        const language = languages.find(lang => lang.code === code);
        if (language) {
            localStorage.setItem('selectedLanguage', language.code);
            i18n.changeLanguage(language.code);
        }
    };

    return (
        <LanguageContext.Provider value={{ selectedLanguage, languages, changeLanguage }}>
            {children}
        </LanguageContext.Provider>
    );
};

export const useLanguage = () => {
    const context = useContext(LanguageContext);
    if (!context) {
        throw new Error('useLanguage must be used within a LanguageProvider');
    }
    return context;
};
