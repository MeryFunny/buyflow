import React from 'react';
import { validate } from '../utils/validation.utils';

interface InputProps {
    value: any,
    type: string,
    validators: string[],
    onBlur: (isDirty: boolean) => void;
    onChange: (value: any, isValid: boolean) => void,
}

const Input: React.FC<InputProps> = ({ value, type, validators, onBlur, onChange }) => {
    const handleFieldChange = ({ target: { value } }: React.ChangeEvent<HTMLInputElement>) => {
        return onChange(value, validate(value, validators));
    };

    const handleFieldBlur = () => {
        onBlur(true);
    };

    return (
        <input
            type={ type }
            value={ value }
            onBlur={ handleFieldBlur }
            onChange={ handleFieldChange }
        />
    );
};

export default Input;
