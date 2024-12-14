import React, { useEffect, useState } from 'react'

function Weather() {

  const [weather, setweather] = useState(null);
  
  useEffect(()=>{
    if(navigator.geolocation){
      navigator.geolocation.getCurrentPosition((position)=>{
        const latitude = position.coords.latitude;
        const longitude = position.coords.longitude;

        fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=222bfbce3518e47753f35b43293092b6`)
        .then((response)=> response.json())
        .then(() => setweather(data));  
        console.log(data);
        console.log(response)
        console.log("hello")
      })
    }
    else{
      console.log("else condition")
    }
  },[])
  return (
    <div>
        {weather ? (
          <div>
            <h2>current weather</h2>
            <p>Temperature: {weather.main.temp}</p>
            <p>Conditions: {weather.weather[0].discription}</p>
          </div>
        ):(
          <p>
            Loading....
          </p>
        )}
    </div>
  )
}

export default Weather