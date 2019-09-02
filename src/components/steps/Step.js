import React from 'react';
import { CheckMark } from './CheckMark'

   
   const Step = props => {
       console.log(props)
       return (
           <div className='each-step'>
            <div className='check-box'>
                <div className={props.isComplete ? 'complete' : 'incomplete' }>
                    <CheckMark />
                </div>
            </div>
            <div className='description'>{
                props.step.steps_description
            }</div>
        </div>
    )
}

export default Step;
