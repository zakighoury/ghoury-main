// Dropdown.js
import React, { useState } from 'react';
import { FaFemale } from 'react-icons/fa';
import {Dropdown} from "antd"

const Dropdown = () => {
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  return (
    <div className="dropdown-container">
      <a className="dropdown-link" onClick={toggleDropdown}>
        <FaFemale className="fa-icon" />
        Help & Support
      </a>
      {isDropdownOpen && (
        <div className="dropdown-options">
          <a className="dropdown-option" href="#">
            <FaFemale className="fa-icon" /> Help Center
          </a>
          <a className="dropdown-option" href="#">
            Chat with Us
          </a>
          <a className="dropdown-option" href="#">
            Order
          </a>
          <a className="dropdown-option" href="#">
            Shipping & Delivery
          </a>
          <a className="dropdown-option" href="#">
            Payment
          </a>
          <a className="dropdown-option" href="#">
            Returns & Refunds
          </a>
          <a className="dropdown-option" href="#">
            Purchase Protection
          </a>
        </div>
      )}
    </div>
  );
};

export default Dropdown;
