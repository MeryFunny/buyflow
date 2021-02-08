import React from 'react';
import { FIELD_TYPE } from './fieldType.constants';
import Input from './Input';

interface EmailInputProps {
    value: string,
    validators: string[],
    onChange: (value: string, isValid: boolean) => void,
}

const EmailInput: React.FC<EmailInputProps> = (props) => {
    return (
        <Input type={ FIELD_TYPE.EMAIL } { ...props } />
    );
};

export default EmailInput;
