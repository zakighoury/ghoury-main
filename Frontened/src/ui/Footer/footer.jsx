import React from 'react'
import "./Footer.scss"
import Pakistan from "../../assets/Pakistan.png";
import Bangladesh from "../../assets/Bangladesh.png";
import Srilanka from "../../assets/Srilanka.png";
import Myanmar from "../../assets/Myanmar.png";
import Nepal from "../../assets/Nepal.png";

const footer = () => {
  return (
    <>
    <section className="footer">
    <section className="footer_section">
        <div className="footer1">
        <ul>
        <li><h6>Customer Care</h6></li>
         <li><a>Help Center</a></li>
         <li><a>How to Buy</a></li>
         <li><a>Corporate & Bulk Purchasing</a></li>
         <li><a>Returns & Refunds</a></li>
         <li><a>Ghoury Shop</a></li>
         <li><a>Contact Us</a></li>
         <li><a>Purchase Protection</a></li>
         <li><a>Ghoury Pick up Points</a></li>
         <ul className='footer2-child'>
         <li><h6>Make Money with us</h6></li>
         <li><a>Returns & Refunds</a></li>
         <li><a>Ghoury Shop</a></li>
         <li><a>Contact Us</a></li>
        
         </ul>
        </ul>
        </div>
<div className="footer2">
        <ul>
         <li><h6> Ghoury</h6></li>
         <li><a>About Us</a></li>
         <li><a>Digital Payments</a></li>
         <li><a>Ghoury Donates</a></li>
         <li><a>Ghoury Blog</a></li>
         <li><a>Terms & Conditions</a></li>
         <li><a>Privacy Policy</a></li>
         <li><a>NTN Number : 4012118-6</a></li>
         <li><a>STRN Number : 1700401211818</a></li>
         <li><a>Online Shopping App</a></li>
         <li><a>Online Grocery Shopping</a></li>
         <li><a>Ghoury Exclusive</a></li>
</ul>
</div>
<div className="footer3">
<ul>
<li><h6>Follow Us</h6></li>
  <li><a>Ghoury International</a></li>
  <ul>
  <li>
    <a href="your_link_for_Pakistan">
      <img src={Pakistan} alt="Pakistan" />
      Pakistan
    </a>
  </li>
  <li>
    <a href="your_link_for_Bangladesh">
      <img src={Bangladesh} alt="Bangladesh" />
      Bangladesh
    </a>
  </li>
  <li>
    <a href="your_link_for_Sri_Lanka">
      <img src={Srilanka} alt="Sri Lanka" />
      Sri Lanka
    </a>
  </li>
  <li>
    <a href="your_link_for_Myanmar">
      <img src={Myanmar} alt="Myanmar" />
      Myanmar
    </a>
  </li>
  <li>
    <a href="your_link_for_Nepal">
      <img src={Nepal} alt="Nepal" />
      Nepal
    </a>
  </li>
</ul>

</ul>
</div>
<div className="footer4">
<ul>
<li><h6>Download App</h6></li>
  <li><a>Download Ghoury App</a></li>
  <li><a>Download Ghoury Business App</a></li>
</ul>

</div>

      </section>
      </section>
    </>
  )
}

export default footer