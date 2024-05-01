import React from 'react'

const Todolist = ({Todolist,deletetodo}) => {
  return (
    <div>
{Todolist.map((todos,index)=>
<h5 key={index}>
    {todos}&nbsp;<button onClick={()=>deletetodo(index)}>Delete</button>
</h5>)}
    </div>
  )
}

export default Todolist;