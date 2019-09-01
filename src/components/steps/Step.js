import React from 'react';

const Step = props => {
    return (
        <>
            <div className='step'>{
                props.step.steps_description
            }</div>
        </>
    )
}

export default Step;
