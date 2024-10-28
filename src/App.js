import './App.css';
import MainPage from './../src/Wallet/MainPage';
import CreateMenemonics from './../src/Wallet/CreateMenemonics';
import CreateWallet from './../src/Wallet/CreateWallet';
import WalletOutlined from '@mui/icons-material/WalletOutlined';
import AlreadyHaveWallet from './../src/Wallet/AlreadyHaveWallet';
import WalletAddresses from './Wallet/WalletAddresses';
import WalletDetail from './Wallet/WalletDetail';
import SendTransaction from './Wallet/SendTransaction';
import React, { useState } from 'react';
import '@fontsource/roboto/300.css';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';

function App() {
  
  return (
    <div className="App">
      <header className="App-header">
        <div className="header-title">
            Wallet
            <WalletOutlined color="success" fontSize="larger"></WalletOutlined>
          </div>
      </header>
      <Router>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/createMenemonics" element={<CreateMenemonics />} />
          <Route path="/createWallet" element={<CreateWallet />} />
          <Route path="/alreadyHaveWallet" element={<AlreadyHaveWallet />} />
          <Route path="/walletAddresses/:walletId" element={<WalletAddresses />} />
          <Route path="/walletDetail/:addressId" element={<WalletDetail />} />
          <Route path="/sendTransaction/:addressId" element={<SendTransaction />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
