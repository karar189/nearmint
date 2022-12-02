import React from "react";
import { useState, useEffect } from "react";
import "../Styles/style.css";
import logo from "../assets/4 1.svg";
import '../Styles/style.css';

export default function Main({ mintApp, wallet }) {
  const [tokensLeft, getLeft] = useState([]);

  useEffect(() => {
    mintApp.tokens_left().then(getLeft);
  }, [mintApp]);

  const [meta, getMeta] = useState([]);

  useEffect(() => {
    mintApp.nft_metadata().then(getMeta);
  }, [mintApp]);

  function mint() {
    mintApp.nft_mint_one();
  }

  const [ownerTokens, getTokens] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      // get the data from the api
      const data = await mintApp.nft_tokens_for_owner();
      for (let z = 0; z < data.length; z++) {
        getTokens((current) => [...current, data[z]]);
      }
    };
    // call the function
    fetchData()
      // make sure to catch any error
      .catch(console.error);
  }, [mintApp]);

  console.log(ownerTokens);
  console.log(meta);

  

  return (
    <>
      <section className="navbar">
        <a href="#">
          <img src={logo} alt="logo" />
        </a>
      </section>

      <section className="hero">
        
        <div className="hero-text">
          D<span>3</span>VERSE
        </div>


        <div className="supply">
          <span >Supply:</span> <a>{tokensLeft} / 50</a> </div>


        <div className="mint">
          <button onClick={mint}>Mint</button>
        </div>



        <div className="minted">
          You Minted:
          {ownerTokens.map((tok, i) => (
            <div key={i}>
              <img width="100" src={`${meta.base_uri}${tok.metadata.media}`} />
            </div>
          ))}
        </div>


      </section>

      

    </>
  );
};
