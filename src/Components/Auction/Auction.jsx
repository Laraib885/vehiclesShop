import React,{useEffect} from "react";
import "./auction.css";
import { BsArrowLeftShort } from "react-icons/bs";
import { BsArrowRightShort } from "react-icons/bs";
import Car1 from "../Images/Car1.jpg";



import Aos from 'aos'
import 'aos/dist/aos.css'

const Auction = () => {

  useEffect(()=>{
    Aos.init(
      {
        duration: 2000
      }
    )
  },[])
  return (
    <div className="Auction section">
      <div className="secContainer container">
        <div data-aos='fade-up' className="secHeading flex">
          <h3 className="secTitle">Active Auction</h3>
          <div className="navBtns flex">
            <BsArrowLeftShort className="icon leftIcon" />
            <BsArrowRightShort className="icon rightIcon" />
          </div>
        </div>

        <div className="carContainer grid">
          {/*Single Car */}
          <div className="singleCar grid data-aos='fade-up'">
            <div className="imgDiv">
              <img src={Car1} alt="Car Image" />
            </div>
            <h5 className="carTitle">Used 2019 Audi S4 premium Plus</h5>
            <span className="miles">11475 Miles</span>
            <span className="AWD">AWD 4-Cylinder Turbo</span>

            <div className="price_buyBtn flex">
              <span className="price">$41,200</span>
              <span className="buyBtn">Buy Now</span>
            </div>
          </div>

           {/*Single Car */}
           <div className="singleCar grid data-aos='fade-up'">
            <div className="imgDiv">
              <img src={Car1} alt="Car Image" />
            </div>
            <h5 className="carTitle">Used 2019 Audi S4 premium Plus</h5>
            <span className="miles">11475 Miles</span>
            <span className="AWD">AWD 4-Cylinder Turbo</span>

            <div className="price_buyBtn flex">
              <span className="price">$41,200</span>
              <span className="buyBtn">Buy Now</span>
            </div>
          </div>

           {/*Single Car */}
           <div className="singleCar grid data-aos='fade-up'">
            <div className="imgDiv">
              <img src={Car1} alt="Car Image" />
            </div>
            <h5 className="carTitle">Used 2019 Audi S4 premium Plus</h5>
            <span className="miles">11475 Miles</span>
            <span className="AWD">AWD 4-Cylinder Turbo</span>

            <div className="price_buyBtn flex">
              <span className="price">$41,200</span>
              <span className="buyBtn">Buy Now</span>
            </div>
          </div>

           {/*Single Car */}
           <div className="singleCar grid data-aos='fade-up'">
            <div className="imgDiv">
              <img src={Car1} alt="Car Image" />
            </div>
            <h5 className="carTitle">Used 2019 Audi S4 premium Plus</h5>
            <span className="miles">11475 Miles</span>
            <span className="AWD">AWD 4-Cylinder Turbo</span>

            <div className="price_buyBtn flex">
              <span className="price">$41,200</span>
              <span className="buyBtn">Buy Now</span>
            </div>
          </div>

           {/*Single Car */}
           <div className="singleCar grid">
            <div className="imgDiv">
              <img src={Car1} alt="Car Image" />
            </div>
            <h5 className="carTitle">Used 2019 Audi S4 premium Plus</h5>
            <span className="miles">11475 Miles</span>
            <span className="AWD">AWD 4-Cylinder Turbo</span>

            <div className="price_buyBtn flex">
              <span className="price">$41,200</span>
              <span className="buyBtn">Buy Now</span>
            </div>
          </div>

           {/*Single Car */}
           <div className="singleCar grid singleCarActive">
            <div className="imgDiv">
              <img src={Car1} alt="Car Image" />
            </div>
            <h5 className="carTitle">Used 2019 Audi S4 premium Plus</h5>
            <span className="miles">11475 Miles</span>
            <span className="AWD">AWD 4-Cylinder Turbo</span>

            <div className="price_buyBtn flex">
              <span className="price">$41,200</span>
              <span className="buyBtn">Buy Now</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Auction;
