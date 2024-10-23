import React, { useRef, useState } from "react";

function UseRefs() {
  const refElement = useRef("");
  const [name, setName] = useState("Anjit");
  console.log(refElement);

  return (
    <div>
      <input
        className="border"
        type="text"
        
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <h1 className="text-3xl">{name}</h1>
    </div>
  );
}

export default UseRefs;
