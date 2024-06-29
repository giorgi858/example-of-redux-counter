import { useDispatch, useSelector } from "react-redux"
import { increment, decrement, reset, incrementByAmount, subtractByAmount } from "./coutnerSlice"
import { useState } from "react"
import { useNavigate } from "react-router-dom"

const Couter = () => {
    const count = useSelector((state) => state.counter.count)
    const dispatch = useDispatch()
    const navigage = useNavigate()

    const [incrementAmount, setIncrementAmount] = useState(0);
    const [decrementAmount, setDecrementAmount] = useState(0);

    const addValue = Number(incrementAmount) || 0 
    const subtractValue = Number(decrementAmount) || 0 


    const resetAll = () => {
        setIncrementAmount(0)
        setDecrementAmount(0)
        dispatch(reset())
    }
    const goAnother = () => {
      navigage('/postpage')
    }
  return (
    <section>
        <p>{count}</p>
        <div className='plusMinus'>
           <button  className='btn btn-outline-success' onClick={(() => dispatch(increment()))}>+</button>
           <button  className='btn btn-outline-success' onClick={(() => dispatch(decrement()))}>-</button>
        </div>
        <input 
            type="text"
            value={incrementAmount}
            onChange={(e) => setIncrementAmount(e.target.value)}
         />
         <input 
          type='text'
          value={decrementAmount}
          onChange={(e) => setDecrementAmount(e.target.value)}
         />
         <div>
         <button className='btn btn-outline-success' onClick={() => dispatch(incrementByAmount(addValue))}>Add Amount</button>
         <button className='btn btn-outline-success' onClick={() => dispatch(subtractByAmount(subtractValue))}>subtract Amount</button>

         <button className='btn btn-outline-success' onClick={resetAll}>Reset</button>
         </div>
         <button onClick={goAnother} className='btn btn-outline-secondary'>Go To Another Redux Example</button>
    </section>
  )
}

export default Couter