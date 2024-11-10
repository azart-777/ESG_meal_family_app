import React from 'react';
import { FieldRenderProps } from "react-final-form";
import './ContactUsSummary.scss'
import { useTranslation } from "react-i18next";

interface ContactUsSummaryProps extends FieldRenderProps<string, HTMLElement> {
    hasError?: boolean;
}

export const ContactUsSummary: React.FC<ContactUsSummaryProps> = ({ input, meta, hasError  }) => {
    const { t } = useTranslation(["pages/home-page"]);

    const summaryOptions: string[] = [
        t('contactUs.form.userSummary.options.1'),
        t('contactUs.form.userSummary.options.2'),
        t('contactUs.form.userSummary.options.3'),
        t('contactUs.form.userSummary.options.4'),
        t('contactUs.form.userSummary.options.5')
    ];

    return (
        <div className={`form-summary ${hasError ? 'error' : ''}`}>
            <div className={'form-summary__question-text mb-sm'}>
                {t('contactUs.form.userSummary.question')}
            </div>
            <div className={'form-summary__option-container'}>
                <ul className={'form-summary__option-item-container'}>
                    {summaryOptions.map((container, index) => (
                        <li
                            key={index}
                            className={`form-summary__option-item ${input.value === container ? 'selected' : ''}`}
                            onClick={() => input.onChange(container)}
                        >
                            {container}
                        </li>
                    ))}
                </ul>

            </div>
        </div>
    );
};