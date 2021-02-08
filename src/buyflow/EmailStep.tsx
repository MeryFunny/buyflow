import React, { useState } from 'react';
import EmailInput from '../forms/EmailInput';
import FromGroup from '../forms/FormGroup';
import { VALIDATOR_TYPE } from '../constants/validation.constants';

interface EmailStepProps {
    cb: (data: any) => void,
}

const EmailStep: React.FC<EmailStepProps> = (props) => {
    const [formData, setFormData] = useState({ email: '' });
    const [formValidation, setFormValidation] = useState({ email: false });

    const handleEmailChange = (value: string, isValid: boolean) => {
        setFormData({ email: value });
        setFormValidation({ email: isValid });
    };

    return <>
        <FromGroup label={ 'Email:' }>
            <EmailInput
                validators={ [VALIDATOR_TYPE.IS_REQUIRED] }
                value={ formData.email }
                onChange={ handleEmailChange }
            />
        </FromGroup>
        <button disabled={ !formValidation.email } onClick={ () => props.cb(formData) }>Next</button>
    </>;
};

export default EmailStep;
