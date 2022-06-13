import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "../css/recent-works.css";
import p1 from '../img/p1.png'
import p2 from '../img/p2.png'
import p3 from '../img/p3.png'
import p4 from '../img/p4.png'
import p5 from '../img/p5.png'
import p6 from '../img/p6.png'
import p7 from '../img/p7.png'

const RecentWorks = () => {
  return (
    <>
    <div className="container works">
        <div className="heading">
            <span>Recent Works</span>
            <span>Portfolio</span>
        </div>
      <Swiper
        spaceBetween={10}
        slidesPerView={3}
        grabCursor={true}
      >
        <SwiperSlide>
            <img src={p1} alt="" />
        </SwiperSlide>
        <SwiperSlide>
        <img src={p2} alt="" />
        </SwiperSlide>
        <SwiperSlide>
        <img src={p3} alt="" />
        </SwiperSlide>
        <SwiperSlide>
        <img src={p4} alt="" />
        </SwiperSlide>
        <SwiperSlide>
        <img src={p5} alt="" />
        </SwiperSlide>
        <SwiperSlide>
        <img src={p7} alt="" />
        </SwiperSlide>
        <SwiperSlide>
        <img src={p6} alt="" />
        </SwiperSlide>
       
      </Swiper>
      </div>
    </>
  );
};

export default RecentWorks;
