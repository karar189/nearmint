// React
import React from 'react';
import App from './App';
import Main from './components/Main';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// NEAR
import { Mint } from './near-interface';
import { Wallet } from './near-wallet';

import { Buffer } from 'buffer';
window.Buffer = Buffer;

// When creating the wallet you can choose to create an access key, so the user
// can skip signing non-payable methods when talking wth the  contract
const wallet = new Wallet({ createAccessKeyFor: process.env.REACT_APP_CONTRACT_ADDRESS })

// Abstract the logic of interacting with the contract to simplify your flow
const mintApp = new Mint({ contractId: process.env.REACT_APP_CONTRACT_ADDRESS, walletToUse: wallet });

// Setup on page load
window.onload = async () => {
  const isSignedIn = await wallet.startUp()

  const container = document.getElementById('root')
  const root = createRoot(container); 
  root.render(
    <Router>
      <Routes>
      <Route path="/" element={<App isSignedIn={isSignedIn} wallet={wallet} />}>
        <Route path="" element={<Main mintApp={mintApp} wallet={wallet} />} />
      </Route>
      </Routes>
    </Router>);
}