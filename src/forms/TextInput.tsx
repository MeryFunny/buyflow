import React from 'react';
import { FIELD_TYPE } from './fieldType.constants';
import Input from './Input';

interface TextInputProps {
    value: string,
    validators: string[],
    onBlur: (isDirty: boolean) => void;
    onChange: (value: string, isValid: boolean) => void,
}

const TextInput: React.FC<TextInputProps> = (props) => {
    return (
        <Input type={ FIELD_TYPE.TEXT } { ...props }/>

    );
};

export default TextInput;
