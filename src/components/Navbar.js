import React from "react";
import { FaCoins } from "react-icons/fa";
import './navbar.css'
import { Link } from "react-router-dom";
import CoinItem from "./CoinItem";

const Navbar = () => {
  


  
  return (
    <>
    <Link to='/'>
    <div className="navbar">
        <FaCoins className="icon" />
        <h1 className="heading">Crypto Verse</h1>
       

      </div>
      

    </Link>

    </>
    
        );
};

export default Navbar;
