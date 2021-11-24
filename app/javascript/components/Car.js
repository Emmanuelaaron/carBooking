import React from "react";
import PropTypes from "prop-types";
import facebookImg from '../Img/facebook.png';
import twitterImg from '../Img/twitter.png';
import googleplusImg from '../Img/googleplus.png';

const Car = (props) => {
  const { name, description, model, price } = props.car;
  
  return (
    <div
      className="col-12 col-md-4"
    >
      <div className="p-3">
        <img
          className="w-100" src="https://glimageurl.golocall.com/golocal-post/image/747905_fusionplus_1501151964.jpeg"
        />
      </div>
      <p className="fs-3 text-center fw-3 m-0">{model.toUpperCase()}</p>
      <p className="text-center text-muted m-0">{name}</p>
      <p className="text-center text-muted m-0">{description}</p>
      <div className="d-flex flex-row justify-content-center align-items-center">
        <a href="#" target="_blank"><img className="car-icons" src={twitterImg} /></a>
        <a href="#" target="_blank"><img className="car-icons" src={facebookImg} /></a>
        <a href="#" target="_blank"><img className="car-icons" src={googleplusImg} /></a>
      </div>
    </div>
  );
}

Car.propTypes = {
  car: PropTypes.shape({
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    model: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
  }).isRequired,
};
export default Car;
