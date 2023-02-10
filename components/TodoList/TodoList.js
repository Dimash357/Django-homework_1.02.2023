import React from "react";
import { useState } from "react";

function TodoList({ todo, setTodo }){
    const [edit, setEdit] = useState(null)
    const [value, setValue] = useState('')
    function DeleteTodo(id){
        let newTodo = [...todo].filter(item => item.id!=id)
        setTodo(newTodo)
    }
    function EditTodo(id, title){
         setEdit(id)
         setValue(title)
    }
    function SaveTodo(id){
        let newTodo = [...todo].map(item => {
            if(item.id == id) {
                item.title = value
            }
            return item
        })
        setTodo(newTodo)
        setEdit(null)
    }
    return(
        <div>
            {
                todo.map( item => (
                    <div key={item.id}>
                        {
                            edit == item.id ? 
                                <div>
                                    <input value={value} onChange={(e)=>setValue(e.target.value)}/>
                                </div> :
                                


                                <div class="col">
                                    <div class="card shadow-sm">
                                    <svg class="bd-placeholder-img card-img-top" width="100%" height="225" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Thumbnail" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#55595c"></rect><text x="50%" y="50%" fill="#eceeef" dy=".3em">{ item.title }</text></svg>
                        
                                    <div class="card-body">
                                        <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                        <div class="d-flex justify-content-between align-items-center">
                                        <div class="btn-group">
                                        </div>
                                        <small class="text-muted">9 mins</small>
                                        </div>
                                    </div>
                                    </div>
                                </div>
                        }

                        {
                            edit == item.id ? 
                            <div>
                                <button onClick={ ()=>SaveTodo(item.id)}>Save</button>
                            </div> :
                            <div>
                                <button onClick={ ()=>DeleteTodo(item.id) } type="button" class="btn btn-outline-danger">Delete</button>
                            <button onClick={ ()=>EditTodo(item.id, item.title) } type="button" class="btn btn-outline-info">Edit</button>
                            </div>
                        }
                    </div>
                ))
            }
        </div>
    )
}

export default TodoList