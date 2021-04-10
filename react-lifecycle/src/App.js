import './App.css';
import React from 'react';
import Nav from './components/Nav';

class App extends React.Component {
  constructor(){
    super()
    this.state = {
      show: true
    }
    console.log("constructor");
  }
  componentDidMount(){
    console.log("componentDidMount");
  }
  render(){
    console.log("render");
    return (
      <div className="App">
        <h1>React Component Lifecycle Method</h1>
        {this.state.show === true && <Nav/>}
        <button onClick={() => {this.setState({show: !this.state.show})}}>Toggle NavBar</button>
      </div>
    );
  }
}

export default App;
