import { FIELD_TYPE } from '../forms/fieldType.constants';
import TextInput from '../forms/TextInput';
import NumberInput from '../forms/NumberInput';
import EmailInput from '../forms/EmailInput';
import { IFormGroup } from '../forms/IFormGroup';

const INPUT_BY_TYPE = {
    [FIELD_TYPE.TEXT]: TextInput,
    [FIELD_TYPE.NUMBER]: NumberInput,
    [FIELD_TYPE.EMAIL]: EmailInput,
};

interface IFormState {
    [key: string]: { isValid: boolean, isDirty: boolean }
}

interface IFormData {
    [key: string]: number | string
}

export const getDefaultFormState = (formGroupConfigs: IFormGroup[]) => {
    const state: IFormState = {};
    formGroupConfigs.forEach((formGroupConfig) => {
        state[formGroupConfig.fieldName] = {
            isValid: false, isDirty: false
        };
    });

    return state;
};

export const getDefaultFormData = (formGroupConfigs: IFormGroup[]) => {
    const state: IFormData = {};
    formGroupConfigs.forEach((formGroupConfig) => {
        state[formGroupConfig.fieldName] = formGroupConfig.defaultValue;
    });

    return state;
};


export const getInputComponentByType = (fieldType: string) => {
    return INPUT_BY_TYPE[fieldType];
};
