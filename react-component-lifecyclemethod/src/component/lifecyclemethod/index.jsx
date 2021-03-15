import React from 'react';
import axios from 'axios';

class LifeCycleMethod extends React.Component {
    // 1. Initilization Phase: Used to initialized state and event handler
    constructor(props){
        super(props);
        this.state = {
            name: "Component LifeCycle Method",
            phase: "1) Initilization 2) Mounting 3) Updating 4) Unmounting",
            user: null
        }
    }

    // 2. Mounting Phase

    static getDerivedStateFromProps(props, state) {
        // 2. This method called before the component mounted on the DOM
        console.log("GETDERIVEDSTATEFROMPROPS CALLED");
    }

    componentDidMount(){
        // 4. render() method called and then component is mounted on to the DOM then this method called
        console.log("COMPONENTDIDMOUNT CALLED");
    }

    // 3. render() method called
    render(){
        return (
            <>
                <div className="container">
                    ::::::::::::::: LifeCycle Method Demo :::::::::::::::::
                    <p>PHASES :: {this.state.phase}</p>
                    <p></p>
                </div>
            </>
        )
    }
}

export default LifeCycleMethod;