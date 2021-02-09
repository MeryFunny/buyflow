import React from 'react';
import { VALIDATOR_TYPE } from '../constants/validation.constants';
import FlowStep from './FlowStep';
import { FIELD_TYPE } from '../forms/fieldType.constants';
import { IFormData } from '../forms/IFormData';

interface AgeStepProps {
    onNext: (data: IFormData) => void,
}

const AgeStep: React.FC<AgeStepProps> = ({ onNext }) => {
    const formGroupConfigs = [
        {
            fieldName: 'age',
            defaultValue: '',
            label: 'Age:',
            placeholder: 'Please enter age',
            fieldType: FIELD_TYPE.NUMBER,
            validators: [VALIDATOR_TYPE.IS_REQUIRED, VALIDATOR_TYPE.IS_POSITIVE]
        }
    ];

    return <FlowStep formGroupConfigs={ formGroupConfigs } onNext={ onNext }/>;
};

export default AgeStep;
