import React from "react";
import { useSelector } from "react-redux";

function DisplayCounter() {
  
const counter=useSelector(store=>store.counter)
  return <p className="lead mb-4">Counter is: 
  <b>{counter}</b>
  </p>;
}

export default DisplayCounter;
