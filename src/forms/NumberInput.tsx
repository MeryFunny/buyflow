import React from 'react';
import { FIELD_TYPE } from './fieldType.constants';
import Input from './Input';

interface NumberInputProps {
    value: number,
    validators: string[],
    onBlur: (isDirty: boolean) => void;
    onChange: (value: number, isValid: boolean) => void,
}

const NumberInput: React.FC<NumberInputProps> = ({ onChange, ...props }) => {
    const handleChange = (value: string, isValid: boolean) => {
        onChange(Number(value), isValid);
    };

    return (
        <Input type={ FIELD_TYPE.NUMBER } onChange={ handleChange } { ...props }/>
    );
};

export default NumberInput;
