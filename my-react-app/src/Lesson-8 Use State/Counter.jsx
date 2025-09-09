import React, {useState} from 'react'
import './index.css'
function Counter(){
    const [count, setCount] = useState(0)

    //increment Count
    const increment = () => {
        setCount(count + 1)
    }

    // decrement Count
    const decrement = () => {
        setCount(count - 1)
    }

    // reset Count
    const reset = () => {
        setCount(0)
    }

    return(
        <div className='counter-container'>
            <p className='counter-display'>{count}</p>
            <button className='counter-button' onClick={increment}>Increment</button>
            <button className='counter-button' onClick={decrement}>Decrement</button>
            <button className='counter-button' onClick={reset}>Reset</button>
        </div>
    )

}

export default Counter