import React, { useState, useEffect } from 'react';

function FComponent(){
    const [time, setTime] = useState(new Date().toString());
    const [message, setMessage] = useState("Functional Component");

    useEffect(() => {
        console.log('Component Mounted or Updated');
    });

    //Calling useEffect only one time at the mount
    useEffect(() => {
        console.log("Mounted");
    }, []);

    // calling useEffect when component updated
    useEffect(() => {
        console.log("Updated");
        const interval = setInterval(showDate, 1000);
        // componentWillUnmount
        return () => {
            console.log("Cleanup of interval");
            clearInterval(interval);
        }
    }, [time]);

    const showDate = () => {
        setTime(new Date().toString());
    }
    return (
        <div>
            <div>{time}</div>
            <button onClick={showDate}>Show Date</button>
            <div>{message}</div>
            <button onClick={() => setMessage("Changed Functional Component")}>
                Change Message
            </button>
        </div>
    )
}

export default FComponent;