import React from 'react';
import { VALIDATOR_TYPE } from '../constants/validation.constants';
import FlowStep from '../flow/FlowStep';
import { FIELD_TYPE } from '../forms/fieldType.constants';

interface AgeStepProps {
    onNext: (data: any) => void,
}

const AgeStep: React.FC<AgeStepProps> = ({ onNext }) => {
    const formGroupConfigs = [
        {
            fieldName: 'age',
            defaultValue: '',
            label: 'Age:',
            fieldType: FIELD_TYPE.NUMBER,
            validators: [VALIDATOR_TYPE.IS_REQUIRED]
        }
    ];

    return <FlowStep formGroupConfigs={ formGroupConfigs } onNext={ onNext }/>;
};

export default AgeStep;
