import React from 'react';
import { FIELD_TYPE } from './fieldType.constants';
import Input from './Input';
import { VALIDATOR_TYPE } from '../constants/validation.constants';
import { IInputProps } from './IInputPtops';

const EmailInput: React.FC<IInputProps> = ({ validators, ...props }) => {
    return (
        <Input
            type={ FIELD_TYPE.EMAIL }
            validators={ [VALIDATOR_TYPE.IS_EMAIL, ...validators]}
            { ...props } />
    );
};

export default EmailInput;
