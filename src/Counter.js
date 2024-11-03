import React, {useState} from 'react';

function Counter() {
    
    const [count, setCount] = useState(0);

    const increment = () => setCount(count + 1);
    const decrement = () => setCount(count - 1);

    return (
        <div style = {{textAlign: 'center', padding: '20px', fontFamily: 'Arial'}}>
            <h1>Simple Counter</h1>
            <h2>{count}</h2>
            <button onClick = {increment} style = {{backgroundColor: 'green'}}>+</button>
            <button onClick = {decrement} style = {{backgroundColor: 'red'}}>-</button>
        </div>
    );
}

export default Counter;

// // Define the Counter component
// function Counter() {
//     // Define a piece of state called "count" and a function "setCount" to update it
//     const [count, setCount] = useState(0);

//     // Handler functions to increment and decrement the count
//     const increment = () => setCount(count + 1);
//     const decrement = () => setCount(count - 1);

//     return (
//         <div style={{ textAlign: 'center', padding: '20px', fontFamily: 'Arial' }}>
//             <h1>Simple Counter</h1>
//             <h2>{count}</h2>
//             <button onClick={increment} style={{ marginRight: '10px' }}>+</button>
//             <button onClick={decrement}>-</button>
//         </div>
//     );
// }

// export default Counter;
