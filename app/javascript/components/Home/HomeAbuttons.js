import React from 'react';
import PropTypes from 'prop-types';
import triangleArrowImg from '../../Img/triangle-arrow.png';

const HomeAbuttons = (props) => {
  const {
    page, leftfunction, rigthfunction, carsCount,
  } = props;

  return (
    <>
      <button
        className={`position-absolute top-50 start-0 translate-middle-y ${page === 0 ? 'home-left-disabled' : 'home-left'}`}
        onClick={leftfunction}
        disabled={page === 0}
        type="button"
      >
        <img className="arrowicon" src={triangleArrowImg} alt="icon" />
      </button>
      <button
        className={`position-absolute top-50 end-0 translate-middle-y ${page >= ((carsCount / 3) - 1) ? 'home-rigth-disabled' : 'home-rigth'}`}
        onClick={rigthfunction}
        disabled={page >= ((carsCount / 3) - 1)}
        type="button"
      >
        <img className="arrowicon-inverse" src={triangleArrowImg} alt="icon" />
      </button>
    </>
  );
};

HomeAbuttons.propTypes = {
  page: PropTypes.number.isRequired,
  carsCount: PropTypes.number.isRequired,
  leftfunction: PropTypes.func.isRequired,
  rigthfunction: PropTypes.func.isRequired,
};
export default HomeAbuttons;
