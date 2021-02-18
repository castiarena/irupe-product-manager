import React, { useState } from 'react';

const Counter = ({ incrementText, incrementer = 1 }) => {
    const [count, setCount] = useState(0);
    return (
        <div>
            <p>{count}</p>
            <button onClick={() => setCount((prevState) => prevState + incrementer )}>
                {incrementText}
            </button> 
        </div>
    )
}

export default Counter;