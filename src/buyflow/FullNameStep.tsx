import React, { useState } from 'react';

interface FullNameStepProps {
    cb: (data: any) => void,
}

const FullNameStep: React.FC<FullNameStepProps> = (props) => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    return <>
        <div>First name: <input type='text' onChange={({target: {value}}) => {setFirstName(value)}} value={firstName}></input></div>
        <div>Last Name: <input type='text' onChange={({target: {value}}) => {setLastName(value)}} value={lastName}></input></div>
        <button onClick={() => props.cb({ firstName, lastName })}>Next</button>
    </>;
};

export default FullNameStep;