import React, { useState } from "react";

function ChangeBG() {
  const [backgroundColor, setBackgroundColor] = useState("gray");

  const handleClick = () => {
    const newColor = backgroundColor === "gray" ? "lightblue" : "gray";
    setBackgroundColor(newColor);
  };
  return (
    <div
      className=" w-[100%] h-[1000px] cursor-pointer "
      style={{ backgroundColor }}
      onClick={handleClick}
    >
      change color by clicking anywhare
    </div>
  );
}

export default ChangeBG;
