import React from "react"

export default function Input({currencyOption}) {
  
    
  return (
    <>
    <input type="number"  placeholder="Wpisz wartość" onChange={onChange}/>
    <select value={currencyOption} onChange={onChange1}>
        {currencyOption.map(obj => (
            <option key={obj.code} value={obj.mid}>{obj.code}</option>
            ))}
        </select>
        <span></span>
    </>
  )
}