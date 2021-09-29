import React from "react";

import { useSelector,useDispatch } from "react-redux";
import { incNumner,decNumber,multiply,divide } from "./actions/index";

const Counter = () =>{
    const myState = useSelector((store)=>store.changeNumber)
    const myOtherState = useSelector((store)=>store.Calc)
    const dispatch = useDispatch();
    return (
        <>
        <div className='container'>
        <h1>Counter with Redux </h1>
        <h1>Increase/Decrease Counter</h1>
        <h4> using React and redux</h4>


        <div className='quantity'>
        <button className='quantity_minus' title='Decrement' onClick={()=> dispatch(decNumber())} > <span>-</span></button>
        <input name='quantity_plus' type='text' className=' quantity_input' value={myState} />
        <button className = 'quantity_plus' title='Inrement' onClick={()=> dispatch(incNumner())}><span>+</span></button>

        </div>

        </div>

<hr/>

        <div className='container'>
        <h1>Calculator with Redux </h1>
        <h1>Multiply/Divide</h1>
        <h4> using React and redux</h4>


        <div className='quantity'>
        <button className='quantity_minus' title='Divide' onClick={()=> dispatch(divide())} > <span>/</span></button>
        <input name='quantity_plus' type='text' className=' quantity_input' value={myOtherState} />
        <button className = 'quantity_plus' title='Multiply' onClick={()=> dispatch(multiply())}><span>*</span></button>

        </div>

        </div>
        
        </>
    )
}

export default Counter;
