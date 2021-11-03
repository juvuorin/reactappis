import React, { useState, useEffect } from 'react';
function Counter() {
    const [count, setCount] = useState(0)
    useEffect( function ajastimenAsetus () {
        const timer = setInterval(
            function ajastimenLaukeaminen() {
                console.log('count', count)
                setCount(count+1)
               // synkroninenPyyntö()
                
            },
            5000
        )
        /* return () => clearInterval(timer) */
    }, []) // ESLint warns us we're missing count
    return (
        <button onClick={() => setCount(count + 1)}>
            {count}
        </button>
    )
}
export default Counter