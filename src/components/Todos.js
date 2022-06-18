import React from 'react'
import {TodoItems} from "./TodoItems";

export const Todos = (props) => {
  return (
    <div className='container'>
      <h4 className='text-center my-3'>Todos list</h4>
      {props.todos.lenght<1 ?"No todos!!":
      props.todos.map((todo)=>{
        return <TodoItems todo={todo} key={todo.sno} onDelete={props.onDelete}/>
      })}
      
      
      
    </div>
  )
}


