const validateEmail = email => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
};

const validateForm = (formData, validator) => {
    const errors = {};
    for (const key in formData) {
        if (!validator(formData[key])) {
            errors[key] = 'Invalid value';
        }
    }
    return errors;
};

export { validateEmail, validateForm };