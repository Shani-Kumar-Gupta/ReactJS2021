import React from 'react';

class StatefulComponentAPICall extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            hasError: false,
            planets: {}
        };
    }

    componentDidMount() {
        fetch("https://jsonplaceholder.typicode.com/users/1")
            .then(res => res.json())
            .then(res => this.setState({ planets: res }))
            .catch(() => this.setState({ hasError: true }))
    }

    render() {
        return (
            <div className="container">
                {this.state.hasError === false &&
                    <div className="section">
                        {JSON.stringify(this.state.planets)}
                    </div>}
            </div>
        )
    }
}

export default StatefulComponentAPICall;