import React from 'react'

function Dispaly_list() {
    const items = ['items1','items2','items3','items4']
  return (
    <div className='px-6'>
        <ul>
            {items.map((item,index)=>{
                return <li key='1'>{item}</li>
            })}
        </ul>
    </div>
  )
}

export default Dispaly_list