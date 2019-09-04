import React, { useState, useEffect } from 'react';

const StepGauge = ({steps}) => {
    const [gaugeSegments, setGaugeSegments] = useState(null)
    const [gaugeFill, setGaugeFill] = useState(null)
    console.log(steps)

    useEffect(() => {
        setGaugeSegments(steps.length)
        setGaugeFill((steps.filter(step => step.is_complete === true)).length)
    }, [steps])
    
    console.log(gaugeSegments, gaugeFill)
    return (
        <div className='gauge-container'>
            <div
                className='gauge-fill'
                >

            </div>
        </div>
    );
}

export default StepGauge;
