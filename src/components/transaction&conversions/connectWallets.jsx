import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const ConnectWallets = () => {
  const [americanAccount, setAmericanAccount] = useState('');
  const [mpesaNumber, setMpesaNumber] = useState('');
  const [isConnected, setIsConnected] = useState(false);
  const navigate = useNavigate();

  const handleConnect = (e) => {
    e.preventDefault();

    // Here you would handle the connection logic, e.g., API call
    // For demonstration purposes, we'll assume the connection is always successful
    setIsConnected(true);

    // Redirect to the conversion page after showing the popup
    setTimeout(() => {
      navigate('/conversionPage');
    }, 2000); // Delay to show popup message
  };

  return (
    <div className="flex h-screen items-center justify-center bg-gray-900">
      <div className="w-full max-w-md p-8 bg-neutral-900 rounded-lg shadow-lg shadow-cyan-500/50 transform transition-transform hover:scale-105">
        <h2 className="text-2xl font-bold mb-6 text-center text-white">Connect Wallets</h2>
        <form onSubmit={handleConnect}>
          <div className="mb-4">
            <label className="block text-sm font-bold mb-2 text-white" htmlFor="american-account">
              American Bank Account
            </label>
            <input
              className="w-full px-3 py-2 text-neutral-900 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
              id="american-account"
              type="text"
              placeholder="Enter your American bank account details"
              value={americanAccount}
              onChange={(e) => setAmericanAccount(e.target.value)}
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-bold mb-2 text-white" htmlFor="mpesa-number">
              M-Pesa Number
            </label>
            <input
              className="w-full px-3 py-2 text-neutral-900 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
              id="mpesa-number"
              type="text"
              placeholder="Enter your M-Pesa number"
              value={mpesaNumber}
              onChange={(e) => setMpesaNumber(e.target.value)}
              required
            />
          </div>
          <div className="flex items-center justify-between mb-6">
            <button
              className="w-full px-4 py-2 font-bold text-white bg-cyan-500 rounded hover:bg-cyan-700 focus:outline-none focus:shadow-outline"
              type="submit"
            >
              Connect
            </button>
          </div>
        </form>
        <div className="flex flex-col items-center">
          <div className="w-full max-w-xs p-4 mb-4 bg-gray-800 rounded-lg shadow-md">
            <h3 className="text-lg font-bold mb-2 text-white">American Bank Account</h3>
            <p className="text-white">{americanAccount || 'No account connected'}</p>
          </div>
          <div className="w-full max-w-xs p-4 bg-gray-800 rounded-lg shadow-md">
            <h3 className="text-lg font-bold mb-2 text-white">M-Pesa Number</h3>
            <p className="text-white">{mpesaNumber || 'No M-Pesa number connected'}</p>
          </div>
        </div>
      </div>

      {isConnected && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50">
          <div className="p-8 bg-neutral-900 rounded-lg shadow-lg text-center">
            <h3 className="text-xl font-bold mb-4 text-white">Success!</h3>
            <p className="text-white">The accounts have been connected successfully.</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default ConnectWallets;
