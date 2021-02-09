import React from 'react';
import { validate } from '../utils/validation.utils';
import { CSS_CLASSES } from '../styles/cssClasses.contants';

interface InputProps {
    value: any,
    type: string,
    placeholder: string,
    intent: string,
    validators: string[],
    onBlur: (isDirty: boolean) => void;
    onChange: (value: any, isValid: boolean) => void,
}

const Input: React.FC<InputProps> = ({ value, type, placeholder, intent, validators, onBlur, onChange }) => {
    const handleFieldChange = ({ target: { value } }: React.ChangeEvent<HTMLInputElement>) => {
        return onChange(value, validate(value, validators));
    };

    const handleFieldBlur = () => {
        onBlur(true);
    };

    return (
        <input
            className={ `${CSS_CLASSES.INPUT} ${ intent }` }
            type={ type }
            value={ value }
            placeholder={ placeholder }
            onBlur={ handleFieldBlur }
            onChange={ handleFieldChange }
        />
    );
};

export default Input;
