import React from 'react'
import './Counter.css'
import { useSelector, useDispatch } from 'react-redux'
import {increment,decrement,reset} from './Action'


const Counter = () => {

    const dispatch = useDispatch()

    const count = useSelector((state) => state)

    console.log("count",count);

   
  return (
    <div>
        <div className='cntr_main'>
            <div className='cntr_title'>
                <h2>Counter APP</h2>
            </div>
            <div className='cntr_disp'>
                <h6>Counter : {count}</h6>
            </div>
            <div className='cntr_btns'>
                <button onClick={() => dispatch(increment())}>+</button>
                <button onClick={() => dispatch(reset())}>RESET</button>
                <button onClick={() => dispatch(decrement())}>_</button>
            </div>
        </div>
    </div>
  )
}

export default Counter