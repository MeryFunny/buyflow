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

const isNumberValidation = (value: any): boolean => {
    return !isNaN(Number(value));
};

const isPositiveValidation = (value: any): boolean => {
    return Number(value) >= 0;
};


const VALIDATORS: Validator = {
    [VALIDATOR_TYPE.IS_REQUIRED]: isRequiredValidation,
    [VALIDATOR_TYPE.IS_EMAIL]: isEmailValidation,
    [VALIDATOR_TYPE.IS_NUMBER]: isNumberValidation,
    [VALIDATOR_TYPE.IS_POSITIVE]: isPositiveValidation
};

export const validate = (value: any, validators: string[]): boolean => {
    if(validators.length === 0) return true;

    return validators.reduce((accumulator: boolean, currentValue: string) => {
        return accumulator && VALIDATORS[currentValue](value);
    }, true);
};
