import React from 'react'
import { useNavigate } from 'react-router-dom'
import profile from './../../assets/currency-exchange.png'
import { HERO_CONTENT } from '../../constants'
import Currencyconverter from '../transaction&conversions/currencyconverter'

const Hero = () => {
  const navigate = useNavigate();

  const handleSignUpClick = () => {
    navigate('/signup');
  };

  return (
    <div className='border-b border-neutral-800 pb-16 lg:mb-35'>
        <div className='flex flex-wrap'>
            <div className='w-full -my-6 lg:w-1/2'>
            <div className='flex flex-col items-center lg:items-start'>
                <span className="bg-gradient-to-r from-purple-400 via-slate-400 to-indigo-400 bg-clip-text text-3xl lg:text-4xl tracking-tight text-transparent">Seamless Currency Conversion</span>
                <p className='my-2 mx-6 py-6 font-light tracking-tight'>
                    {HERO_CONTENT}
                </p>
            </div>
            </div>
            <div className='w-full lg:w-1/2 lg:p-8'>
            <div className='flex h-96 justify-center'>
                <img className='rounded-2xl lg:-my-20' src={profile} alt="Image" />
            </div>
            </div>
        </div>
        <button
            className="w-full px-4 py-2 font-bold text-white bg-cyan-500 rounded hover:bg-cyan-700 focus:outline-none focus:shadow-outline"
            type="button"
            onClick={handleSignUpClick}
        >
            Sign Up
        </button>
        <div className='w-full mx-10 my-10 px-10 flex items-center justify-center'>
                <div className='p-4'>
                    <h3 className='text-2xl font-semibold mb-4 text-white'>Instant Currency Conversion</h3>
                    <p className='text-lg text-neutral-300 mb-6'>
                        Experience hassle-free currency conversion with our intuitive tool. Easily convert between multiple currencies in real-time, and enjoy seamless transactions no matter where you are. Our currency converter ensures you get the best exchange rates with minimal fees, making it perfect for travelers and businesses alike.
                    </p>
                    <Currencyconverter />
                </div>
            </div>
    </div>
  )
}

export default Hero