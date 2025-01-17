import React from 'react';
import './NavBar.css';
import Gi_Logo from "../../assets/ginux-logo.svg";
import { GiHamburgerMenu } from "react-icons/gi";

const NavBar = () => {
    return (
        <div className='flex  items-center justify-center w-full h-[64px]'>
            <div className="flex items-center justify-between w-full lg:w-[1348px] h-[43px] px-[20px] lg:px-0">
                <GiHamburgerMenu className='lg:hidden text-[40px]' />
                <img src={Gi_Logo} alt="" />
                <ul className='hidden gap-x-[28px] lg:flex'>
                    <li><a href="#">Home</a></li>
                    <li><a href="#about">About us</a></li>
                    <li><a href="#scholarship">Scholarships</a></li>
                    <li><a href="#faq">Faq</a></li>
                </ul>
                <a href="#join" className='rounded-[6px] bg-[#664DFF] text-white py-[13px] px-[24px]'>Join A Channel</a>
            </div>
        </div>
    )
}

export default NavBar