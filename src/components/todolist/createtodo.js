import React, { useState } from 'react'
import Todolist from './todolist';

const Todo = () => {
    const [task,Settask]= useState("");
    const[Todos,SetTodos]= useState([]);
 
    console.log(Todos,"todos")
    const handletext =(e)=>{
        Settask(e.target.value)
    }
    const submittext = event => {
        event.preventDefault();
      console.log(task,"default")
      const Newtodo = [...Todos,task]
      SetTodos(Newtodo);
Settask("")

        
    }
    const deletehandler=(indexvalues)=>{
        const newtodolist = Todos.filter((todoremove,index)=> index !== indexvalues)
        SetTodos(newtodolist);
        console.log(newtodolist,"newtodolist")

    }
 
  return (
    <div>
        <center>
            <div className='card'>
                <div className='card-body'>
                    <h5 className='card-title'>createTodalist </h5>
                    <form  >
                        <input size="40 " type='text'  onChange={handletext}  /> &nbsp;&nbsp;
                        <input type='submit' onClick={submittext} value="add"   name="add"/> 
                    </form>

                    <Todolist  Todolist={Todos} deletetodo={deletehandler}/>
                </div>
            </div>
        </center>
    </div>
  )
}

export default Todo;