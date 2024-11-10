import React from 'react';
import { Field, Form } from 'react-final-form';
import { FieldRenderProps } from 'react-final-form';
import { ContactUsSummary } from './ContactUsSummary/ContactUsSummary';
import { onSubmit, required, validateEmail } from './ContactUsFormHelpers';
import './ContactUsForm.scss';
import FormTextField from '../../shared/components/form/FormTextField/FormTextField';
import FormSubmitButton from '../../shared/components/form/FormSubmitButton/FormSubmitButton';
import { useTranslation, Trans } from "react-i18next";

export const     ContactUsForm:  React.FC = () => {
    const { t } = useTranslation(["pages/home-page", "validation"]);

    return (
        <Form
            onSubmit={onSubmit}
            render={({handleSubmit, form, submitting, pristine}) => {
                const formState  = form.getState();
                const touched = formState?.touched || {};
                const errors = formState?.errors || {};
                const hasError = touched.userSummary && errors.userSummary;

                return (
                    <form className={'contact-us__form mb-l'} onSubmit={handleSubmit}>
                        <div className={'contact-us__form-left-container'}>
                            <div className={'contact-us__form-title-container mb-md'}>
                                <Trans i18nKey={'contactUs.title'}/>
                            </div>
                            <div className={'contact-us__form-summary-container'}>
                                <Field
                                    name="userSummary"
                                    component={ContactUsSummary}
                                    validate={(value) =>required(value,t('required', { ns: 'validation' }))}
                                    hasError={hasError}
                                />
                            </div>
                        </div>
                        <div className={'contact-us__form-right-container-box'}>
                            <div className={'contact-us__form-right-container'}>
                                <div className={'contact-us__form-user-name'}>
                                    <Field<string>
                                        name="userName"
                                        validate={(value) =>required(value,t('required', { ns: 'validation' }))}>
                                        {(props: FieldRenderProps<string, HTMLElement>) =>
                                            <FormTextField {...props}
                                                           label={t('contactUs.form.userName')}
                                                           variant={'outlined'}
                                            />
                                        }
                                    </Field>
                                </div>
                                <div className={'contact-us__form-user-email'}>
                                    <Field<string>
                                        name="userEmail"
                                        validate={(value) =>validateEmail(value,t('invalidEmail', { ns: 'validation' }))}>
                                        {(props: FieldRenderProps<string, HTMLElement>) =>
                                            <FormTextField {...props}
                                                           label={t('contactUs.form.userEmail')}
                                                           variant={'outlined'}
                                            />
                                        }
                                    </Field>
                                </div>
                                <div className={'contact-us__form-user-message'}>
                                    <Field<string>
                                        name="userMessage"
                                        validate={(value) =>required(value,t('required', { ns: 'validation' }))}>
                                        {(props: FieldRenderProps<string, HTMLElement>) =>
                                            <FormTextField {...props}
                                                           label={t('contactUs.form.userMessage')}
                                                           variant={'outlined'}
                                                           multiline
                                            />
                                        }
                                    </Field>
                                </div>
                                <FormSubmitButton
                                    type="submit"
                                    label={t('contactUs.form.buttons.submit')}
                                    variant="contained" color="primary"
                                />
                            </div>
                        </div>
                    </form>
                )
            }}
        />
    );
};
