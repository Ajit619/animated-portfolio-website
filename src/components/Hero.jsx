import React from "react";
import Navbar from "./Navbar";
import "../css/hero.css";
import * as ai from 'react-icons/ai'
import user from '../img/user.png';
import VideoModal from "./VideoModal";
import { useState } from "react";

const Hero = () => {
  const [modal,setModal] = useState(false);
  return (
    <section className="hero">
      <Navbar />
      <div className="container h-wrapper">
        <div className="row">
          {/* Left Side  */}
          <div className="col-md-6 h-left">
            <h2 data-aos="fade-up" data-aos-delay="800">
              Creating Easier <br /> Solutions
            </h2>
            <span data-aos="fade-up" data-aos-delay="1200">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.<br /> Nostrum
              odit laudantium esse molestias dolorem beata.
            </span>
            <div className="buttons">
              <button
                style={{ background: "var(--orange)" }}
                className="btn button"
                data-aos="fade-right"
                data-aos-delay="1500"
              >
                Projects
              </button>
              <div className="v-player" onClick={()=>setModal(true)} data-aos="fade-left" data-aos-delay="1700">
                  <div className="player"><ai.AiOutlinePlayCircle /></div>
                  <span>Portfolio</span>
              </div>

              {/* Modal  */}
              <VideoModal modal={modal} setModal={setModal} />

            </div>
            <div className="profile" data-aos="fade-right" data-aos-delay="2200">
              <img src={user} alt="" />
              <span>We had Reached a great <br /> height in atmosphere</span>
            </div>
          </div>

          {/* Right Side  */}
          <div className="col-md-6 h-right">
              <div className="circle" data-aos="zoom" data-aos-delay="1900"></div>
              <img src={user} alt="" data-aos="fade-up" data-aos-delay="1600" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
