import React, { useState } from 'react';

const UseState = () => {
    // useState:: lets you use local state within a function component.
    const [count, setCount] = useState(0);
    const [info, setInfo] = useState({ age: 19, siblingsNum: 4 })

    const handelReset = () => {
        setCount(0);
    }

    const { age, siblingsNum } = info;

    const handelInfo = (val) => {
        setInfo({
            ...info,
            [val]: info[val] + 1
        })
    }

    return (
        <div>
            <h1>Count Value is: {count}</h1>
            <button onClick={() => setCount(prevVal => prevVal + 1)}>Increment Counter</button>&nbsp;&nbsp;
            <button onClick={() => setCount(currVal => currVal - 1)}>Decrement Counter</button>&nbsp;&nbsp;
            <button onClick={handelReset}>Reset Counter</button>
            <hr />
            <h1>Information</h1>
            <p>Today I am {age} years old</p>
            <p>I have {siblingsNum} siblings</p>
            <div>
                <button onClick={handelInfo.bind(null, 'age')}>Get Older!</button>&nbsp;&nbsp;
                <button onClick={handelInfo.bind(null, 'siblingsNum')}>More Siblings!</button>
            </div>
        </div>
    )
}

export default UseState
