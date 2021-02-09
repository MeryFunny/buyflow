import React, { useState } from 'react';
import AgeStep from './AgeStep';
import EmailStep from './EmailStep';
import SummaryStep from './SummaryStep';
import FullNameStep from './FullNameStep';
import Stepper from '../stepper/Stepper';
import Step from '../stepper/Step';
import Steps from '../stepper/Steps';

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
    const [collectedData, updateData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        age: 0,
    });

    const handleNext = (data: any, handleClick: any) => {
        updateData({ ...collectedData, ...data })
        handleClick()
    };

    return <>
        <h4>Buying { PRODUCT_IDS_TO_NAMES[props.productId] }</h4>
        <Stepper stage={1}>
            { (stage: number, handleClick: any) => (
                <Steps stage={ stage } handleClick={ handleClick }>
                    <Step stage={ stage } num={1}>
                        <FullNameStep onNext={ (data: any) => handleNext(data, handleClick) }/>
                    </Step>
                    <Step stage={ stage } num={2}>
                        <EmailStep onNext={ (data: any) => handleNext(data, handleClick) }/>
                    </Step>
                    <Step stage={ stage } num={3}>
                        <AgeStep onNext={ (data: any) => handleNext(data, handleClick) }/>
                    </Step>
                    <Step stage={ stage } num={4}>
                        <SummaryStep collectedData={ collectedData }/>
                    </Step>
                </Steps>
            )}
        </Stepper>
    </>;
};

export default Buyflow;
