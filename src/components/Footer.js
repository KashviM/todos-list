import React from 'react'
// import "./Footer.css";

export const Footer = () => {
  let footerstyle={
    position:"absolute",
    top:"90vh",
    width:"100%",
    border:"red"
  }
  return (
    <footer className='bg-dark text-light py-2' style={footerstyle}>
     <p className="text-center">copyright &copy; kashvi_todos.com</p> 
    </footer>
  )
}


