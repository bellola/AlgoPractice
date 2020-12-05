import React, { useState, useEffect } from "react";
import "./styles.css";

export default function App({ input }) {
  const [date, setDate] = useState(new Date());

  const tick = () => {
    setDate(new Date());
  };

  useEffect(() => {
    var timerID = setInterval(() => tick(), 1000);

    return function cleanup() {
      clearInterval(timerID);
    };
  });

  let element;
  if (!input) {
    //if there no input render live clock
    element = date.toLocaleTimeString();
  } else if (Array.isArray(input)) {
    //if input is array render divs each containing one element of array
    element = input.map((val) => {
      return <div key={val}>{val}</div>;
    });
  } else {
    //else return a div with the input itself
    element = input;
  }

  return <div className="App">{element}</div>;
}