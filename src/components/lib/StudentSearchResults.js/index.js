import React from 'react';

import uuid from "uuid/v4"

const StudentSearchResults = ({ foundStudents }) => {
  console.log(foundStudents)
    return (
        <div>
            {foundStudents.map(({ first_name, last_name }) => (
          <div key={uuid()}>
            {first_name} {last_name}
          </div>
          
        ))}
        </div>
    )
}

export default StudentSearchResults
