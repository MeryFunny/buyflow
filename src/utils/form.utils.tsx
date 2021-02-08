interface FormState {
    [key: string]: { isValid: boolean, isDirty: boolean }
}

export const getDefaultFormState = (keys: string[]) => {
    const state: FormState = {};
    keys.forEach((key) => {
        state[key] = {
            isValid: false, isDirty: false
        };
    });

    return state;
};
