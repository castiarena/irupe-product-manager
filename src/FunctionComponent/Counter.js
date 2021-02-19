import React, { useState, useEffect } from 'react';

const Counter = ({ incrementText, incrementer = 1 }) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        console.log('mount');
        return () => {
            console.log('fc unmounted');
        }
    }, []);


    useEffect(() => {
        console.log(incrementText);
    }, [incrementText]);
    
    return (
        <div>
            <p>{count}</p>
            <button onClick={() => 
                setCount((prevState) => prevState + incrementer )
            }>
                {incrementText}
            </button> 
        </div>
    )
}

export default Counter;