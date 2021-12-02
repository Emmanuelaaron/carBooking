import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Row, Col } from 'react-bootstrap';
import Car from './Car';
import HomeAbuttons from './HomeAbuttons';
import HomeBbuttons from './HomeBbuttons';
import PageIndicator from './PageIndicator';

const CarList = (props) => {
  const { cars, setdiplayCar } = props;
  const [page, setPage] = useState(0);
  const [smallViewPage, setsmallViewPage] = useState(0);

  const pageLeftBtn = () => {
    setPage(page - 1);
  };

  const pageRigthBtn = () => {
    setPage(page + 1);
  };

  const leftsmallViewPage = () => {
    setsmallViewPage(smallViewPage - 1);
  };

  const rigthsmallViewPage = () => {
    setsmallViewPage(smallViewPage + 1);
  };

  return (
    <div className="m-0 p-0 position-relative  car-list-container">
      <div className="w-100 text-center">
          <h2>LATEST MODELS</h2>
          <p className="text-muted">Please select a model</p>
          <PageIndicator page={page} smallViewPage={smallViewPage} cars={cars} />
        </div>
        <div className="d-none d-md-block slider-container w-100 border-red">
          <div
            className="slider car-list"
            style={{ transform: `translateX(-${page * 100}%)`, transition: 'transform 0.3s ease-out' }}
            data-testid="car-container"
          >
            {
              cars.map((car) => (
                <Car
                  key={car.id}
                  car={car}
                  setdiplayCar={setdiplayCar}
                />
              ))
            }
          </div>
        </div>

        <div className="d-md-none slider-container md-car-container-a border-red w-100">
          <div
            className="slider md-car-container-b"
            style={{ transform: `translateX(-${smallViewPage * 100}%)`, transition: 'transform 0.3s ease-out' }}
          >
            {
              cars.map((car) => (
                <Car
                  key={car.id}
                  car={car}
                  setdiplayCar={setdiplayCar}
                />
              ))
            }
          </div>
        </div>
      <HomeAbuttons
        page={page}
        leftfunction={pageLeftBtn}
        rigthfunction={pageRigthBtn}
        carsCount={cars.length}
      />
      <HomeBbuttons
        page={smallViewPage}
        leftfunction={leftsmallViewPage}
        rigthfunction={rigthsmallViewPage}
        carsCount={cars.length}
      />
    </div>
  );
};

CarList.propTypes = {
  cars: PropTypes.arrayOf(PropTypes.object).isRequired,
  setdiplayCar: PropTypes.func.isRequired,
};

export default CarList;
