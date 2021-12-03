import React from 'react';
import PropTypes from 'prop-types';
import triangleArrowImg from '../../Img/triangle-arrow.png';

const HomeBbuttons = (props) => {
  const {
    page, leftfunction, rigthfunction, carsCount,
  } = props;

  return (
    <>
      <button
        className={`position-absolute top-50 end-0 translate-middle-y ${(page/100) >= (carsCount - 1) ? 'phone-rigth-disabled' : 'phone-rigth'}`}
        onClick={rigthfunction}
        disabled={(page/100) >= (carsCount - 1)}
        type="button"
      >
        <img className="arrowicon-inverse" src={triangleArrowImg} alt="icon" />
      </button>

      <button
        className={`position-absolute top-50 start-0 translate-middle-y ${page === 0 ? 'phone-left-disabled' : 'phone-left'}`}
        onClick={leftfunction}
        disabled={page === 0}
        type="button"
      >
        <img className="arrowicon" src={triangleArrowImg} alt="icon" />
      </button>
    </>
  );
};

HomeBbuttons.propTypes = {
  page: PropTypes.number.isRequired,
  carsCount: PropTypes.number.isRequired,
  leftfunction: PropTypes.func.isRequired,
  rigthfunction: PropTypes.func.isRequired,
};
export default HomeBbuttons;
