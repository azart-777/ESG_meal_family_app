interface FormValues {
    userName: string;
    userEmail: string;
    userMessage: string;
    userSummary: string;
}

export const onSubmit = async (values: FormValues): Promise<void> => {
    console.log(values);
    // Handle form submission logic here
};

export const required = (value: string, errorMessage: string): string | undefined => (value ? undefined : errorMessage);

export const validateEmail = (value: string, errorMessage: string): string | undefined => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(value) ? undefined : errorMessage;
};
