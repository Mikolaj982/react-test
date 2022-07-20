import React from "react"


export default function DisplayCalculation({inputValue, selectedValue, setTotal}) {
    
    const logClick = () => {
        setTotal(inputValue * selectedValue)
    }

  return (
    <>
    <button onClick={logClick}>Get</button> 
    </>
  )
}