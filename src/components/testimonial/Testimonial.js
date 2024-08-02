import React from 'react';
import './Testimonial.css';
import Card from './Card';
import { testimonies } from './T_data';

const Testimonial = () => {
    return (
        <div className='h-[585px] bg-[#FFFFFF] py-[80px] px-[41px] flex gap-x-[20px] items-center justify-center'>
            {
                testimonies.map((item) => (
                    <Card key={item.id} name={item.name} job_title={item.job_title} company={item.company} words={item.words} />
                ))
            }

        </div>
    )
}

export default Testimonial

