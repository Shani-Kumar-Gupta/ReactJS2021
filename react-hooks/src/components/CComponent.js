import React from 'react';

class CComponent extends React.Component {
    constructor(){
        super();
        this.state = {
            message: "Class Component",
            time: new Date().toString(),
        }
    }

    componentDidMount(){
        console.log("I am from Did Mount.");
        this.interval = setInterval(this.showDate, 1000);
    }

    componentDidUpdate(){
        console.log("I am from update.");
    }

    componentWillUnmount(){
        console.log("I am from Unmount.");
        clearInterval(this.interval);
    }

    showDate = () => {
        this.setState({time: new Date().toString()});
    }
    render(){
        return (
            <div>
                <div>{this.state.message}</div>
                <div>{this.state.time}</div>
            </div>
        )
    }
}

export default CComponent;