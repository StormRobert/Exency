import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const login = () => {
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    const email = e.target.email.value;
    const password = e.target.password.value;

    const storedEmail = localStorage.getItem('userEmail');
    const storedPassword = localStorage.getItem('userPassword');

    if (email === storedEmail && password === storedPassword) {
      // Navigate to landing page on successful login
      navigate('/connectwallets');
    } else {
      alert("Invalid credentials");
    }
  };

  return (
    <div className="flex h-screen items-center justify-center">
      <div className="w-full max-w-sm p-8 bg-neutral-900 rounded-lg shadow-lg shadow-cyan-500/50 transform transition-transform hover:scale-105">
        <h2 className="text-2xl font-bold mb-6 text-center text-white">Login</h2>
        <form onSubmit={handleLogin}>
          <div className="mb-4">
            <label className="block text-sm font-bold mb-2" htmlFor="email">
              Email
            </label>
            <input
              className="w-full px-3 py-2 leading-tight text-neutral-900 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
              id="email"
              type="email"
              placeholder="Enter your email"
              required
            />
          </div>
          <div className="mb-6">
            <label className="block text-sm font-bold mb-2" htmlFor="password">
              Password
            </label>
            <input
              className="w-full px-3 py-2 mb-3 leading-tight text-neutral-900 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
              id="password"
              type="password"
              placeholder="Enter your password"
              required
            />
          </div>
          <div className="flex items-center justify-between">
            <button
              className="w-full px-4 py-2 font-bold text-white bg-cyan-500 rounded hover:bg-cyan-700 focus:outline-none focus:shadow-outline"
              type="submit"
            >
              Login
            </button>
          </div>
          <div className="mt-4 text-center">
            <Link to="/signup" className="text-cyan-300 hover:underline hover:text-indigo-500 transition duration-300 ease-in-out">Don't have an account? Sign up</Link>
            <br />
            <Link to="/updatepassword" className="text-cyan-300 hover:underline hover:text-indigo-500 transition duration-300 ease-in-out">Forgot Password?</Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default login;
