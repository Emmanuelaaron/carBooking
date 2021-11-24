import React from "react";
import PropTypes from "prop-types";
import triangleArrowImg from '../Img/triangle-arrow.png';

const HomeBbuttons = (props) => {

  const { page, leftfunction, rigthfunction, carsCount } = props;

  return (
    <>
      <button
        className={"position-absolute top-50 end-0 translate-middle-y " + ( page >= (carsCount - 1) ? "phone-rigth-disabled" : "phone-rigth")}
        onClick={rigthfunction}
        disabled={ page >= (carsCount - 1) ? true : false }
      > 
        <img className="arrowicon-inverse" src={triangleArrowImg}/>
      </button>

      <button
        className={"position-absolute top-50 start-0 translate-middle-y " + (page === 0 ? "phone-left-disabled" : "phone-left")}
        onClick={leftfunction} disabled={ page === 0 ? true : false}
      >
        <img className="arrowicon" src={triangleArrowImg}/>
      </button>
    </>
  );
}

HomeBbuttons.propTypes = {
  page: PropTypes.string,
  carsCount: PropTypes.number,
  leftfunction: PropTypes.func,
  rigthfunction: PropTypes.func
};
export default HomeBbuttons
