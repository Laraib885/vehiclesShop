import React,{useState} from "react";
import "./Navbar.css";
import { IoIosCloseCircle } from "react-icons/io";
import { TbGridDots } from "react-icons/tb";
import Img from '../Images/Logo.jpg'

const Navbar = () => {

  //Statement to hold the navbar state

  const [navbar, setNavbar] = useState('navbar')

  //function to show navbar on smaller width screen
  const showNavbar = () =>{
    setNavbar('navbar showNavbar')
  }

   //function to remove navbar on smaller width screen
   const removeNavbar = () =>{
    setNavbar('navbar')
  }

  //Function to add a background to the Navbar when we scroll a certain height on the window

  const [header, setHeader] = useState('header');
  const addBg = () =>{
    if(window.scrollY >= 20){
      setHeader('header addBg')
    }
  }
  window.addEventListener('scroll',addBg)

  return (
    <div className={header}>
      <div className="logoDiv">
        <img src={Img} alt="logo" className="logo" />
      </div>

      <div className={navbar}>
        <ul className="menu">
          <li onClick={removeNavbar} className="listItem">
            <a href="/" className="link">
              Used Cars
            </a>
          </li>

          <li onClick={removeNavbar} className="listItem">
            <a href="/" className="link">
              New Cars
            </a>
          </li>

          <li onClick={removeNavbar} className="listItem">
            <a href="/" className="link">
              Auction
            </a>
          </li>

          <li onClick={removeNavbar} className="listItem">
            <a href="/" className="link">
              Sell
            </a>
          </li>
        </ul>

        <IoIosCloseCircle className="icon closeIcon" onClick={removeNavbar}/>
      </div>

      <div className="signUp flex">
        <div className="text">Sign up</div>

        <TbGridDots className="icon toggleNavberIcon" onClick={showNavbar}/>
      </div>
    </div>
  );
};

export default Navbar;
