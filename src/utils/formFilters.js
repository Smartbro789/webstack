export const filterEmptyFields = formData => {
    const filteredData = {};
    for (const key in formData) {
        if (formData[key] !== '') {
            filteredData[key] = formData[key];
        }
    }
    return filteredData;
};