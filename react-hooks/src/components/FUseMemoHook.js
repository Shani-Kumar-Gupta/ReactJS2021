import React, {useState} from 'react';

function FUseMemoHook() {
    /*
        1. Optimize expensive operation
        2. Referential equality
    */
    const factorial = (num) => {

    }
   const [counter, setCounter] = useState(1);
   const result = factorial(counter);
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
                <p>My name is {name}</p>
            </div>
        </div>
    )
}

export default FUseMemoHook;