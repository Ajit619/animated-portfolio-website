import React from 'react'
import '../css/connect.css'
import laptop from '../img/laptop.png'
import * as tb from 'react-icons/tb'
import * as fi from 'react-icons/fi'
import * as ai from 'react-icons/ai'

const Connect = () => {
  
  return (
    <>
        <div className="row connect mx-auto">
            <div className="col-md-6 c-left" data-aos='slide-right' data-aos-delay='100'>
                <img src={laptop} alt="" />
                <div className='flex-coulmn row'>
                  <h1>Connect <br /> With Me</h1>
                  <span> <ai.AiOutlinePlayCircle /> Explore Now</span>
                </div>
            </div>
            <div className="col-md-6 c-right" data-aos='flip-left' data-aos-delay='200'>
              <div className="wrapper">
                <div className="icon">
                  <span><tb.TbPolygon /></span>
                  <span>Innovation</span>
                </div>
                <span>Lorem ipsum dolor sit amet, consectetur <br/> adipisicing elit. Totam placeat id hurrygh <br />Lorem ipsum dolor sit amet, consectetur</span>
              </div>
              <div className="wrapper">
                <div className="icon">
                  <span><fi.FiSettings /></span>
                  <span>Spirit</span>
                </div>
                <span>Lorem ipsum dolor sit amet, consectetur <br/> adipisicing elit. Totam placeat id hurrygh <br />Lorem ipsum dolor sit amet, consectetur</span>
              </div>
            </div>
        </div>
    </>
  )
}

export default Connect