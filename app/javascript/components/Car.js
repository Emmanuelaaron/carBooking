import React from "react";
import PropTypes from "prop-types";

const Car = (props) => {
  const { name, description, model, year, price } = props;
  
  return (
    <React.Fragment>
      {name}
    </React.Fragment>
  );
}

Car.propTypes = {
  car: PropTypes.array
};
export default Car;
