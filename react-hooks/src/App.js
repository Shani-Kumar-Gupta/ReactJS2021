import React, { useState } from 'react';
import './App.css';
import CComponent from './components/CComponent';
import FComponent from './components/FComponent';
import FUseRefHook from './components/FUseRefHook';

function App() {
  //let name = "Shani";
  //console.log(useState());
  const [name, setName] = useState("Shani");
  const [flag, setFlag] = useState(false);
  const [count, setCount] = useState(0);
  const [names, setNames] = useState([]);

  function changeName(){
    setFlag(!flag);
  }

  function increment(){
    setCount((prevState) => prevState + 1);
  }

  function decrement(){
    setCount((prevState) => prevState - 1);
  }

  function addNames(e){
    e.preventDefault();
    setNames([...names, {id: names.length, name}])
    setName("");    
  }
  return (
    <div className="App">
      <div>
        <h2>useState() functional Hook</h2>
        <div>Hello, {flag ? name : ""}</div>
        <button onClick={changeName}>Click Me</button>
        <hr/>
        <button onClick={increment}>+</button>
        <div>{count}</div>
        <button onClick={decrement}>-</button>
        <hr/>
        <form onSubmit={ addNames }>
          <input type="text" placeholder="add name" value={name} onChange={(e) => setName(e.target.value)} />
          <button>Submit</button>
        </form>
        <hr></hr>
        <div>
          <p>Name List:</p>
          {names.map((item) => (
            <li key={item.id}>{item.name}</li>
          ))}
        </div>
        <div>
          <h2>useEffect() functional Hook</h2>
          <button onClick={() => setFlag(!flag)}>Toggle Component</button>
          { flag ? <CComponent/> : <FComponent/> }
        </div>
        <hr/>
        <div>
          <h2>useRef() functional Hook</h2>
          <FUseRefHook/>
        </div>
      </div>
    </div>
  );
}

export default App;
