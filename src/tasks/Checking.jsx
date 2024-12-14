import React, { useState } from 'react'

function Checking() {
    const [count, setCount] = useState(0)

    
    setCount(count+1)
    console.log(count)
  return (
    <div>hello</div>
  )
}

export default Checking