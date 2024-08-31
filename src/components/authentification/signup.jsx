import React from 'react'
import { Link, useNavigate } from 'react-router-dom';

const signup = () => {

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate('/login');
  };

  return (
    <div className="flex h-screen items-center justify-center">
        <div className="w-full max-w-sm p-8 bg-neutral-900 rounded-lg shadow-lg shadow-cyan-500/50 transform transition-transform hover:scale-105">
        <h2 className="text-2xl font-bold mb-6 text-center text-white">Sign Up</h2>
        <form>
          <div className="mb-4">
            <label className="block text-sm font-bold mb-2" htmlFor="email">
              Email
            </label>
            <input
              className="w-full px-3 py-2 leading-tight text-neutral-900 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
              id="email"
              type="email"
              placeholder="Enter your email"
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-bold mb-2" htmlFor="password">
              Password
            </label>
            <input
              className="w-full px-3 py-2 mb-3 leading-tight text-neutral-900 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
              id="password"
              type="password"
              placeholder="Create a password"
            />
          </div>
          <div className="mb-6">
            <label className="block text-sm font-bold mb-2" htmlFor="confirm-password">
              Confirm Password
            </label>
            <input
              className="w-full px-3 py-2 mb-3 leading-tight text-neutral-900 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
              id="confirm-password"
              type="password"
              placeholder="Confirm your password"
            />
          </div>
          <div className="flex items-center justify-between">
            <button
              className="w-full px-4 py-2 font-bold text-white bg-cyan-500 rounded hover:bg-cyan-700 focus:outline-none focus:shadow-outline"
              type="button"
            >
              Sign Up
            </button>
          </div>
          <div className="mt-4 text-center">
            <Link to="/login" className="text-cyan-300 hover:underline hover:text-indigo-500  hover:text-transparent transition duration-300 ease-in-out">Already have an account? Login</Link>
          </div>
        </form>
      </div>
      
    </div>
  )
}

export default signup
