import React from 'react';
import { VALIDATOR_TYPE } from '../constants/validation.constants';
import FlowStep from './FlowStep';
import { FIELD_TYPE } from '../forms/fieldType.constants';
import { IFormData } from '../forms/IFormData';

interface FullNameStepProps {
    onNext: (data: IFormData) => void,
}

const FullNameStep: React.FC<FullNameStepProps> = ({ onNext }) => {
    const formGroupConfigs = [
        {
            fieldName: 'firstName',
            defaultValue: '',
            label: 'First name:',
            fieldType: FIELD_TYPE.TEXT,
            validators: [VALIDATOR_TYPE.IS_REQUIRED]
        },
        {
            fieldName: 'lastName',
            defaultValue: '',
            label: 'Last name:',
            fieldType: FIELD_TYPE.TEXT,
            validators: [VALIDATOR_TYPE.IS_REQUIRED]
        }
    ]

    return <FlowStep formGroupConfigs={ formGroupConfigs } onNext={ onNext }/>
};

export default FullNameStep;
