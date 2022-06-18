import './App.css';
import Header from "./components/Header.js";
import {Todos} from "./components/Todos";
import {AddTodo} from "./components/AddTodo";
import {Footer} from "./components/Footer";
import React, { useState } from 'react';
function App() {
  // let Myvar = 2468 ;
  
    // jsx: javascript syntax extension
    const onDelete = (todo)=>{
      console.log("I am on delete",todo);

      setTodos(todos.filter((e)=>{
        return e!==todo;
      }));
    }
    const [todos, setTodos] = useState([
       {
         sno: 1,
         title:"Market",
         desc:"Buy Garlin and Onion"        
       },
       {
         sno: 2,
         title:"Mall",
         desc:"Buy Clothes"        
       },
       {
         sno: 3,
         title:"Study",
         desc:"Study DSA"        
       },
      ]);
    return (
      <>
      <Header title="Kashvi's todos" searchbar={false}/>
      <Todos todos={todos} onDelete={onDelete}/>
      <Footer/>
    </>
  );
}

export default App;
