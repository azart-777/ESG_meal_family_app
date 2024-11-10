import { createTheme } from '@mui/material/styles';

const baseThemeFormFieldWhite: string  = '#afafaf'

const theme = createTheme({
    components: {
        MuiTextField: {
            styleOverrides: {
                root: {
                    '& .MuiInputBase-input': {
                        color: baseThemeFormFieldWhite,
                    },
                    '& .MuiOutlinedInput-root': {
                        '& fieldset': {
                            borderColor: baseThemeFormFieldWhite,
                        },
                        '&:hover fieldset': {
                            borderColor: baseThemeFormFieldWhite,
                        },
                        '&.Mui-focused fieldset': {
                            borderColor: baseThemeFormFieldWhite,
                        },
                    },
                    '& .MuiInputLabel-root': {
                        color: baseThemeFormFieldWhite,
                    },
                    '& .MuiInputLabel-root.Mui-focused': {
                        color: baseThemeFormFieldWhite,
                    }
                },
            },
        },
    },
});

export default theme;