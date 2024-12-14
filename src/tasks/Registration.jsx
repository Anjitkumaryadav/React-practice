import React, { useState } from 'react'

function Registration() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [isRegistered, setIsRegister] = useState(false)

  return (
    <div>
        <form action="">
            <input type="email" placeholder='email' onChange={(e)=>(e.target.value)}/>
            <input type="password" placeholder='password' onChange={(e)=>(e.target.value)}/>
            
        </form>
        <p>
            {isRegistered? "don't have an account? Register Now": 'Already have an account? Login'}
        </p>
        <button onClick={()=> setIsRegister(!isRegistered)} className='border-2 border-black'>
            {isRegistered?'Register':'Login'}
        </button>
    </div>
  )
}

export default Registration