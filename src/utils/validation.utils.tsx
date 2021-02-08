import { VALIDATOR_TYPE } from '../constants/validation.constants';

interface Validator {
    [key: string]: (value: any) => boolean
}

const validationIsRequired = (value: any): boolean => {
    return !!value.trim();
};

const VALIDATORS: Validator = {
    [VALIDATOR_TYPE.IS_REQUIRED]: validationIsRequired
};

export const validate = (value: any, validators: string[]): boolean => {
    if(validators.length === 0) return true;

    return validators.reduce((accumulator: boolean, currentValue: string) => {
        return accumulator && VALIDATORS[currentValue](value);
    }, true);
};
