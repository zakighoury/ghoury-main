import React from "react";
import Profile from "../assets/profile.png";
// import { useNavigate } from "react-router-dom";

import {
  FaUser,
  FaShoppingCart,
  FaGlobe,
  FaFemale,
  FaKeyboard,
  FaShippingFast,
  FaCar,
  FaDollarSign,
  FaUndo,
  FaShieldAlt,
} from "react-icons/fa";
import { Menu, Dropdown } from "antd";
import { Link } from "react-router-dom";

const header = () => {
  // const navigate = useNavigate();
  
  
  const helpMenu = (
    <Menu>
      <Menu.Item key="helpCenter">
        <FaFemale /> Help Center
      </Menu.Item>
      <Menu.Item key="chatWithUs">
        <FaKeyboard /> Chat with Us
      </Menu.Item>
      <Menu.Item key="order">
        <FaShippingFast /> Order
      </Menu.Item>
      <Menu.Item key="shipping">
        <FaCar /> Shipping & Delivery
      </Menu.Item>
      <Menu.Item key="payment">
        <FaDollarSign /> Payment
      </Menu.Item>
      <Menu.Item key="returnsRefunds">
        <FaUndo /> Returns & Refunds
      </Menu.Item>
      <Menu.Item key="purchaseProtection">
        <FaShieldAlt /> Purchase Protection
      </Menu.Item>
    </Menu>
  );
  return (
    <>
      <section className="combined">
        <section className="Header">
          <div className="first">
            <a href="">Become a Seller</a>
            <a href=""> Affiliate Program</a>
            <Dropdown overlay={helpMenu} placement="bottomLeft">
              <a href="#">Help & Support</a>
            </Dropdown>{" "}
            <a href=""> Logistics Partner</a>
          </div>
          <div className="img_text">save more an app</div>
        </section>
        <section className="second">
          <div className="logo">
            <img className="img" src={Profile}></img>
          </div>
          <div className="search">
            <input
              type="text"
              placeholder="  Search in  Ghoury"
              className="search_text"
            ></input>
          </div>
          <div className="cart">
            <div className="login ">
              <Link className="a" to="/login">
                <FaUser /> Login &nbsp; |
              </Link>
            </div>
            <div className="signup">
              <Link className="a" to="/signup">
                SignUp
              </Link>
            </div>
            <div className="lang">
              
                <a className="a" >
                    <FaGlobe />&nbsp;EN&nbsp;
                </a>
            </div>
            <div className="shop">
              <Link className="a" to="/shop">
                <FaShoppingCart />
              </Link>
            </div>
          </div>
        </section>
      </section>
    </>
  );
};

export default header;
