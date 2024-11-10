import React from 'react';
import Button, { ButtonProps } from '@mui/material/Button';
import { useForm, useFormState } from 'react-final-form';
import './FormSubmitButton.scss';

interface SubmitButtonProps extends ButtonProps {
    label: string;
    className?: string
}

const FormSubmitButton: React.FC<SubmitButtonProps> = ({ label, className, ...props }) => {
    const form = useForm();
    const { submitting, pristine, hasValidationErrors } = useFormState();

    return (
        <Button
            {...props}
            className={className}
            onClick={(event) => {
                event.preventDefault();
                form.submit();
            }}
            disabled={submitting || pristine || hasValidationErrors}
        >
            {label}
        </Button>
    );
};
export default FormSubmitButton;