import React from 'react';
import { CheckMark } from './svg/CheckMark'

// import { CheckBox } from './svg/CheckBox'
// import { CheckBox2 } from './svg/CheckBox2'


const Step = ({step, toggle}) => {
    // console.log("On page render: ", step.is_complete)
        
       return (
           <div className='each-step'>
            <div className='check-box'>
                <CheckMark />
            </div>
                <div 
                    className={step.is_complete ? 'complete' : 'incomplete'}
                    onClick={() => toggle(step.tasks_id, step.id, step.is_complete)}
                    >
                </div>
            <div className='description'>{
                step.steps_description
            }</div>
        </div>
    )
}

export default Step;
