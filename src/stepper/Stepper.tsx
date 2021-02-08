import React, { useState } from 'react';

const Stepper = (props: any) => {
    const [stage, setStage] = useState(props.stage || 1);

    const handleClick = () => {
        setStage(stage + 1);
    };

    return (
        <div>
            { props.children(stage, handleClick) }
        </div>
    );

};

export default Stepper;
