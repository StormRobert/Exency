import React from 'react'
import { Link } from 'react-router-dom'


const navbar = () => {
  return (
    
        <nav className=' mb-20 flex items-center justify-between py-6'>
            <div className='flex flex-shrink-0 items-center'>
            <div className='text-lg font-bold'>
          Exency Wallet
        </div>
            </div>
            <div className="lg:m-16 flex items-center justify-center gap-6 text-2xl">
            <Link
          to="/currencyconverter" 
          className='text-white hover:text-blue-500 transition-colors duration-300'
        />
            
            <a 
              href="wallet" 
              target="_blank" 
              rel="noopener noreferrer" 
              className='text-white hover:text-blue-500 hover:scale-110 transition-colors duration-300'
            >
             Wallet
            </a>
            
          </div>
           
    
        </nav>
  )
}

export default navbar
