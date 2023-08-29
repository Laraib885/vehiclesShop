import React,{useEffect} from "react";
import "./Review.css";

import Reveiw1 from '../Images/Reveiw1.jpg'
import client1 from '../Images/client1.png'

import { BsArrowRightShort } from "react-icons/bs";
import { BsArrowLeftShort } from "react-icons/bs";
import { AiFillStar } from "react-icons/ai";


import Aos from 'aos'
import 'aos/dist/aos.css'

const Review = () => {

  useEffect(()=>{
    Aos.init(
      {
        duration: 2000
      }
    )
  },[])
  return (
    <div className="review section">
      <div className="secContainer container">
        <div data-aos='fade-up' className="secHeading flex">
          <h3 className="secTitle">Recent Reviews</h3>

          <div className="navBtns flex">
            <BsArrowLeftShort className="icon leftIcon" />
            <BsArrowRightShort className="icon rightIcon" />
          </div>
        </div>

        {/* review container*/}
        <div className="reviewContainer grid">
          {/* single review */}
          <div className="singleReview grid data-aos='fade-up'">
            <div className="imgDiv">
              <img src={Reveiw1} alt="Car Image" />
            </div>

            <h5 className="reviewTitle">2023 Cadiallac</h5>

            <span className="desc">
              Good cars are safe fast, affordable to purchase, economical to
              operate, reliable, capacious, comfortable, and attractive.
            </span>

            <div className="reviewerDiv flex">
              <div className="leftDiv flex">
                <div className="reviewerImage">
                  <img src={client1} alt="Reviewer Image" />
                </div>
                <div className="aboutReviewer">
                  <span className="name">Jakline Nelson</span>
                  <p>Chief Editior</p>
                </div>
              </div>

              <div className="rightDiv flex">
                  <AiFillStar className='icon'/>
                  <blockquote>4.84</blockquote>
              </div>
            </div>
          </div>

            {/* single review */}
            <div className="singleReview grid data-aos='fade-up'">
            <div className="imgDiv">
              <img src={Reveiw1} alt="Car Image" />
            </div>

            <h5 className="reviewTitle">2023 Cadiallac</h5>

            <span className="desc">
              Good cars are safe fast, affordable to purchase, economical to
              operate, reliable, capacious, comfortable, and attractive.
            </span>

            <div className="reviewerDiv flex">
              <div className="leftDiv flex">
                <div className="reviewerImage">
                  <img src={client1} alt="Reviewer Image" />
                </div>
                <div className="aboutReviewer">
                  <span className="name">Jakline Nelson</span>
                  <p>Chief Editior</p>
                </div>
              </div>

              <div className="rightDiv flex">
                  <AiFillStar className='icon'/>
                  <blockquote>4.84</blockquote>
              </div>
            </div>
          </div>

            {/* single review */}
            <div className="singleReview grid data-aos='fade-up'">
            <div className="imgDiv">
              <img src={Reveiw1} alt="Car Image" />
            </div>

            <h5 className="reviewTitle">2023 Cadiallac</h5>

            <span className="desc">
              Good cars are safe fast, affordable to purchase, economical to
              operate, reliable, capacious, comfortable, and attractive.
            </span>

            <div className="reviewerDiv flex">
              <div className="leftDiv flex">
                <div className="reviewerImage">
                  <img src={client1} alt="Reviewer Image" />
                </div>
                <div className="aboutReviewer">
                  <span className="name">Jakline Nelson</span>
                  <p>Chief Editior</p>
                </div>
              </div>

              <div className="rightDiv flex">
                  <AiFillStar className='icon'/>
                  <blockquote>4.84</blockquote>
              </div>
            </div>
          </div>

          
        </div>
      </div>
    </div>
  );
};

export default Review;
