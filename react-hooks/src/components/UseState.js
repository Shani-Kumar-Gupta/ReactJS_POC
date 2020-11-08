import React, {useState} from 'react';

const UseState = () => {
    // useState:: lets you use local state within a function component.
    const [count, setCount] = useState(0);

    const handelReset = () => {
        setCount(0);
    }

    return (
        <div>
            <h1>Count Value is: {count}</h1>
            <button onClick={() => setCount(prevVal => prevVal + 1)}>Increment Counter</button>&nbsp;&nbsp;
            <button onClick={() => setCount(currVal => currVal - 1)}>Decrement Counter</button>&nbsp;&nbsp;
            <button onClick={handelReset}>Reset Counter</button>
        </div>
    )
}

export default UseState
