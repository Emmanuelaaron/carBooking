import React from "react";
import PropTypes from "prop-types";
import { NavLink } from 'react-router-dom';
import facebookImg from '../../Img/facebook.png';
import twitterImg from '../../Img/twitter.png';
import googleplusImg from '../../Img/googleplus.png';

const Car = (props) => {
  const { name, description, model, id } = props.car;
  
  return (
    <div
      className="col-12 col-md-4"
    >
      <div className="p-3">
        <NavLink  to={`/car/${id}`}>
          <img
            className="w-100" src="https://media.istockphoto.com/photos/illustration-of-generic-sports-coupe-car-on-white-picture-id1003904064?k=20&m=1003904064&s=612x612&w=0&h=qjMmK0xlPn7GLOefECHBNI0VWccVlLK7xo8vuIBw5uM="
          />
        </NavLink>
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
    id: PropTypes.number.isRequired,
  }).isRequired,
};
export default Car;
