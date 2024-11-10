import React from 'react';
import { FieldRenderProps } from 'react-final-form';
import {TextField, TextFieldVariants} from '@mui/material';
import './FormTextField.scss';

interface FormTextFieldProps extends FieldRenderProps<string, HTMLElement> {
    label: string;
    variant?: TextFieldVariants;
    multiline?: boolean;
}

const FormTextField: React.FC<FormTextFieldProps> = (
    {
        input,
        meta,
        label,
        variant = 'standard',
        multiline = false
    }) => (
    <TextField
        {...input}
        label={label}
        className={'text-form-field'}
        variant={variant}
        margin="normal"
        fullWidth
        multiline={multiline}
        error={meta.touched && !!meta.error}
        helperText={meta.touched && meta.error ? meta.error : ''}
    />
);

export default FormTextField;