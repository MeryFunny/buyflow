import React from 'react';
import { VALIDATOR_TYPE } from '../constants/validation.constants';
import FlowStep from '../flow/FlowStep';
import { FIELD_TYPE } from '../forms/fieldType.constants';

interface EmailStepProps {
    onNext: (data: any) => void,
}

const EmailStep: React.FC<EmailStepProps> = ({ onNext }) => {
    const formGroupConfigs = [
        {
            fieldName: 'email',
            defaultValue: '',
            label: 'Email:',
            fieldType: FIELD_TYPE.EMAIL,
            validators: [VALIDATOR_TYPE.IS_REQUIRED]
        }
    ];

    return <FlowStep formGroupConfigs={ formGroupConfigs } onNext={ onNext }/>;
};

export default EmailStep;
