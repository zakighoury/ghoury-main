import React from "react";
import Slider from "../assets/pic.jpg";
import Download from "../assets/img.png";
import First from "../assets/mm.jpg";
import Banner from "../assets/banner.png";
import Shirt from "../assets/shirt.jpg";
import Camera from "../assets/camera.png";
import Skin from "../assets/skinprod.jpg";
import Mart from "../assets/mart.png";
import Home from "../assets/home&decor.jpg";
import HomeApp from "../assets/home-appliance.jpg";
import free from "../assets/free-delivery.png";
import low from "../assets/low price.jpg";
import shop from "../assets/shop-now.jpg";
import New from "../assets/new-on.jpg";
import Flash from "../assets/flash-sale.jpg";
import "@fortawesome/fontawesome-free/css/all.css";
import { Link } from "react-router-dom";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
const main = () => {
  return (
    <>
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
             }}
          >
            <SwiperSlide>
              <img src={Slider} alt="Slider Image 1" />
              {/* <p>Description for Image 1</p> */}
            </SwiperSlide>
            <SwiperSlide>
              <img src={Slider} alt="Slider Image 2" />
              {/* <p>Description for Image 2</p> */}
            </SwiperSlide>
            <SwiperSlide>
              <img src={Slider} alt="Slider Image 3" />
              {/* <p>Description for Image 3</p> */}
            </SwiperSlide>
            <SwiperSlide>
              <img src={Slider} alt="Slider Image 4" />
              {/* <p>Description for Image 4</p> */}
            </SwiperSlide>
            <SwiperSlide>
              <img src={Slider} alt="Slider Image 5" />
              {/* <p>Description for Image 5</p> */}
            </SwiperSlide>
            <SwiperSlide>
              <img src={Slider} alt="Slider Image 6" />
              {/* <p>Description for Image 6</p> */}
            </SwiperSlide>
            <SwiperSlide>
              <img src={Slider} alt="Slider Image 7" />
              {/* <p>Description for Image 7</p> */}
            </SwiperSlide>
            <SwiperSlide>
              <img src={Slider} alt="Slider Image 8" />
              {/* <p>Description for Image 8</p> */}
            </SwiperSlide>
            <SwiperSlide>
              <img src={Slider} alt="Slider Image 9" />
              {/* <p>Description for Image 9</p> */}
            </SwiperSlide>
          </Swiper>
        </section>
      </section>
      <section className="middle">
        <div className="middle_img">
          <img src={Banner} />
          <a className="middle_btn">
            Add to Cart&nbsp;
            <i class="fa fa-chevron-right" aria-hidden="true"></i>
          </a>
        </div>

        <div className="middle_head">
          <li>
            <i class="fas fa-shield-alt"></i>&nbsp;
            <a href="">Safe Payments</a>
            <span className="word">|</span>
          </li>
          <li>
            <i class="fas fa-truck"></i>&nbsp;
            <a href="">Nationwide Delivery</a>
            <span className="word">|</span>
          </li>
          <li>
            <i class="fas fa-undo"></i>&nbsp;
            <a href="">Free & Easy Returns</a>
            <span className="word">|</span>
          </li>
          <li>
            <i class="fas fa-tag"></i>&nbsp;
            <a href="">Best Price Guaranteed</a>
            <span className="word">|</span>
          </li>
          <li>
            <i class="fas fa-check-circle"></i>&nbsp;
            <a href="">100% Authentic Products</a>
            <span className="word">|</span>
          </li>
          <li>
            <i class="fab fa-glide-g"></i>&nbsp;
            <a href="">Daraz Verified</a>
            <span className="word">
              <i class="fa fa-chevron-right" aria-hidden="true"></i>{" "}
            </span>
          </li>
        </div>

        <div className="part_one">
          <div className="part_one_top">
            <img src={Mart} />
            <Link className="a" to="/mart">
              Mart
            </Link>
          </div>
          <div className="part_one_top">
            <img src={Shirt} />
            <Link className="a" to="/fashion">
              Fashion
            </Link>
          </div>
          <div className="part_one_top">
            <img src={Skin} />
            <Link className="a" to="/beauty">
              Beauty
            </Link>
          </div>
          <div className="part_one_top">
            <img src={Home} />
            <Link className="a" to="/home">
              Home & Decor
            </Link>
          </div>
          <div className="part_one_top">
            <img src={HomeApp} alt="First 1" />
            <Link className="a" to="/homeapp">
              Home Appliance
            </Link>
          </div>
          <div className="part_one_top">
            <img src={free} />
            <Link className="a" to="/free_delivery">
              Free Delivery
            </Link>
          </div>
          <div className="part_one_top">
            <img src={shop} />
            <a href="">Shop Now</a>
          </div>
          <div className="part_one_top">
            <img src={low} />
            <a href="">Everyday Low price</a>
          </div>
          <div className="part_one_top">
            <img src={New} />
            <a href="">New on Daraz</a>
          </div>
          <div className="part_one_top">
            <img src={Flash} />
            <a href="">Flash Sale</a>
          </div>
        </div>
      </section>
      <h1 className="fash">Flash Sale</h1>

      <section className="sell">
        <div className="sell_one">
          <div className="sell_texts"></div>
          <div className="sell_detail">
            <p className="on_sell">On Sell Now</p>

            <p>
              Ending In <span className="count">4</span>
              <span className="count1">52</span>
              <span className="count2">01</span>
            </p>
            <a href="" className="show">
              Show More
            </a>
          </div>
        </div>
        <div className="light"></div>
        <section className="flash">
          <div className="just_img">
            <img src={First}></img>
            <p>
              Air buds Two Max Wireless Earbuds TWS Earbud, Wireless Earphones
              Bluetooth Ear buds
            </p>
            <p>
              Rs.00.00<span></span>
            </p>
          </div>
          <div className="just_img">
            <img src={First}></img>
            <p>
              Air buds Two Max Wireless Earbuds TWS Earbud, Wireless Earphones
              Bluetooth Ear buds
            </p>
            <p>
              Rs.00.00<span></span>
            </p>
          </div>
          <div className="just_img">
            <img src={First}></img>
            <p>
              Air buds Two Max Wireless Earbuds TWS Earbud, Wireless Earphones
              Bluetooth Ear buds
            </p>
            <p>
              Rs.00.00<span></span>
            </p>
          </div>
          <div className="just_img">
            <img src={First}></img>
            <p>
              Air buds Two Max Wireless Earbuds TWS Earbud, Wireless Earphones
              Bluetooth Ear buds
            </p>
            <p>
              Rs.00.00<span></span>
            </p>
          </div>
          <div className="just_img">
            <img src={First}></img>
            <p>
              Air buds Two Max Wireless Earbuds TWS Earbud, Wireless Earphones
              Bluetooth Ear buds
            </p>
            <p>
              Rs.00.00<span></span>
            </p>
          </div>
        </section>
      </section>
      {/* categorie section */}
      <section className="categories">
        <h1 className="cate">Categories</h1>
        <section className="cat_one">
          <div className="cat_img">
            <img src={First}></img>
            <h5>sample text</h5>
          </div>
          <div className="cat_img">
            <img src={First}></img>
            <h5>sample text</h5>
          </div>
          <div className="cat_img">
            <img src={First}></img>
            <h5>sample text</h5>
          </div>
          <div className="cat_img">
            <img src={First}></img>
            <h5>sample text</h5>
          </div>
          <div className="cat_img">
            <img src={First}></img>
            <h5>sample text</h5>
          </div>
        </section>
        <section className="cat_two">
          <div className="cat_img">
            <img src={First}></img>
            <h5>sample text</h5>
          </div>
          <div className="cat_img">
            <img src={First}></img>
            <h5>sample text</h5>
          </div>
          <div className="cat_img">
            <img src={First}></img>
            <h5>sample text</h5>
          </div>
          <div className="cat_img">
            <img src={First}></img>
            <h5>sample text</h5>
          </div>
          <div className="cat_img">
            <img src={First}></img>
            <h5>sample text</h5>
          </div>
        </section>
      </section>

      <h1 className="just">Just For you</h1>

      <section className="sell">
        <section className="just_for">
          <div className="just_img">
            <img src={First}></img>
            <p>
              Air buds Two Max Wireless Earbuds TWS Earbud, Wireless Earphones
              Bluetooth Ear buds
            </p>
            <p>
              Rs.00.00<span></span>
            </p>
          </div>
          <div className="just_img">
            <img src={First}></img>
            <p>
              Air buds Two Max Wireless Earbuds TWS Earbud, Wireless Earphones
              Bluetooth Ear buds
            </p>
            <p>
              Rs.00.00<span></span>
            </p>
          </div>
          <div className="just_img">
            <img src={First}></img>
            <p>
              Air buds Two Max Wireless Earbuds TWS Earbud, Wireless Earphones
              Bluetooth Ear buds
            </p>
            <p>
              Rs.00.00<span></span>
            </p>
          </div>
          <div className="just_img">
            <img src={First}></img>
            <p>
              Air buds Two Max Wireless Earbuds TWS Earbud, Wireless Earphones
              Bluetooth Ear buds
            </p>
            <p>
              Rs.00.00<span></span>
            </p>
          </div>
          <div className="just_img">
            <img src={First}></img>
            <p>
              Air buds Two Max Wireless Earbuds TWS Earbud, Wireless Earphones
              Bluetooth Ear buds
            </p>
            <p>
              Rs.00.00<span></span>
            </p>
          </div>
        </section>
        <section className="just_for">
          <div className="just_img">
            <img src={First}></img>
            <p>
              Air buds Two Max Wireless Earbuds TWS Earbud, Wireless Earphones
              Bluetooth Ear buds
            </p>
            <p>
              Rs.00.00<span></span>
            </p>
          </div>
          <div className="just_img">
            <img src={First}></img>
            <p>
              Air buds Two Max Wireless Earbuds TWS Earbud, Wireless Earphones
              Bluetooth Ear buds
            </p>
            <p>
              Rs.00.00<span></span>
            </p>
          </div>
          <div className="just_img">
            <img src={First}></img>
            <p>
              Air buds Two Max Wireless Earbuds TWS Earbud, Wireless Earphones
              Bluetooth Ear buds
            </p>
            <p>
              Rs.00.00<span></span>
            </p>
          </div>
          <div className="just_img">
            <img src={First}></img>
            <p>
              Air buds Two Max Wireless Earbuds TWS Earbud, Wireless Earphones
              Bluetooth Ear buds
            </p>
            <p>
              Rs.00.00<span></span>
            </p>
          </div>
          <div className="just_img">
            <img src={First}></img>
            <p>
              Air buds Two Max Wireless Earbuds TWS Earbud, Wireless Earphones
              Bluetooth Ear buds
            </p>
            <p>
              Rs.00.00<span></span>
            </p>
          </div>
        </section>
      </section>
      <div className="load_more">
        <a className="load">Load More</a>
      </div>
    </>
  );
};

export default main;
