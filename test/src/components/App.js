import React from 'react'
import { useEffect, useState } from 'react'
import Input from './Input'
import DisplayCalculation from './DisplayCalculation'


export default function App() {
  const [currencyOption, setCurrencyOption] = useState([])
  const [convertedValue, setConvertedValue ] = useState(0)
  const [fromCurrency, setFromCurrency] = useState()
  const [fromInput, setFromInput] = useState()

 



  useEffect(() => { 
    fetch(`https://api.nbp.pl/api/exchangerates/tables/a/`)
    .then((response) => response.json())
    .then((data) => {
        setCurrencyOption([...Object.values(data[0].rates.filter(rate => rate.code === 'USD' ? rate.mid : '' || rate.code === 'EUR' ? rate.mid : '' || rate.code === 'CHF' ? rate.mid : ''))])
              
      })
      },[])

  return (
    <>
    <div>
    <h1>Przelicznik walut</h1>
    <Input 
      currencyOption={currencyOption}
      />
    <DisplayCalculation />
    </div>
    
    </>
  )
}



