import React from 'react';
import PropTypes from 'prop-types';

const PageIndicator = (props) => {
  const { page, cars, smallViewPage } = props;

  return (
    <>
      <div className="d-md-none d-flex flex-row justify-content-center align-items-center">
        {
          cars.map((car, index) => (<span key={car.id} className={((smallViewPage === index) ? 'dotActive' : 'dotIndicator')} />))
        }
      </div>
      <div className="d-none d-md-flex flex-row justify-content-center align-items-center">
        {
          cars.filter((val, index) => (index <= ((cars.length - 1) / 3))).map((car, index) => (<span key={car.id} className={((page === index) ? 'dotActive' : 'dotIndicator')} />))
        }
      </div>
    </>
  );
};

PageIndicator.propTypes = {
  page: PropTypes.number.isRequired,
  smallViewPage: PropTypes.number.isRequired,
  cars: PropTypes.arrayOf(PropTypes.object).isRequired,
};
export default PageIndicator;
