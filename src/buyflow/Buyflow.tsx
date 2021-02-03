import React, { useState } from 'react';
import AgeStep from './AgeStep';
import EmailStep from './EmailStep';
import SummaryStep from './SummaryStep';
import FullNameStep from './FullNameStep';

interface BuyflowProps {
    productId: ProductIds,
}

export enum ProductIds {
    devIns = 'dev_ins'
}

const PRODUCT_IDS_TO_NAMES= {
    [ProductIds.devIns]: 'Developer Insurance',
}

const Buyflow: React.FC<BuyflowProps> = (props) => {
    const [currentStep, setStep] = useState('fullName');
    const [collectedData, updateData] = useState({
        'firstName': '',
        'lastName': '',
        'email': '',
        'age': 0,
    });
    const getStepCallback = (nextStep:string) => (
        (data: any) => {
            //newData = data.
            updateData({...collectedData, ...data});
            setStep(nextStep);
        }
    );
    return <>
        <h4>Buying {PRODUCT_IDS_TO_NAMES[props.productId]}</h4>
        {(currentStep === 'fullName' && <FullNameStep cb={getStepCallback('email')} />)
        ||  (currentStep === 'email' && <EmailStep cb={getStepCallback('age')} />)
        || (currentStep === 'age' && <AgeStep  cb={getStepCallback('summary')} />)
        || (currentStep === 'summary' && <SummaryStep collectedData={collectedData} />)
        }
    </>;
};

export default Buyflow;
