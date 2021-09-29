/* eslint-disable array-callback-return */
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import {addTodo,deleteTodo,removeAll} from './actions/index'
import { useSelector } from "react-redux";

const TodoList = () =>{

    const [inputData, setInputData] = useState('');
    const list = useSelector((state)=> state.TodoList.list)
    const dispatch = useDispatch();

    return(
        <>
        <h1>TodoList with redux</h1>

        <div className='main-div'>
        <div className='child-div'>
        <figure>
            <figcaption> Your TodoList Here 📝</figcaption>     
        </figure>
        <div className='addItems'>
        <input type='text' placeholder='✍️ add notes...' value={inputData} onChange={(event)=> setInputData(event.target.value)} />
        <i class="fas fa-plus-square" onClick={()=> dispatch(addTodo(inputData),setInputData(''))} ></i>
        </div>

            <div className ="showItem">
            {
                list.map((receiveData) => {
                    return (
            <div className= "eachItem" key={receiveData.id}>
                <h3>{receiveData.data}</h3>
                <i class="fas fa-trash-alt" onClick={()=> dispatch(deleteTodo(receiveData.id))} ></i>
            </div>
            )
                })
            }
        </div>
            <div className='showItems'>
                    <button className='btn effect04' data-sm-link-text='remove All' onClick={()=> dispatch(removeAll()) } > <span>Remove All</span></button>
            </div>

        </div>
        </div>
        </>
    )   
}

export default TodoList;