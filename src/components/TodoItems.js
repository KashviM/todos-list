import React from 'react'

export const TodoItems = ({todo,onDelete}) => {
  return (
    <>
    <div className="container">
      <h5 className='my-3'>{todo.title}</h5>
      <p className='my-3'>{todo.desc}</p>
      <button className='btn btn-sm btn-danger ' onClick={()=>{onDelete(todo)}}>Delete</button>
      <br/>
    </div>
    <hr/>
    </>
  )
}


