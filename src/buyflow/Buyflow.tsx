import React, { useState } from 'react';
import AgeStep from './AgeStep';
import EmailStep from './EmailStep';
import SummaryStep from './SummaryStep';
import FullNameStep from './FullNameStep';
import { STEP } from './steps.constants';

interface BuyflowProps {
    productId: ProductIds,
}

export enum ProductIds {
    devIns = 'dev_ins'
}

const PRODUCT_IDS_TO_NAMES = {
    [ProductIds.devIns]: 'Developer Insurance',
};

const STEPS_ORDER = {
    [STEP.FULL_NAME]: STEP.EMAIL,
    [STEP.EMAIL]: STEP.AGE,
    [STEP.AGE]: STEP.SUMMARY
}

const Buyflow: React.FC<BuyflowProps> = (props) => {
    const [currentStep, setStep] = useState(STEP.FULL_NAME);
    const [collectedData, updateData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        age: 0,
    });

    const handleNext = (data: any) => {
        updateData({ ...collectedData, ...data })
        setStep(STEPS_ORDER[currentStep])
    };

    return <>
        <h4>Buying { PRODUCT_IDS_TO_NAMES[props.productId] }</h4>
        { (currentStep === STEP.FULL_NAME && <FullNameStep onNext={ handleNext }/>)
        || (currentStep === STEP.EMAIL && <EmailStep onNext={ handleNext }/>)
        || (currentStep === STEP.AGE && <AgeStep onNext={ handleNext }/>)
        || (currentStep === STEP.SUMMARY && <SummaryStep collectedData={ collectedData }/>)
        }
    </>;
};

export default Buyflow;
