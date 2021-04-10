import React, { Component } from 'react';

export default class Nav extends Component {

    componentDidMount(){
        console.log("nav mounted");
    }

    componentWillUnmount(){
        console.log("Nav componentWillUnmount");
    }
    render() {
        console.log("nav render");
        return (
            <div>
                <h3>Nav Bar</h3>
            </div>
        )
    }
}
