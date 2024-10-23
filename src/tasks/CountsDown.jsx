import React, { useEffect, useState } from "react";

function CountsDown() {
  const [time, setTime] = useState();

  useEffect(() => {
    if (time > 0) {
      const timer = setTimeout(() => setTime(time - 1), 1000);
      return () => clearTimeout(timer);
    } else {
      function timeUp() {}
    }
  }, [time]);
  
  console.log(typeof Number)
  return (
    <div>
      <div className="text-4xl">
        Time left: <span>{time}</span> second.
      </div>
      <input
        className="border "
        type="number"
        onChange={(e) => setTime(e.target.value)}
      />
    </div>
  );
}

export default CountsDown;
