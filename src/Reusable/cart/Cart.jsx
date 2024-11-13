import React from 'react'
import "./cart.css"
import { RiPlayMiniFill } from "react-icons/ri";
import { Swiper, SwiperSlide } from 'swiper/react';
import axios from'axios';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';



const Cart = (props) => {
  console.log(props.Cart);
  let myarray=props.albumarray
  console.log(myarray);

  
  return (
    <div className='mycart'>
      <div className='swipepackage'>
      <Swiper
           slidesPerView={5}
           spaceBetween={30}
           Pagination={{
          clickable: true,
          }}
          modules={[Pagination]}
         className="mySwiper"
        // Pagination={{ el: null }}
      >
          {myarray.map(function (mydata) {
    return(
      <SwiperSlide>
            <div className='card'>
            <div className='card-img'>
               <img src={mydata.img} alt="" />             
             
            </div>
            <button className='playbutton'>
                <RiPlayMiniFill  className="play-icon"/>
                </button>
              <div className='album-title'>
              <h2>{mydata.title}</h2>
                <h2>{mydata.artist}</h2>
              </div>
           </div>
      </SwiperSlide>

          )
        })} 

      </Swiper>

      </div>
      <div className='swipepackage1' >
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
          {myarray.map(function (mydata) {
    return(
      <SwiperSlide>
            <div className='card'>
            <div className='card-img'>
               <img src={mydata.img} alt="" />             
             
            </div>
            <button className='playbutton'>
                <RiPlayMiniFill  className="play-icon"/>
                </button>
              <div className='album-title'>
              <h2>{mydata.title}</h2>
                <h2>{mydata.artist}</h2>
              </div>
           </div>
      </SwiperSlide>

          )
        })} 

      </Swiper>

      </div>

    </div>
  )
}

export default Cart;