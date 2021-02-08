import { VALIDATOR_TYPE } from '../constants/validation.constants';

const EMAIL_REGEX = new RegExp('\\S+@\\S+\\.\\S+')

interface Validator {
    [key: string]: (value: any) => boolean
}

const isRequiredValidation = (value: any): boolean => {
    return !!value.trim();
};

const isEmailValidation = (value: any): boolean => {
    return EMAIL_REGEX.test(value);
};


const VALIDATORS: Validator = {
    [VALIDATOR_TYPE.IS_REQUIRED]: isRequiredValidation,
    [VALIDATOR_TYPE.IS_EMAIL]: isEmailValidation
};

export const validate = (value: any, validators: string[]): boolean => {
    if(validators.length === 0) return true;

    return validators.reduce((accumulator: boolean, currentValue: string) => {
        return accumulator && VALIDATORS[currentValue](value);
    }, true);
};
