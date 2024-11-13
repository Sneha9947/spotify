import React from "react";
import "./artist.css";
import axios from'axios';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


// import required modules
import { Pagination } from 'swiper/modules';

import { RiPlayMiniFill } from "react-icons/ri";
const Artist = (props) => {
  console.log(props.musicarray);
  let muarr=props.musicarray
  console.log(muarr);
  
  


  return (
    <>
    <div className="title">
      <h1>Popular Artist</h1>
      <h2>Show all</h2>
    </div>
   <div className="swiper1">
   <Swiper
        slidesPerView={7}
        spaceBetween={30}
        Pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
        // Pagination={{ el: null }}
      >
       
       {muarr.map(function (data) {
        return(
         <SwiperSlide>
          
          <div className="artist">
            <div className="img22">
           <img src={data.imageURL}  alt=""/>
         </div>
           <div className="portcontent">
             <h1>{data.name}</h1>
             <h2>{data.displayText}</h2>
            <RiPlayMiniFill  className="play-buton"/>
          </div>
        </div>
        </SwiperSlide>
        
        )
       })}
       
      </Swiper>
   </div>

     <div className="swiper2">
     <Swiper
        slidesPerView={3}
        spaceBetween={30}
        Pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
        // Pagination={{ el: null }}
      >
       
       {muarr.map(function (data) {
        return(
         <SwiperSlide>
          
          <div className="artist">
            <div className="img22">
           <img src={data.imageURL}  alt=""/>
         </div>
           <div className="portcontent">
             <h1>{data.name}</h1>
             <h2>{data.displayText}</h2>
            <RiPlayMiniFill  className="play-buton"/>
          </div>
        </div>
        </SwiperSlide>
        
        )
       })}
       
      </Swiper>
     </div>
    </>
  );
};

export default Artist;
