import React, {useState, useRef, useEffect} from 'react';

function FUseRefHook() {
    /*
        1. DOM Manipulation // reference
        2. useRef for storing the prevoius state
        3. hold mutable value prevent re-render of component
    */
   const [name, setName] = useState("");
   const [counter, setCounter] = useState(0);
   const prevCounter = useRef("");
   const inputEl = useRef("");
   const resetInput = () => {
       setName("");
       inputEl.current.focus();
   }

   useEffect(() => {
       prevCounter.current = counter;
   }, [counter]);
    return(
        <div className="App">
            <div>
                <input
                    ref={inputEl}
                    name="name"
                    autoComplete="off"
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
                <button onClick={resetInput}>Reset</button>
            </div>
            <div>My name is {name}</div>
            {typeof prevCounter.current !== undefined && (
                <h2>Previous Counter: {prevCounter.current}</h2>
            )}
            <div>Random Counter: {counter}</div>
            <button onClick={(e) => setCounter(Math.ceil(Math.random() * 100))}>Generate Number</button>
        </div>
    )
}

export default FUseRefHook;