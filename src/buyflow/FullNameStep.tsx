import React, { useState } from 'react';
import FromGroup from '../forms/FormGroup';
import TextInput from '../forms/TextInput';
import { VALIDATOR_TYPE } from '../constants/validation.constants';
import { getDefaultFormState } from '../utils/form.utils';

interface FullNameStepProps {
    cb: (data: any) => void,
}

const FIRST_NAME = 'firstName';
const LAST_NAME = 'lastName';

const FullNameStep: React.FC<FullNameStepProps> = (props) => {
    const [formData, setFormData] = useState({ firstName: '', lastName: '' });
    const [formState, setFormState] = useState(getDefaultFormState([FIRST_NAME, LAST_NAME]));

    const handleChange = (fieldName: string) => {
        return (value: string, isValid: boolean) => {
            setFormData({ ...formData, [fieldName]: value });
            setFormState({ ...formState, [fieldName]: { ...formState.firstName, isValid } });
        };
    };

    const handleBlur = (fieldName: string) => {
        return (isDirty: boolean) => {
            setFormState({ ...formState, [fieldName]: { ...formState.firstName, isDirty } });
        };
    };

    return <>
        <FromGroup label={ 'First name:' }>
            <TextInput
                validators={ [VALIDATOR_TYPE.IS_REQUIRED] }
                value={ formData.firstName }
                onBlur={ handleBlur(FIRST_NAME) }
                onChange={ handleChange(FIRST_NAME) }
            />
        </FromGroup>

        <FromGroup label={ 'Last name:' }>
            <TextInput
                validators={ [VALIDATOR_TYPE.IS_REQUIRED] }
                value={ formData.lastName }
                onBlur={ handleBlur(LAST_NAME) }
                onChange={ handleChange(LAST_NAME) }
            />
        </FromGroup>
        <button
            disabled={ !formState.lastName.isValid || !formState.firstName.isValid }
            onClick={ () => props.cb(formData) }>
            Next
        </button>
    </>;
};

export default FullNameStep;
