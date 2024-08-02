import React from 'react';
import './BrandLogo.css';
import AXA from '../../assets/brands/AXA.svg';
import Lenovo from '../../assets/brands/Lenovo.svg';
import Slack from '../../assets/brands/Slack.svg';
import YT from '../../assets/brands/YouTube.svg';
import Amazon from '../../assets/brands/Amazon.svg';
import Google from '../../assets/brands/Google.svg';
import MS from '../../assets/brands/Microsoft.svg';

const BrandLogo = () => {
    return (
        <div className='flex flex-col justify-center items-center h-[153px]'>
            <p className="text-[#717680] font-medium text-md font-['Inter']">Top companies our Instructors work</p>
            <div className='flex items-center justify-around h-[42px]  w-[990px]'>
                <img src={AXA} alt="" />
                <img src={Lenovo} alt="" />
                <img src={Slack} alt="" />
                <img src={YT} alt="" />
                <img src={Amazon} alt="" />
                <img src={Google} alt="" />
                <img src={MS} alt="" />
            </div>

        </div>
    )
}

export default BrandLogo


