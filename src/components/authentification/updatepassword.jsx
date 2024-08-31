import React from 'react'
import { useNavigate } from 'react-router-dom';

const updatepassword = () => {
    const navigate = useNavigate();

    const handleSubmit = (e) => {
      e.preventDefault();
      
      navigate('/login');
    };

  return (
    <div className="flex h-screen items-center justify-center ">
      <div className="w-full max-w-sm p-8 bg-neutral-900 rounded-lg shadow-lg shadow-cyan-500/50 transform transition-transform hover:scale-105">
        <h2 className="text-3xl font-bold mb-6 text-center text-white">Update Password</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-sm font-bold mb-2 text-neutral-300" htmlFor="new-password">New Password</label>
            <input className="w-full px-3 py-2 leading-tight text-neutral-900 border border-neutral-700 rounded shadow focus:outline-none focus:shadow-outline focus:ring-2 focus:ring-cyan-500" id="new-password" type="password" placeholder="Enter new password" required />
          </div>
          <div className="mb-6">
            <label className="block text-sm font-bold mb-2 text-neutral-300" htmlFor="confirm-password">Confirm Password</label>
            <input className="w-full px-3 py-2 leading-tight text-neutral-900 border border-neutral-700 rounded shadow focus:outline-none focus:shadow-outline focus:ring-2 focus:ring-cyan-500" id="confirm-password" type="password" placeholder="Confirm new password" required />
          </div>
          <div className="flex items-center justify-between">
            <button className="w-full px-4 py-2 font-bold text-white bg-cyan-500 rounded hover:bg-cyan-700 focus:outline-none focus:shadow-outline transition-colors duration-300" type="submit">Update Password</button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default updatepassword
