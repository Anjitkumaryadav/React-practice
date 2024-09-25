import React, { useEffect, useState } from "react";

function FetchAPI() {
  const [data, setData] = useState(null);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts/1")
      .then((Response) => Response.json())
      .then((json) => setData(json));
  }, []);
  console.log(data);
  return (
    <div>
      {data ? (
        <div>
          <h1>Title: {data.body}</h1>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default FetchAPI;
