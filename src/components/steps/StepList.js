import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux'


const StepList = props => {
    const [steps, setSteps] = useState([])
    console.log(steps)

    useEffect(() => {
        setSteps(props.stepsByTask)
    }, [props.stepsByTask])
    return (
        <div>
            <h1>Steps to complete</h1>
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

export default connect(mapStateToProps, {})(StepList);
