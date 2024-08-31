import React from 'react'
import { AiOutlineSwap } from 'react-icons/ai'
import Currencyselect from './currencyselect'
import { useState } from 'react'


const currencyconverter = () => {
    const [fromCurrency, setFromCurrency] = useState('USD')
    const [toCurrency, setToCurrency] = useState('KE')
  return (
    <div className="flex h-screen items-center justify-center ">
    <div className="w-full max-w-md p-8 bg-neutral-900 rounded-lg shadow-lg shadow-cyan-500/50 transform transition-transform hover:scale-105">
      <h2 className='text-3xl font-bold mb-6 text-center text-white'>Currency Converter</h2>
      <form className='space-y-4'>
        <div className='space-y-2'>
          <label className='block text-sm font-bold text-neutral-300'>Enter Amount</label>
          <input type="number" className='w-full px-3 py-2 leading-tight text-neutral-900 border border-neutral-700 rounded shadow appearance-none focus:outline-none focus:shadow-outline focus:ring-2 focus:ring-cyan-500' required />
        </div>
        <div className='flex items-center justify-between space-x-4'>
          <div className='w-1/2'>
            <label className="block text-sm font-bold text-neutral-300">From</label>
            <Currencyselect 
            selectedCurrency={fromCurrency}
            />
          </div>
          <div className='text-white text-2xl'>
            <AiOutlineSwap />
          </div>
          <div className='w-1/2'>
            <label className="block text-sm font-bold text-neutral-300">To</label>
            <Currencyselect 
            selectedCurrency={toCurrency}
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
