import { useState } from "react"
import Counts from "./tasks/Counts";
import Take_input from "./tasks/Take_input";
import Dispaly_list from "./tasks/Dispaly_list";
import Toggle from "./tasks/Toggle";



function App() {
  

  return (
    <div className="pl-[50%] place-items-center">
      {/* <Counts/> */}
      {/* <Take_input/> */}
      {/* <Dispaly_list/> */}
      <Toggle/>
    </div>
    
       
    
  )
}

export default App
