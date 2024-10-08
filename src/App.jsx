import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './components/authentification/login';
import Signup from './components/authentification/signup';
import Verify from './components/authentification/verify';
import Updatepassword from './components/authentification/updatepassword';
import Currencyconverter from './components/transaction&conversions/currencyconverter';
import Landing from './components/landing';
import Navbar from './components/navbar';
import ConversionPage from './components/transaction&conversions/conversionPage';
import ConnectWallets from './components/transaction&conversions/connectWallets';
import BalancePage from './components/transaction&conversions/BalancePage';


const App = () => {
  return (
    <Router>
    <div className='overflow-x-hidden text-neutral-300 antialiased selection:bg-cyan-300 selection:text-cyan-900'>
    <div className="fixed top-0 -z-10 h-full w-full">
    <div className="absolute top-0 z-[-2] h-screen w-screen bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>
    </div>
    <div className='container mx-auto px-8'>
    <Routes>
      <Route path="/login" element={< Login />} />
      <Route path="/signup" element={< Signup />} />
      <Route path="/verify" element={< Verify />} />
      <Route path="/currencyconverter" element={< Currencyconverter />} />
      <Route path="/updatepassword" element={< Updatepassword />} />
      <Route path="/" element={< Landing />} />
      <Route path="/navbar" element={< Navbar />} />
      <Route path="/conversionpage" element={< ConversionPage />} />
      <Route path="/connectwallets" element={< ConnectWallets />} />
      <Route path="/balancepage" element={< BalancePage />} />

    </Routes>
    </div>
   </div>
   </Router>
  )
}

export default App
