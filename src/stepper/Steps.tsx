import React from 'react';


const Steps = (props: any) => {
    return (
        <div>
            <div>
                { props.children }
            </div>
            {/*<div>*/ }
            {/*    <button disabled={ stage === count } onClick={ handleClick }>*/ }
            {/*        Continue*/ }
            {/*    </button>*/ }
            {/*</div>*/ }
        </div>
    );
};

export default Steps;
