import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const BalancePage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [americanBalance, setAmericanBalance] = useState(0);
  const [mpesaBalance, setMpesaBalance] = useState(0);
  const [lastTransactionAmount, setLastTransactionAmount] = useState(null);

  useEffect(() => {
    // Retrieve current balances
    const currentAmericanBalance = parseFloat(localStorage.getItem('americanAccountBalance')) || 0;
    const currentMpesaBalance = parseFloat(localStorage.getItem('mpesaBalance')) || 0;

    // Retrieve the last transaction amount from the state
    const transactionAmount = location.state?.deductedAmount || localStorage.getItem('lastTransactionAmount');

    setAmericanBalance(currentAmericanBalance);
    setMpesaBalance(currentMpesaBalance);
    setLastTransactionAmount(transactionAmount);
  }, [location.state]);

  const handleResetBalances = () => {
    // Clear local storage
    localStorage.removeItem('americanAccountBalance');
    localStorage.removeItem('mpesaBalance');
    localStorage.removeItem('lastTransactionAmount');
    localStorage.removeItem('conversionRate'); // Clear conversion rate if needed

    // Reset state
    setAmericanBalance(0);
    setMpesaBalance(0);
    setLastTransactionAmount(null);

    // Optionally, navigate to another page
    navigate('/conversionPage'); // Adjust the route as needed
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-8 bg-neutral-900 text-white">
      <h2 className="text-3xl font-bold mb-6">Balance Report</h2>
      <div className="w-full max-w-md bg-neutral-800 p-6 rounded-lg shadow-lg">
        <h3 className="text-xl font-semibold mb-4">Transaction Summary</h3>
        {lastTransactionAmount ? (
          <>
            <p className="mb-4">Last transaction amount: {parseFloat(lastTransactionAmount).toFixed(2)} USD</p>
            <p className="mb-4">Amount deducted from American bank account: {parseFloat(lastTransactionAmount).toFixed(2)} USD</p>
            <p className="mb-4">Amount credited to M-Pesa account: {(parseFloat(lastTransactionAmount) * (parseFloat(localStorage.getItem('conversionRate')) || 1)).toFixed(2)} KES</p>
          </>
        ) : (
          <p className="mb-4">No recent transactions.</p>
        )}
        <div className="mt-6">
          <p className="text-lg font-semibold">Current Balances:</p>
          <p>American Bank Account Balance: {americanBalance.toFixed(2)} USD</p>
          <p>M-Pesa Account Balance: {mpesaBalance.toFixed(2)} KES</p>
        </div>
        <button
          onClick={handleResetBalances}
          className="mt-6 px-4 py-2 font-bold text-white bg-red-500 rounded hover:bg-red-700 focus:outline-none focus:shadow-outline"
        >
          Reset Balances
        </button>
      </div>
    </div>
  );
};

export default BalancePage;
