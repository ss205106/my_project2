import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '../css/Carousel.css'

const Carousel = () => {
   const settings = {
       dots: true,
       infinite: true,
       speed: 500,
       slidesToShow: 1,
       slidesToScroll: 1,
       autoplay: true,
       autoplaySpeed: 2000, // 필요에 따라 조정
       arrows: false,
   };
   return (
    <Slider {...settings}>
        <div className="image-container">   
            <img src="/img/img1.png" alt="Image 1" />
        </div>
        <div className="image-container">
            <img src="/img/img2.png"  alt="Image 2" />
        </div>
        <div className="image-container">
            <img src="/img/img3.png" alt="Image 3" />
        </div>
    </Slider>
);
};
export default Carousel;