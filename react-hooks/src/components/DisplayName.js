import React from 'react';

const DisplayName = ({ name }) => {
    console.log("render");
    return (
        <p>{`My name is ${name}`}</p>
    )
}

export default React.memo(DisplayName);