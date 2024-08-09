import React, { useState } from 'react';

const Counter = () => {
    const [count, setCount] = useState(0);

    const increment = () => {
        setCount(count + 3);
    };

    const decrement = () => {
        setCount(count - 2);
    };

    return (
        <div>
            <h1>Counter App</h1>
            <h3>Count: {count}</h3>
            <button onClick={increment}>Increment</button>
            <button onClick={decrement}>Decrement</button>
        </div>
    );
};

export default Counter;
