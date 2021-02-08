import React from 'react';
import { FIELD_TYPE } from './fieldType.constants';
import Input from './Input';
import { VALIDATOR_TYPE } from '../constants/validation.constants';

interface EmailInputProps {
    value: string,
    validators: string[],
    onBlur: (isDirty: boolean) => void;
    onChange: (value: string, isValid: boolean) => void,
}

const EmailInput: React.FC<EmailInputProps> = ({ validators, ...props }) => {
    return (
        <Input
            type={ FIELD_TYPE.EMAIL }
            validators={ [VALIDATOR_TYPE.IS_EMAIL, ...validators]}
            { ...props } />
    );
};

export default EmailInput;
