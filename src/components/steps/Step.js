import React from 'react';
import { CheckMark } from './CheckMark'
import { toggleStepCompleteApi } from '../../actions'

   
   const Step = ({step}) => {
       console.log(step)
       return (
           <div className='each-step'>
            <div className='check-box'>
                <div 
                    className={step.is_complete ? 'complete' : 'incomplete'} 
                    onClick={() => toggleStepCompleteApi(step.tasks_id, step.id, step.is_complete)}
                    >
                    <CheckMark />
                </div>
            </div>
            <div className='description'>{
                step.steps_description
            }</div>
        </div>
    )
}

export default Step;
