import React, { useState } from 'react'

function Toggle() {
    const [isToggled, setIsToggles] = useState(false);
    const handleToggle = () => {
        setIsToggles(!isToggled);
    }
  return (
    <div>
        <label htmlFor="">
            <input type='checkbox' onChange={handleToggle}/>
        </label>
        <p>{isToggled ? "On":"Off"}</p>
    </div>
  )
}

export default Toggle