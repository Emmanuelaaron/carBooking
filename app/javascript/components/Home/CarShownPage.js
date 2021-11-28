import React from "react";
import PropTypes from "prop-types";
import { Row } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import './CarShow.css';
import arrowRigth from '../../Img/arrow-right.png';
import triangleArrow from '../../Img/triangle-arrow.png';


const CarShownPage = (props) => {
  const { car, display, setdiplayCar } = props;
  console.log(car);
  let ans = <></>;
  if (car){
    const { name, description, model, price, id, image_data } = car;
    ans = (
      <div className={"position-absolute p-0 m-0 position-relative bg-white " + ( display ? "show-car" : "hide-car")}>
        <button type="button" className="backBtn" onClick={() => setdiplayCar({ car, display: false })}>
          <img className="Btnicon" src={triangleArrow}/>
        </button>
        <Row className="m-0 h-100 w-100">
          <div className="col-12 col-md-8 d-flex flex-column justify-content-center">
            <img
              className="w-100" src={image_data}
            />
          </div>
          <div className="col-12 col-md-4 text-center d-flex flex-column justify-content-center">
            <h1 className="m-0 fs-1">{model.toUpperCase()}</h1>
            <h2 className="m-0 fs-2 border-bottom text-muted">{name}</h2>
            <q>{description}</q>
            <table className="table table-striped">
              <tbody>
                <tr>
                  <td>Fincance Fee</td>
                  <td>{(price * 0.20) + '$'}</td>
                </tr>
                <tr>
                  <td>Montyl Payments</td>
                  <td>{(((price * 0.2) + price) /48) + '$'}</td>
                </tr>
                <tr>
                  <td>Duration</td>
                  <td>12 month</td>
                </tr>
              </tbody>
            </table>
            <div className="d-flex flex-column p-4 button-container">
              <p className="text-center fs-3">You like it?</p>
              <NavLink to={'/reservation/' + id } className="ReserveBtn">
                Reserve It
                <img className="Btnicon" src={arrowRigth}/>
              </NavLink>
            </div>
          </div>
        </Row>
      </div>
    );
  }
  
  return ans;
};

CarShownPage.propTypes = {
  car: PropTypes.shape({
    name: PropTypes.string,
    description: PropTypes.string,
    image_data: PropTypes.string,
    model: PropTypes.string,
    id: PropTypes.number,
    price: PropTypes.number
  }),
  display: PropTypes.bool,
  setdiplayCar: PropTypes.func
};

export default CarShownPage;
