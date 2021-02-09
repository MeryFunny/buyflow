import React from 'react';
import { FIELD_TYPE } from './fieldType.constants';
import Input from './Input';
import { IInputProps } from './IInputPtops';

const TextInput: React.FC<IInputProps> = (props) => {
    return (
        <Input type={ FIELD_TYPE.TEXT } { ...props }/>

    );
};

export default TextInput;
