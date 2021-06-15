import React, {useState, useMemo} from 'react';
import factorial from '../helpers';
import DisplayName from './DisplayName';

function FUseMemoHook() {
    /*
        1. Optimize expensive operation
        2. Referential equality: Premitive and non premitive data type
    */
   const [counter, setCounter] = useState(1);
   //const result = factorial(counter);
   const result = useMemo(() => {
       return factorial(counter);
   }, [counter]);
   const [name, setName] = useState("");
    return (
        <div>
            <h2>useMemo() functional hook</h2>
            <h1>Factorial of {counter} is: <span>{result}</span></h1>
            <div>
                <button onClick={() => setCounter(counter -1)}>decrement</button>
                <button onClick={() => setCounter(counter + 1)}>increment</button>
            </div>
            <hr/>
            <div>
                <label>Enter Name</label>
                <input
                    type="text"
                    placeholder="enter name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
                <DisplayName name={name}/>
            </div>
        </div>
    )
}

export default FUseMemoHook;