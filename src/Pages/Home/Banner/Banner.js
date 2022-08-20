import React, { useState } from 'react';
import { Carousel } from 'react-bootstrap';
import './banner.css'
import banner1 from '../../../images/banner course.jpg'
import banner2 from '../../../images/banner course 2.jpg'

const Banner = () => {

    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
      setIndex(selectedIndex);
    };
    return (
        <Carousel activeIndex={index} onSelect={handleSelect}>
        <Carousel.Item>
          <img
            className="  d-block w-100  "
            src={banner1}
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>Learning Birds</h3>
            <p>Quality learning from Expert Teachers</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="  d-block w-100  "
            src={banner2}
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>Learning Birds</h3>
            <p>Quality learning from Expert Teachers</p>
          </Carousel.Caption>
        </Carousel.Item>
        
      </Carousel>
    );
};

export default Banner;