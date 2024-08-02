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
            <div className='flex flex-wrap  items-center justify-around h-[42px]  w-[414px] lg:w-[990px]'>
                <img src={AXA} alt="" className='w-[43.92px] lg:w-[84px]' />
                <img src={Lenovo} alt="" className='w-[43.92px] lg:w-[84px]' />
                <img src={Slack} alt="" className='w-[43.92px] lg:w-[84px]' />
                <img src={YT} alt="" className='w-[43.92px] lg:w-[84px]' />
                <img src={Amazon} alt="" className='w-[43.92px] lg:w-[84px]' />
                <img src={Google} alt="" className='w-[43.92px] lg:w-[84px]' />
                <img src={MS} alt="" className='w-[43.92px] lg:w-[84px]' />
            </div>

        </div>
    )
}

export default BrandLogo


