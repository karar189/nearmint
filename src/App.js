import React from 'react';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import { Outlet } from "react-router-dom";

const App = ({ isSignedIn, wallet }) => {

  return (
    <main>

      <Navigation isSignedIn = {isSignedIn} wallet = {wallet} />

      <Outlet />

      <Footer />
    
    </main>
  );
};

export default App;