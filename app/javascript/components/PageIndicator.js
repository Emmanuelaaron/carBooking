import React from "react"
import PropTypes from "prop-types"

const PageIndicator = (props) => {

  const { page, cars, Ppage} = props;

  return (
    <>
      <div className="d-md-none d-flex flex-row justify-content-center align-items-center">
        {
          cars.map((car, index) => {
            return (<span key={car.id} className={((Ppage === index) ? "dotActive" : 'dotIndicator')} />);
          })
        }
      </div>
      <div className="d-none d-md-flex flex-row justify-content-center align-items-center">
        {
          cars.filter((val, index) => (index <= ((cars.length - 1) / 3))).map((car, index) => {
            return (<span key={car.id} className={((page === index) ? "dotActive" : 'dotIndicator')} />);
          })
        }
      </div>
    </>
  );
}

PageIndicator.propTypes = {
  page: PropTypes.number,
  Ppage: PropTypes.number,
  cars: PropTypes.array
};
export default PageIndicator
