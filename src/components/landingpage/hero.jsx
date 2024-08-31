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

  const handleLoginClick = () => {
    navigate('/login');
  }

  return (
    <div className='border-b border-neutral-800 pb-16 lg:mb-35'>
        <div className='flex flex-wrap'>
            <div className='w-full -my-6 lg:w-1/2'>
            <div className='flex flex-col items-center lg:items-start'>
                <span className="bg-gradient-to-r from-purple-400 via-slate-400 to-indigo-400 bg-clip-text text-3xl lg:text-6xl tracking-tight text-transparent">Seamless Currency Conversion</span>
                <p className='my-2 mx-6 py-6 font-light tracking-tight lg:text-2xl '>
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
            className="w-1/12 l:w-24 mx-5 px-4 py-3 font-bold text-white bg-cyan-500 rounded hover:bg-cyan-700 focus:outline-none focus:shadow-outline"
            type="button"
            onClick={handleSignUpClick}
        >
            Sign Up
        </button>
        <button
            className="w-1/12 l:w-24 px-4 py-3 font-bold text-white bg-cyan-500 rounded hover:bg-cyan-700 focus:outline-none focus:shadow-outline"
            type="button"
            onClick={handleLoginClick}
        >
            Login
        </button>
        <div className='w-1/2 mx-10 my-10 px-10 flex flexwrap items-center justify-center'>
                <div className='p-4 '>
                    <h3 className='text-2xl my-4 font-semibold mt- mb-6 text-white'>Instant Currency Conversion</h3>
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