import React from 'react'
import {TodoItems} from "./TodoItems";

export const Todos = (props) => {
  let mystyle={
    minHeight:"80vh",
    margin:"40px auto"
  }
  return (
    <div className='container ' style={mystyle}>
      <h4 className='my-3'>Todos list</h4>
      {
      // props.todos.lenght===0? "No todos":
      props.todos.length===0? "No Todos to display": 
      props.todos.map((todo)=>{
        return (
        <TodoItems todo={todo} key={todo.sno} onDelete={props.onDelete}/>
        )
       
      })}
      
      
      
    </div>
  )
}


