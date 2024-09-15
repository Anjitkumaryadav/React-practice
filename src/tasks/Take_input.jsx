import React, { useState } from 'react'

function Take_input() {
    const [input, setInput] = useState('');
  return (
    <div>
        <input type="text" value={input} className='border bg-gray-200' onChange={(e)=> setInput(e.target.value)}/>
        <p>User Input: {input} </p>
    </div>
  )
}

export default Take_input