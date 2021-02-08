import React, { useState } from 'react';
import EmailInput from '../forms/EmailInput';
import FromGroup from '../forms/FormGroup';
import { VALIDATOR_TYPE } from '../constants/validation.constants';
import { getDefaultFormState } from '../utils/form.utils';

interface EmailStepProps {
    onNext: (data: any) => void,
}

const EmailStep: React.FC<EmailStepProps> = ({ onNext }) => {
    const [formData, setFormData] = useState({ email: '' });
    const [formState, setFormState] = useState(getDefaultFormState(['email']));

    const handleEmailChange = (value: string, isValid: boolean) => {
        setFormData({ email: value });
        setFormState({ email: { ...formState.email, isValid } });
    };

    const handleEmailBlur = (isDirty: boolean) => {
        setFormState({ email: { ...formState.email, isDirty } });
    };

    return <>
        <FromGroup label={ 'Email:' }>
            <EmailInput
                validators={ [VALIDATOR_TYPE.IS_REQUIRED] }
                value={ formData.email }
                onBlur={ handleEmailBlur }
                onChange={ handleEmailChange }
            />
        </FromGroup>
        <button disabled={ !formState.email.isValid } onClick={ () => onNext(formData) }>Next</button>
    </>;
};

export default EmailStep;
