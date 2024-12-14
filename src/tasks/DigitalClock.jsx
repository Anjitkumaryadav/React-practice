import React, { useEffect, useState } from 'react'

function DigitalClock() {

    const [count, setCount] = useState()
    const [zone, setZone] =useState('');

    useEffect(()=>{
        setInterval(()=>{
            const time = new Date(); 
            const hours = time.getHours() % 12;
            const minutes = time.getMinutes();
            const seconds = time.getSeconds();

            const ampm = time.getHours()
            const zone= ampm>12?"pm":"am";
            setZone(zone)
            const getTime = hours +' : '+minutes + ':' + seconds;
            setCount(getTime)
        })
        // console.log("hello")
        
    })
    // const amorpm = ()=>{
    //     if(hours>12){
    //         zone = 'pm';
    //         setZone(zone)
    //     }
    //     else{
    //         zone = 'am'
    //         setZone(zone)
    //     }
    // }
  return (
    <div>
        <h1>Time:</h1>
        <span>{count} </span>
        <span >{zone}</span>
    </div>
  )
}

export default DigitalClock