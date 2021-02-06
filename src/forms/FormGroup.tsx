import React from 'react';

interface FromGroupProps {
    label: string
}

const FromGroup: React.FC<FromGroupProps> = ({ children,label}) => {
    return (
        <div>
            { label && (<label>{ label }</label>) }
            <div> { children }</div>
        </div>
    );
};

export default FromGroup;
