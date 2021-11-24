import React, { useState } from 'react';
import PropTypes from "prop-types";
import { Row, Col } from 'react-bootstrap';
import triangleArrowImg from '../Img/triangle-arrow.png';
import Car from './Car';

const CarList = (props) => {
  const { cars } = props;
  const [page, setPage] = useState(0);

  const pageLeftBtn = () => {
    setPage(page - 1);
  };

  const pageRigthBtn = () => {
    setPage(page + 1);
  };

  return (
    <Row className="m-0 p-0 h-100 position-relative">
      <Col md="12" className="flex-grow">
        <div className="d-flex flex-column justify-content-center h-100">
          <div className="w-100 text-center">
            <h2>LATEST MODELS</h2>
            <p className="text-muted">Please select a model</p>
          </div>
          <div className="slider-container">
            <div
              className="d-flex"
              style={{transform: `translateX(-${page * 1311}px)`, transition: "transform 0.3s ease-out"}}
            >
              {
                cars.map((car) => {
                  return <Car
                    key={car.id}
                    car={car}
                  />;
                })
              }
            </div>
          </div>
        </div>
      </Col>
      <button
        className={"d-none d-md-block position-md-absolute top-50 start-0 translate-middle-y " + (page === 0 ? "home-left-disabled" : "home-left")}
        onClick={pageLeftBtn} disabled={ page === 0 ? true : false}
      >
            <img className="arrowicon" src={triangleArrowImg}/>
      </button>
      <button
        className={"position-absolute top-50 end-0 translate-middle-y " + (page === (cars.length/3) -1 ? "home-rigth-disabled" : "home-rigth")}
        onClick={pageRigthBtn} disabled={ page === (cars.length/3) -1 ? true : false }
      >
            <img className="arrowicon-inverse" src={triangleArrowImg}/>
      </button>
    </Row>
  );
}

CarList.propTypes = {
  cars: PropTypes.array
};

export default CarList;
