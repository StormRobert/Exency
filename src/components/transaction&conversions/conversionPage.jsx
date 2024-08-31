import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const ConversionPage = () => {
  const [amount, setAmount] = useState('');
  const [convertedAmount, setConvertedAmount] = useState(null);
  const [exchangeRate, setExchangeRate] = useState(null);
  const [loading, setLoading] = useState(true);
  const [showSuccessPopup, setShowSuccessPopup] = useState(false);
  const navigate = useNavigate();

  const fromCurrency = 'USD';
  const toCurrency = 'KES';

  useEffect(() => {
    const fetchExchangeRate = async () => {
      const API_KEY = "cff92de5e4f162e0ec9a1668"; // Replace with your actual API key
      const API_URL = `https://v6.exchangerate-api.com/v6/${API_KEY}/pair/${fromCurrency}/${toCurrency}`;

      try {
        const response = await fetch(API_URL);
        if (!response.ok) throw new Error('Failed to fetch exchange rate');
        const data = await response.json();
        setExchangeRate(data.conversion_rate);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    fetchExchangeRate();
  }, []);

  const handleConvert = () => {
    if (exchangeRate && amount) {
      const newConvertedAmount = amount * exchangeRate;
      setConvertedAmount(newConvertedAmount);

      // Retrieve current balances
      const currentAmericanBalance = parseFloat(localStorage.getItem('americanAccountBalance')) || 0;
      const currentMpesaBalance = parseFloat(localStorage.getItem('mpesaBalance')) || 0;

      // Calculate new balances
      const newAmericanBalance = (currentAmericanBalance - amount).toFixed(2);
      const newMpesaBalance = (currentMpesaBalance + newConvertedAmount).toFixed(2);

      // Update local storage with new balances
      localStorage.setItem('americanAccountBalance', newAmericanBalance);
      localStorage.setItem('mpesaBalance', newMpesaBalance);

      // Store the transaction amount
      localStorage.setItem('lastTransactionAmount', amount);

      // Show success popup and redirect with deducted amount
      setShowSuccessPopup(true);
      setTimeout(() => {
        setShowSuccessPopup(false);
        navigate('/balancePage', { state: { deductedAmount: amount } });
      }, 4000); // Delay in milliseconds (4000 ms = 4 seconds)
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-8 bg-neutral-900 text-white">
      <h2 className="text-3xl font-bold mb-6">Exchange USD to KES</h2>
      <div className="w-full max-w-md bg-neutral-800 p-6 rounded-lg shadow-lg">
        <h3 className="text-xl font-semibold mb-4">Bank Connection: Connected</h3>
        <p className="mb-4">Your connected bank account is in USD. Convert your funds to KES below:</p>
        <input
          type="number"
          placeholder="Enter amount in USD"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          className="w-full px-3 py-2 mb-4 text-neutral-900 border border-neutral-700 rounded shadow appearance-none focus:outline-none focus:shadow-outline"
        />
        <button
          onClick={handleConvert}
          className="w-full px-4 py-2 font-bold text-white bg-cyan-500 rounded hover:bg-cyan-700 focus:outline-none focus:shadow-outline"
        >
          Exchange Currencies
        </button>
        {loading ? (
          <p className="mt-4 text-lg">Loading exchange rate...</p>
        ) : (
          convertedAmount !== null && (
            <p className="mt-4 text-lg">
              Converted Amount: {convertedAmount.toFixed(2)} KES
            </p>
          )
        )}
      </div>

      {showSuccessPopup && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-75">
          <div className="w-full max-w-sm p-6 bg-gray-800 rounded-lg shadow-lg text-center">
            <h3 className="text-lg font-semibold mb-4">Success</h3>
            <p className="mb-4">Currency exchange was successful!</p>
            <button
              onClick={() => setShowSuccessPopup(false)}
              className="px-4 py-2 font-bold text-white bg-cyan-500 rounded hover:bg-cyan-700 focus:outline-none focus:shadow-outline"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ConversionPage;
