import React from 'react';
import './Navbar.css'
import logo from '../../../images/Y-S-F-removebg-preview.png'
const Navbar = () => {
    return (
        <div>
            <div class="navbar">
                <div class="nav-logo col-2">
                    <img src={logo} alt="nav logo" />
                </div>
                <div class="nav-heading col-4">
                    <h1>YOUNG STAR</h1>
                </div>
                <div class="navbar-menu col-6">
                    <a href="/home">Home</a>
                    <a href="service">Service</a>
                    <a href="mission">Mission</a>
                    <a href="aboutus">About Us</a>
                    <a href="/contact">Contact</a>
                </div>
            </div>
        </div>
    );
};

export default Navbar;