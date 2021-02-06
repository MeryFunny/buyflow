import React, { useState } from 'react';
import EmailInput from '../forms/EmailInput';
import FromGroup from '../forms/FormGroup';

interface EmailStepProps {
    cb: (data: any) => void,
}

const EmailStep: React.FC<EmailStepProps> = (props) => {
    const [email, setEmail] = useState('');
    return <>
        <FromGroup label={ 'Email:' }>
            <EmailInput
                value={ email }
                onChange={ setEmail }
            />
        </FromGroup>
        <button onClick={ () => props.cb({ email }) }>Next</button>
    </>;
};

export default EmailStep;
