import React from 'react';

interface IStepProps {
    num: number,
    stage: number,
    children: any
}

const Step: React.FC<IStepProps> = ({ num, stage, children }) => {
    return stage === num ? <div key={ num }>{ children }</div> : null;

};

export default Step;
