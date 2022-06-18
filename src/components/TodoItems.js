import React from 'react'

export const TodoItems = ({todo,onDelete}) => {
  return (
    <div className="text-center">
      <h6 className='text-center my-3'>{todo.title}</h6>
      <p className='text-center my-3'>{todo.desc}</p>
      <button className='btn btn-sm btn-danger ' onClick={()=>{onDelete(todo)}}>Delete</button>
      <br/>
    </div>
  )
}


