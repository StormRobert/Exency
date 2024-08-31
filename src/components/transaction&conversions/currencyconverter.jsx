import React from 'react'
import { AiOutlineSwap } from 'react-icons/ai'
import Currencyselect from './currencyselect'
import { useState } from 'react'


const currencyconverter = () => {
    const [fromCurrency, setFromCurrency] = useState('USD')
    const [toCurrency, setToCurrency] = useState('KES')
    const [amount, setAmount] = useState(100)

    const handleSwapCurrency = () => {
        setFromCurrency(toCurrency)
        setToCurrency(fromCurrency)
    }

    //fn fetching exchange rate na updating the result
    const getExchangeRate = async() => {
        const API_KEY = "cff92de5e4f162e0ec9a1668";
        const API_URL = `https://v6.exchangerate-api.com/v6/${API_KEY}/pair/${fromCurrency}/${toCurrency}`

        try{
            const response = await fetch(API_URL)
            if(!response.ok) throw Error("Someting wnt wrong!")
                const data = await response.json()
                console.log(data)
            const exchangeRate = (data.conversion_rate * amount).toFixed();
            console.log(exchangeRate)

        } catch(error){
            console.log(error)
        }
    }
    const handleFormSubmit = (e) => {
        e.preventDefault()
        getExchangeRate()
    }

  return (
    <div className="flex h-screen items-center justify-center ">
    <div className="w-full max-w-md p-8 bg-neutral-900 rounded-lg shadow-lg shadow-cyan-500/50 transform transition-transform hover:scale-105">
      <h2 className='text-3xl font-bold mb-6 text-center text-white'>Currency Converter</h2>
      <form className='space-y-4' 
      onSubmit={handleFormSubmit}>
        <div className='space-y-2'>
          <label className='block text-sm font-bold text-neutral-300'>Enter Amount</label>
          <input 
          value={amount}
          onChange={(e) => setAmount(e.target.value)} 
          type="number" 
          className='w-full px-3 py-2 leading-tight text-neutral-900 border border-neutral-700 rounded shadow appearance-none focus:outline-none focus:shadow-outline focus:ring-2 focus:ring-cyan-500' required />
        </div>
        <div className='flex items-center justify-between space-x-4'>
          <div className='w-1/2'>
            <label className="block text-sm font-bold text-neutral-300">From</label>
            <Currencyselect 
            selectedCurrency={fromCurrency}
            handleCurrency = {e => setFromCurrency(e.target.value)}
            />
          </div>
          <div onClick={handleSwapCurrency} className='text-white text-2xl hover:cursor-pointer'>
            <AiOutlineSwap />
          </div>
          <div className='w-1/2'>
            <label className="block text-sm font-bold bg text-neutral-300">To</label>
            <Currencyselect 
            selectedCurrency={toCurrency}
            handleCurrency = {e => setToCurrency(e.target.value)}
            />
          </div>
        </div>
        <button type='submit' className='w-full px-4 py-2 mt-6 font-bold text-white bg-cyan-500 rounded hover:bg-cyan-700 focus:outline-none focus:shadow-outline transition-colors duration-300'>Current Rates</button>
        <p className="text-center text-cyan-300 mt-4 exchangerateresult"></p>
      </form>
    </div>
  </div>
  )
}

export default currencyconverter
