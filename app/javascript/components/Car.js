import React from "react";
import PropTypes from "prop-types";

const Car = (props) => {
  const { name, description, model, price } = props.car;
  
  return (
    <p>
      {name}
    </p>
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
