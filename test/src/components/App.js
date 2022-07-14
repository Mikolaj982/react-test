import React from 'react'
import { useEffect, useState } from 'react'
import Input from './Input'
import DisplayCalculation from './DisplayCalculation'


export default function App() {
  const [currencyOptions, setCurrencyOptions] = useState([])
  const [selectedValue, setSelectedValue] = useState()
  const [inputValue, setInputValue] = useState()
  const [total, setTotal] = useState()



  useEffect(() => { 
    fetch(`https://api.nbp.pl/api/exchangerates/tables/a/`)
    .then((response) => response.json())
    .then((data) => {
        const listOfOptions = [...Object.values(data[0].rates.filter(rate => rate.code === 'USD' ? rate.mid : '' || rate.code === 'EUR' ? rate.mid : '' || rate.code === 'CHF' ? rate.mid : ''))]
        setCurrencyOptions(listOfOptions)
        setSelectedValue(listOfOptions[0].mid)
      })
      },[])

  return (
    <>
    <div>
    <h1>Przelicznik walut</h1>
    <Input 
      currencyOptions={currencyOptions}
      setSelectedValue={setSelectedValue}
      setInputValue={setInputValue}
      />
    <DisplayCalculation 
      selectedValue={selectedValue}
      inputValue={inputValue}
      setTotal={setTotal}
    />
  
    {total ? <p>{total}</p> : ''}
    </div>
    </>
  )
}



