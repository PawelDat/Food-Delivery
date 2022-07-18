import React from 'react';

import Slider from "react-slick";

import ava1 from "../../assets/images/icons/ava-1.png"
import ava2 from "../../assets/images/icons/ava-2.png"
import ava3 from "../../assets/images/icons/ava-3.png"
import ava4 from "../../assets/images/icons/ava-4.png"

const ReviewSlider = () => {
  const settings = {
    dots: true,
    autoplay: true,
    infinite: true,
    speed: 1000,
    autoplaySpeed: 3000,
    swipeToSlide: true,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <Slider {...settings}>
      <div>
        <p className="review__text">
          "Very Quick delivery"
        </p>
        <div className=" slider__content d-flex align-items-center gap-3 ">
          <img src={ava1} alt="avatar" className=" rounded" />
          <h6>Jhon</h6>
        </div>
      </div>
      <div>
        <p className="review__text">
          "Great Prices and Great Food!"
        </p>
        <div className="slider__content d-flex align-items-center gap-3 ">
          <img src={ava2} alt="avatar" className=" rounded" />
          <h6>Camila</h6>
        </div>
      </div>
      <div>
        <p className="review__text">
          "The best web to order food"
        </p>
        <div className="slider__content d-flex align-items-center gap-3 ">
          <img src={ava3} alt="avatar" className=" rounded" />
          <h6>Steven</h6>
        </div>
      </div>
      <div>
        <p className="review__text">
          "Recomend to any one that is tired of cooking"
        </p>
        <div className="slider__content d-flex align-items-center gap-3 ">
          <img src={ava4} alt="avatar" className=" rounded" />
          <h6>Margaret</h6>
        </div>
      </div>
    </Slider>
  );
};


export default ReviewSlider