import React from 'react';
import { FIELD_TYPE } from './fieldType.constants';
import Input from './Input';
import { IInputProps } from './IInputPtops';


const NumberInput: React.FC<IInputProps> = ({ onChange, ...props }) => {
    const handleChange = (value: string, isValid: boolean) => {
        onChange(Number(value), isValid);
    };

    return (
        <Input type={ FIELD_TYPE.NUMBER } onChange={ handleChange } { ...props }/>
    );
};

export default NumberInput;
