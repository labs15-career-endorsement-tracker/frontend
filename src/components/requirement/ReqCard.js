import React from 'react';

const ReqCard = ({requirement}) => {
    console.log(requirement)
    return (
        <div>
            <h2>{requirement.title}</h2>
            <h2>{requirement.tasks_description}</h2>
        </div>
    );
}

export default ReqCard;
