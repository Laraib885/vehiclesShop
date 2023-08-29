import React,{useEffect} from 'react'
import './Trending.css'

import {BsArrowLeftShort} from 'react-icons/bs'
import {BsArrowRightShort} from 'react-icons/bs'
import Car1 from '../Images/Car1.jpg'
import Car2 from '../Images/Car2.jpg'
import Car3 from '../Images/Car3.jpg'

import Aos from 'aos'
import 'aos/dist/aos.css'

const Trending = () => {

  
useEffect(()=>{
  Aos.init(
    {
      duration: 2000
    }
  )
},[])

  return (
    <div className="trending section">
      <div className="secContainer container">
        <div data-aos='fade-up' className="secHeading flex">
          <h3 className='secTitle'>
            Trending Near You
          </h3>
          <div className='navBtns flex'>
            <BsArrowLeftShort className='icon leftIcon'/>
            <BsArrowRightShort className='icon rightIcon'/>
          </div>
        </div>

        <div className="carContainer grid">
         { /*Single Car */}
          <div data-aos='fade-up' data-aos-duration='2500' className="singleCar grid">
            <div className="imgDiv">
              <img src={Car1} alt="Car Image" />
            </div>
            <h5 className='carTitle'>
              Used 2019 Audi S4 premium Plus
            </h5>
            <span className='miles'>
              11475 Miles
            </span>
            <span className="AWD">
              AWD 4-Cylinder Turbo
            </span>

            <div className="price_seller flex">
              <span className='price'>
                $41,200
              </span>
              <span className='seller'>
                  Best Seller
              </span>
            </div>
          </div>

          { /*Single Car */}
          <div data-aos='fade-up' data-aos-duration='2500' className="singleCar grid">
            <div className="imgDiv">
              <img src={Car2} alt="Car Image" />
            </div>
            <h5 className='carTitle'>
              Used 2019 Audi S4 premium Plus
            </h5>
            <span className='miles'>
              11475 Miles
            </span>
            <span className="AWD">
              AWD 4-Cylinder Turbo
            </span>

            <div className="price_seller flex">
              <span className='price'>
                $41,200
              </span>
              <span className='seller'>
                  Best Seller
              </span>
            </div>
          </div>

          { /*Single Car */}
          <div data-aos='fade-up' data-aos-duration='2500' className="singleCar grid">
            <div className="imgDiv">
              <img src={Car3} alt="Car Image" />
            </div>
            <h5 className='carTitle'>
              Used 2019 Audi S4 premium Plus
            </h5>
            <span className='miles'>
              11475 Miles
            </span>
            <span className="AWD">
              AWD 4-Cylinder Turbo
            </span>

            <div className="price_seller flex">
              <span className='price'>
                $41,200
              </span>
              <span className='seller'>
                  Best Seller
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Trending;
