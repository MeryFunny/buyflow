import React from 'react';
import { Link } from 'react-router-dom';
import { CSS_CLASSES } from '../styles/cssClasses.contants';

interface SummaryStepProps {
    collectedData: {
        firstName: string,
        lastName: string,
        email: string,
        age: number,
    },
}

const SummaryStep: React.FC<SummaryStepProps> = (props) => {
    return <>
        <div className={ CSS_CLASSES.MARGIN_BOTTOM_20 }>
            <div>First Name: { props.collectedData.firstName }</div>
            <div>Last Name: { props.collectedData.lastName }</div>
            <div>Email: { props.collectedData.email }</div>
            <div>Age: { props.collectedData.age }</div>
        </div>
        <div><Link className={ CSS_CLASSES.LINK } to='/purchased=dev_ins'>Purchase</Link></div>
    </>;
};

export default SummaryStep;
