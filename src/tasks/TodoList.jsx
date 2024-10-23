import React, { useState } from 'react'

function TodoList() {
    const [input, setInput] = useState('');
    const [todos, setTodos] = useState([]);

    const addTodos = ()=>{
        if(input.trim() !== ''){
            setTodos([...todos,input])
            setInput('');
        }
    }

    const removeTodo = (index)=>{
        const updatedTodos = todos.filter((_,i) => i !==index);
        setTodos (updatedTodos); 
    }

  return (
    <div>
        <input className='border-black border-2' type='text' onChange={(e) => setInput(e.target.value)}/>
        <button className='border-2 border-black' onClick={addTodos}>add</button>
        <ul>
            {todos.map((todos,index)=>(
                <li key={index}>
                    {todos} <button className='border-2 ' onClick={()=>removeTodo(index)}> Remove</button>
                </li>
            ))}
            
        </ul>
    </div>
  )
}

export default TodoList