import React from 'react';
import { FIELD_TYPE } from './fieldType.constants';
import Input from './Input';
import { IInputProps } from './IInputPtops';
import { VALIDATOR_TYPE } from '../constants/validation.constants';


const NumberInput: React.FC<IInputProps> = ({ onChange, validators, ...props }) => {
    const handleChange = (value: string, isValid: boolean) => {
        onChange(Number(value), isValid);
    };

    return (
        <Input type={ FIELD_TYPE.NUMBER } validators={ [VALIDATOR_TYPE.IS_NUMBER, ...validators]} onChange={ handleChange } { ...props }/>
    );
};

export default NumberInput;
