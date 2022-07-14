import React from "react"

export default function Input({currencyOptions, setSelectedValue, setInputValue}) {
  
    
  return (
    <>
    <input type="number"  placeholder="Wpisz wartość" onChange={e => setInputValue(e.target.value)} />
    <select onChange={e => setSelectedValue(e.target.value)} >
        {currencyOptions.map(obj => (
            <option key={obj.code} value={obj.mid}>{obj.code}</option>
            ))}
    </select>
        <span></span>
    </>
  )
}