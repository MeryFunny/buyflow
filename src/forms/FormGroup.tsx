import React from 'react';
import { CSS_CLASSES } from '../styles/cssClasses.contants';

interface FromGroupProps {
    label: string
}

const FromGroup: React.FC<FromGroupProps> = ({ children, label }) => {
    return (
        <div className={ CSS_CLASSES.FORM_GROUP }>
            { label && (<label className={ CSS_CLASSES.FORM_GROUP_LABEL }>{ label }</label>) }
            <div> { children }</div>
        </div>
    );
};

export default FromGroup;
