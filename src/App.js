import React from 'react';
import Navigation from './components/Navigation'; 
import Footer from './components/Footer';
import { Outlet } from "react-router-dom";

const App = ({ isSignedIn, wallet }) => {

  return (
    <main>

     
     
      <Outlet />


      <Navigation isSignedIn = {isSignedIn} wallet = {wallet} />


      <Footer />
    
    </main>
  );
};

export default App;