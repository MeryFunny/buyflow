import React from 'react';
import { validate } from '../utils/validation.utils';

interface InputProps {
    value: any,
    type: string,
    validators: string[],
    onChange: (value: any, isValid: boolean) => void,
}

const Input: React.FC<InputProps> = ({ value, type, validators, onChange }) => {
    const handleFieldChange = ({ target: { value } }: React.ChangeEvent<HTMLInputElement>) => {
        return onChange(value, validate(value, validators));
    };

    return (
        <input
            type={ type }
            value={ value }
            onChange={ handleFieldChange }
        />
    );
};

export default Input;
