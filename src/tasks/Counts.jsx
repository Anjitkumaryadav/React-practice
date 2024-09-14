import React, { useState } from 'react'

function Counts() {
    const [count, setCount] = useState(0);
  return (
    <div className="pl-[50%] place-items-center">
      <button className="border bg-gray-300 px-4 py-2" onClick={()=> setCount(count+1)}> + </button><br/>
      <h1> {count} </h1><br/>
      <button className="border bg-gray-300 px-4 py-2" onClick={()=> setCount(count-1)}> - </button>
    </div>
  )
}

export default Counts