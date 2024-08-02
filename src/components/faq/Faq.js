import React from 'react';
import './Faq.css';
import { questions } from './data.js';
import Question from './Question';
import ImgFaq from '../../assets/img-faq.svg';

const Faq = () => {
    return (
        <div className='w-full h-[960px] bg-[#F8F8F8]'>
            <p className='text-center text-[40px] py-[80px] font-semibold font-["Inter"]'>Frequently asked questions</p>
            <div className='flex justify-center items-center'>

                <div className='w-[1280px] flex justify-between items-start'>
                    <div className='flex flex-col gap-y-[24px]'>
                        {
                            questions.map((question) => (
                                <Question key={question.id} title={question.title} answer={question.answer} />
                            ))
                        }
                    </div>
                    <img src={ImgFaq} alt="" className='' />
                </div>
            </div>
        </div>
    )
}

export default Faq

// 