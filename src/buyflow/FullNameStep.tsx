import React, { useState } from 'react';
import FromGroup from '../forms/FormGroup';
import TextInput from '../forms/TextInput';
import { VALIDATOR_TYPE } from '../constants/validation.constants';

interface FullNameStepProps {
    cb: (data: any) => void,
}

const FullNameStep: React.FC<FullNameStepProps> = (props) => {
    const [formData, setFormData] = useState({ firstName: '', lastName: '' });
    const [formValidation, setFormValidation] = useState({ firstName: false, lastName: false });

    const handleFirstNameChange = (value: string, isValid: boolean) => {
        setFormData({ ...formData, firstName: value });
        setFormValidation({ ...formValidation, firstName: isValid });
    };

    const handleLastNameChange = (value: string, isValid: boolean) => {
        setFormData({ ...formData, lastName: value });
        setFormValidation({ ...formValidation, lastName: isValid });
    };

    return <>
        <FromGroup label={ 'First name:' }>
            <TextInput
                validators={ [VALIDATOR_TYPE.IS_REQUIRED] }
                value={ formData.firstName }
                onChange={ handleFirstNameChange }
            />
        </FromGroup>

        <FromGroup label={ 'Last name:' }>
            <TextInput
                validators={ [VALIDATOR_TYPE.IS_REQUIRED] }
                value={ formData.lastName }
                onChange={ handleLastNameChange }
            />
        </FromGroup>
        <button
            disabled={ !formValidation.lastName || !formValidation.firstName }
            onClick={ () => props.cb(formData) }>
            Next
        </button>
    </>;
};

export default FullNameStep;
