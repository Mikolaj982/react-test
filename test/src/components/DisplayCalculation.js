import React from "react"
import { useState } from "react";

export default function DisplayCalculation({}) {
    const [isClicked, setIsClicked] = useState(false); 
    const logClick = () => setIsClicked(() => true);

  return (
    <>
    <button onClick={logClick}>Get</button>
    {isClicked && <span>{{}}</span>} 
    </>
  )
}