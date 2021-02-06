import React, { useState } from 'react';
import FromGroup from '../forms/FormGroup';
import TextInput from '../forms/TextInput';

interface FullNameStepProps {
    cb: (data: any) => void,
}

const FullNameStep: React.FC<FullNameStepProps> = (props) => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    return <>
        <FromGroup label={ 'First name:' }>
            <TextInput
                value={ firstName }
                onChange={ setFirstName }
            />
        </FromGroup>

        <FromGroup label={ 'Last name:' }>
            <TextInput
                value={ lastName }
                onChange={ setLastName }
            />
        </FromGroup>
        <button onClick={ () => props.cb({ firstName, lastName }) }>Next</button>
    </>;
};

export default FullNameStep;
