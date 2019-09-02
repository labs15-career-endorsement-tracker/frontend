import React from 'react';
import { CheckMark } from './CheckMark'


   
   // which makes this reusable component for other views
   
   const Step = props => {
       console.log(props)
       return (
           <>
            <div className='check-box'>
                <div className={props.isComplete ? 'complete' : 'incomplete' }>
                    <CheckMark />
                </div>
            </div>
            <div className='step'>{
                props.step.steps_description
            }</div>
        </>
    )
}

export default Step;
