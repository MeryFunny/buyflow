import React, { useState } from 'react';
import NumberInput from '../forms/NumberInput';
import FromGroup from '../forms/FormGroup';
import { VALIDATOR_TYPE } from '../constants/validation.constants';

interface AgeStepProps {
    cb: (data: any) => void,
}

const AgeStep: React.FC<AgeStepProps> = (props) => {
    const [formData, setFormData] = useState({ age: 0 });
    const [formValidation, setFormValidation] = useState({ age: false });

    const handleAgeChange = (value: number, isValid: boolean) => {
        setFormData({ age: value });
        setFormValidation({ age: isValid });
    };

    return <>
        <FromGroup label={ 'Age:' }>
            <NumberInput
                value={ formData.age }
                validators={ [VALIDATOR_TYPE.IS_REQUIRED] }
                onChange={ handleAgeChange }
            />
        </FromGroup>
        <button disabled={ !formValidation.age } onClick={ () => props.cb(formData) }>Next</button>
    </>;
};

export default AgeStep;
