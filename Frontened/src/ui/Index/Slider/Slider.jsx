import React from 'react'
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import Carousal from "../../../assets/pic.jpg";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "../Main.scss";
import "@fortawesome/fontawesome-free/css/all.css";


const Slider = () => {
  return (
    <section className="content">
    <section className="left">
      <a href="">
        <i className="fas fa-shopping-basket"></i> Groceries & Pets
      </a>
      <br></br>
      <a href="">
        <i className="fas fa-heart"></i> Health & Beauty
      </a>
      <br></br>
      <a href="">
        <i className="fas fa-male"></i> Men's Fashion
      </a>
      <br></br>
      <a href="">
        <i className="fas fa-female"></i> Women's Fashion
      </a>
      <br></br>
      <a href="">
        <i className="fas fa-baby"></i> Mother & Baby
      </a>
      <br></br>
      <a href="">
        <i className="fas fa-home"></i> Home & Lifestyle
      </a>
      <br></br>
      <a href="">
        <i className="fas fa-laptop"></i> Electronics Devices
      </a>
      <br></br>
      <a href="">
        <i className="fas fa-mobile-alt"></i> Electronics Accessories
      </a>
      <br></br>
      <a href="">
        <i className="fas fa-tv"></i> TV & Home Appliances
      </a>
      <br></br>
      <a href="">
        <i className="fas fa-bicycle"></i> Sports & Outdoor
      </a>
      <br></br>
      <a href="">
        <i className="level-1-icon ic-cat-FashionAccess \uE73F"></i>{" "}
        Watches, Bags & Jewellery
      </a>
      <br></br>
      <a href="">
        <i className="fas fa-car"></i> Automotive & Motorbike
      </a>
      <br></br>
    </section>
    <section className="right">
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
        style={{
          "--swiper-navigation-color": "#FFFFFF",
          "--swiper-pagination-color": "#FFFFFF",
          "--swiper-navigation-size": "30px",
          // "z-index": "-1",
         }}
      >
        <SwiperSlide>
          <img src={Carousal} alt="Carousal Image 1" />
          {/* <p>Description for Image 1</p> */}
        </SwiperSlide>
        <SwiperSlide>
          <img src={Carousal} alt="Carousal Image 2" />
          {/* <p>Description for Image 2</p> */}
        </SwiperSlide>
        <SwiperSlide>
          <img src={Carousal} alt="Carousal Image 3" />
          {/* <p>Description for Image 3</p> */}
        </SwiperSlide>
        <SwiperSlide>
          <img src={Carousal} alt="Carousal Image 4" />
          {/* <p>Description for Image 4</p> */}
        </SwiperSlide>
        <SwiperSlide>
          <img src={Carousal} alt="Carousal Image 5" />
          {/* <p>Description for Image 5</p> */}
        </SwiperSlide>
        <SwiperSlide>
          <img src={Carousal} alt="Carousal Image 6" />
          {/* <p>Description for Image 6</p> */}
        </SwiperSlide>
        <SwiperSlide>
          <img src={Carousal} alt="Carousal Image 7" />
          {/* <p>Description for Image 7</p> */}
        </SwiperSlide>
        <SwiperSlide>
          <img src={Carousal} alt="Carousal Image 8" />
          {/* <p>Description for Image 8</p> */}
        </SwiperSlide>
        <SwiperSlide>
          <img src={Carousal} alt="Slider Image 9" />
          {/* <p>Description for Image 9</p> */}
        </SwiperSlide>
      </Swiper>
    </section>
  </section>
  )
}

export default Slider