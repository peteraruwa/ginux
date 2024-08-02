import React from 'react';
import Carousel from 'react-grid-carousel';
import { scholarship } from './data';
import Card from './Card';

const Slider = () => {
  return (
    <Carousel cols={4} rows={1} gap={1}>

      {
        scholarship.map((item) => (
          <Carousel.Item>
            <Card key={item.id} image={item.image} duration={item.duration} course={item.course} desc={item.desc} no_of_app={item.no_of_app} total_app={item.total_app} app_fee={item.app_fee} />
          </Carousel.Item>
        ))
      }

    </Carousel>
  )
}

export default Slider 