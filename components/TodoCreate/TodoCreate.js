import React, { useState } from "react";
import { v4 as uuidv4 } from 'uuid';

function TodoCreate({todo, setTodo}){

    const [value, setValue] = useState('')

    function AddTodo(){
        setTodo(
            [...todo, {
                id: uuidv4(),
                title: value,
                status: true
            }]
        )
        setValue('')
    }
    return(
        <div>
            <input placeholder="Add your new todo " value={value} onChange={ (e)=>setValue(e.target.value) }/>
            <button onClick={AddTodo}  type="button" class="btn btn-outline-primary">Add</button>
        </div>
    )
}

export default TodoCreate