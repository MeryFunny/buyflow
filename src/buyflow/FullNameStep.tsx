import React from 'react';
import { VALIDATOR_TYPE } from '../constants/validation.constants';
import FlowStep from '../flow/FlowStep';
import { FIELD_TYPE } from '../forms/fieldType.constants';

interface FullNameStepProps {
    onNext: (data: any) => void,
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
