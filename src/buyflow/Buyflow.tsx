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

const Buyflow: React.FC<BuyflowProps> = (props) => {
    const [currentStep, setStep] = useState(STEP.FULL_NAME);
    const [collectedData, updateData] = useState({
        'firstName': '',
        'lastName': '',
        'email': '',
        'age': 0,
    });
    const getStepCallback = (nextStep: string) => (
        (data: any) => {
            updateData({ ...collectedData, ...data });
            setStep(nextStep);
        }
    );
    return <>
        <h4>Buying { PRODUCT_IDS_TO_NAMES[props.productId] }</h4>
        { (currentStep === STEP.FULL_NAME && <FullNameStep cb={ getStepCallback(STEP.EMAIL) }/>)
        || (currentStep === STEP.EMAIL && <EmailStep cb={ getStepCallback(STEP.AGE) }/>)
        || (currentStep === STEP.AGE && <AgeStep cb={ getStepCallback(STEP.SUMMARY) }/>)
        || (currentStep === STEP.SUMMARY && <SummaryStep collectedData={ collectedData }/>)
        }
    </>;
};

export default Buyflow;
