import React from 'react';
import { VALIDATOR_TYPE } from '../constants/validation.constants';
import FlowStep from './FlowStep';
import { FIELD_TYPE } from '../forms/fieldType.constants';
import { IFormData } from '../forms/IFormData';

interface EmailStepProps {
    onNext: (data: IFormData) => void,
}

const EmailStep: React.FC<EmailStepProps> = ({ onNext }) => {
    const formGroupConfigs = [
        {
            fieldName: 'email',
            defaultValue: '',
            label: 'Email:',
            placeholder: 'Please enter email',
            fieldType: FIELD_TYPE.EMAIL,
            validators: [VALIDATOR_TYPE.IS_REQUIRED]
        }
    ];

    return <FlowStep formGroupConfigs={ formGroupConfigs } onNext={ onNext }/>;
};

export default EmailStep;
