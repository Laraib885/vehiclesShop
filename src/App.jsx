import React from 'react'
import './App.css'
import Auction from './Components/Auction/Auction';
import Navbar from './Components/Navbar/Navbar';
import Home from './Components/Home/Home';
import Search from './Components/Search/Search';
import Trending from './Components/Trending/Trending';
import Sellers from './Components/Sellers/Sellers';
import Footer from './Components/Footer/Footer';
import Review from './Components/Review/Review';
import Wallet from './Components/Wallet/Wallet';


const App = () => {
  return (
   <>
   <h1 className='title'>
    <Navbar/>
    <Home/>
    <Wallet/>
    <Search/>
    <Trending/>
    <Sellers/>
    <Auction/>
    <Review/>
    <Footer/>
   </h1>
   </>
  )
}

export default App;
