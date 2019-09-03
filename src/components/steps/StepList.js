import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux'

import { toggleStepCompleteApi } from '../../actions'

import Step from './Step'


const StepList = props => {
    const [steps, setSteps] = useState([])

    useEffect(() => {
        setSteps(props.stepsByTask)
    }, [props.stepsByTask])
    return (
        <div className='step-list-container'>
            <h1 className='title'>Steps to complete</h1>
            <div className='step-list'>
                {steps.map(step => (
                    <Step key={step.id} step={step} toggle={props.toggleStepCompleteApi}/>
                ))}
            </div>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        inProgress: state.stepReducer.inProgress,
        serverError: state.stepReducer.serverError,
        isServerError: state.stepReducer.isServerError,
        stepsByTask: state.stepReducer.stepsByTask
    }
}

export default connect(mapStateToProps, {toggleStepCompleteApi})(StepList);
