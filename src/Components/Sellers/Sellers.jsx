import React,{useEffect} from 'react'
import './Sellers.css'
import imageSeller from '../Images/sellerImage.png'
import Mercedes from '../Images/se.png'
import Volswagen from '../Images/Volswagen.jpg'
import Image4 from '../Images/hyundai.jpg'


import Aos from 'aos'
import 'aos/dist/aos.css'


const Sellers = () => {

   
useEffect(()=>{
  Aos.init(
    {
      duration: 2000
    }
  )
},[])
  return (
    <div className="sellers section">
      <div className='secContainer container'>
        <div data-aos='fade-up' className='secHeading grid'>
          <h3 className='secTitle'>
            Explore top sellers in town 
          </h3>

          <p className='P-info'>
            Joseph Samuel Girard holds the Guinness world Record for being the greatest saleman in the world..
          </p>
        </div>

        <div className='sellersContainer grid'>
        {/*single seller*/}
        <div data-aos='fade-up' className="singleSeller flex">
          <div className="imgDiv flex">
            <img src={imageSeller} alt='' className='img'/>
          </div>
          <span className='info'>
            <h4 className='name'>
              Toyota
            </h4>
            <p>from $40k</p>
          </span>
        </div>

             {/*single seller*/}
             <div data-aos='fade-up' className="singleSeller flex">
          <div className="imgDiv flex">
            <img src={Mercedes} alt='' className='img'/>
          </div>
          <span className='info'>
            <h4 className='name'>
              Mercedes Benz
            </h4>
            <p>from $60k</p>
          </span>
        </div>

             {/*single seller*/}
             <div data-aos='fade-up' className="singleSeller flex">
          <div className="imgDiv flex">
            <img src={Volswagen} alt='' className='img'/>
          </div>
          <span className='info'>
            <h4 className='name'>
              Volkswagen
            </h4>
            <p>from $50k</p>
          </span>
        </div>

             {/*single seller*/}
             <div data-aos='fade-up' className="singleSeller flex">
          <div className="imgDiv flex">
            <img src={Image4} alt='' className='img'/>
          </div>
          <span className='info'>
            <h4 className='name'>
              Hyundai
            </h4>
            <p>from $23k</p>
          </span>
        </div>

        



        </div>
        
      </div>
    </div>
    )
}

export default Sellers;
