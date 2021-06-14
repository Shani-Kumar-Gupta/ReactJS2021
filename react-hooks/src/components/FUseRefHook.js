import React, {useState, useRef} from 'react';

function FUseRefHook() {
    /*
        1. DOM Manipulation
        2. useRef for storing the prevoius state
        3. hold mutable value prevent re-render of component
    */
   const [name, setName] = useState("");
   const resetInput = () => {
       setName("");
   }
    return(
        <div className="App">
            <div>
                <input
                    name="name"
                    autoComplete="off"
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
                <button onClick={resetInput}>Reset</button>
            </div>
        </div>
    )
}

export default FUseRefHook;