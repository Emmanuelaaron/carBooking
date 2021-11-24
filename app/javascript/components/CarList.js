import React, { useState } from 'react';
import PropTypes from "prop-types";
import { Row, Col } from 'react-bootstrap';
import triangleArrowImg from '../Img/triangle-arrow.png';
import Car from './Car';
import HomeAbuttons from './HomeAbuttons';
import HomeBbuttons from './HomeBbuttons';

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
              className="slider"
              style={{transform: `translateX(-${page * 100}%)`, transition: "transform 0.3s ease-out"}}
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
      <HomeAbuttons
        page={page}
        leftfunction={pageLeftBtn}
        rigthfunction={pageRigthBtn}
        carsCount={cars.length}
      />
      <HomeBbuttons
        page={page}
        leftfunction={pageLeftBtn}
        rigthfunction={pageRigthBtn}
        carsCount={cars.length}
      />
    </Row>
  );
}

CarList.propTypes = {
  cars: PropTypes.array
};

export default CarList;
