import React from 'react';
import { FIELD_TYPE } from './fieldType.constants';
import Input from './Input';

interface NumberInputProps {
    value: number,
    onChange: (value: number) => void,
}

const NumberInput: React.FC<NumberInputProps> = ({ onChange, ...props }) => {
    const handleChange = (value: string) => {
        onChange(Number(value));
    };

    return (
        <Input type={ FIELD_TYPE.NUMBER } onChange={ handleChange } { ...props }/>
    );
};

export default NumberInput;
