


import './App.css'
import React, { useState } from 'react'

function Counter() {
    const [num, setNum] = useState(0)
    const IncreFun = () => {
        setNum(num + 1);
    }
    const DecreFun = () => {
        if (num > 0) {
            setNum(num - 1);
        }
    }
    const resFun = () => {
        setNum(0)

    }
    return (
        <>
        <div className='counter'>
            <h1>Counter Application</h1>
            <h1>{num}</h1>
            <button className='cout-button' onClick={IncreFun}>Increment</button>
            <button  className='cout-button' onClick={DecreFun}>Decrement</button>
            <button className='cout-button' onClick={resFun}>Reset</button>
            </div>
        </>
    )
}

export default Counter;
