import React from 'react';

interface InputProps {
    type: string,
    value: any,
    onChange: (value: any) => void,
}

const Input: React.FC<InputProps> = ({ type, value, onChange }) => {
    const handleFieldChange = ({ target: { value } }: React.ChangeEvent<HTMLInputElement>) => {
        return onChange(value);
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
