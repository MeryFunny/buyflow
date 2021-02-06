import React from 'react';
import { FIELD_TYPE } from './fieldType.constants';
import Input from './Input';

interface EmailInputProps {
    value: string,
    onChange: (value: string) => void,
}

const EmailInput: React.FC<EmailInputProps> = (props) => {
    return (
        <Input type={ FIELD_TYPE.EMAIL } { ...props } />
    );
};

export default EmailInput;
