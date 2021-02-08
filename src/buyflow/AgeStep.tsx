import React, { useState } from 'react';
import NumberInput from '../forms/NumberInput';
import FromGroup from '../forms/FormGroup';
import { VALIDATOR_TYPE } from '../constants/validation.constants';
import { getDefaultFormState } from '../utils/form.utils';

interface AgeStepProps {
    onNext: (data: any) => void,
}

const AgeStep: React.FC<AgeStepProps> = ({ onNext }) => {
    const [formData, setFormData] = useState({ age: 0 });
    const [formState, setFormState] = useState(getDefaultFormState(['age']));

    const handleAgeChange = (value: number, isValid: boolean) => {
        setFormData({ age: value });
        setFormState({ age: { ...formState.age, isValid } });
    };

    const handleAgeBlur = (isDirty: boolean) => {
        setFormState({ age: { ...formState.age, isDirty } });
    };

    return <>
        <FromGroup label={ 'Age:' }>
            <NumberInput
                value={ formData.age }
                validators={ [VALIDATOR_TYPE.IS_REQUIRED] }
                onBlur={ handleAgeBlur }
                onChange={ handleAgeChange }
            />
        </FromGroup>
        <button disabled={ !formState?.age?.isValid } onClick={ () => onNext(formData) }>Next</button>
    </>;
};

export default AgeStep;
