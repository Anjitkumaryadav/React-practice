import React, { useEffect, useState } from "react";

function RandomQuote() {
  let quotes = [
    " Avoid daydreaming about the years to come.",
    "You are the most important person in your whole life.",
    "Always be true to who you are, and ignore what other people have to say about you.",
    "Always be true to who you are, and ignore what other people have to say about you.",
    "Only demonstrate your strength when it’s really required.",
  ];

  // const randomIndex = Math.floor(Math.random()*quotes.length)
  // const quote= quotes[randomIndex]
  const [quote, setQuote] = useState("");

  useEffect(() => {
    const interval = setInterval(() => {
      const randomIndex = Math.floor(Math.random() * quotes.length);
      setQuote(quotes[randomIndex]);
    }, 2000); // Set the interval to 2000 ms (2 seconds)

    // Cleanup interval on component unmount
    return () => clearInterval(interval);
  }, [quotes]);

  return <div>{quote}</div>;
}

export default RandomQuote;
