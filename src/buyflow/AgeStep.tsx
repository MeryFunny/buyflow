import React, { useState } from 'react';
import NumberInput from '../forms/NumberInput';
import FromGroup from '../forms/FormGroup';

interface AgeStepProps {
    cb: (data: any) => void,
}

const AgeStep: React.FC<AgeStepProps> = (props) => {
    const [age, setAge] = useState(0);
    return <>
        <FromGroup label={ 'Age:' }>
            <NumberInput
                value={ age }
                onChange={ setAge }
            />
        </FromGroup>
        <button onClick={ () => props.cb({ age }) }>Next</button>
    </>;
};

export default AgeStep;
