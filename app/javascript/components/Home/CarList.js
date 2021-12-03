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
  console.log(((page % 300) === 0), (page + (page % 300)), (cars.length / 3));
  const pageLeftBtn = () => {
    let ans;
    if ((page % 300) === 0){
      ans = page - 300;
    } else {
      ans = page - (page % 300);
    }
    setPage(ans);
  };

  const pageRigthBtn = () => {
    let ans;
    if ((page % 300) === 0){
      ans = page + 300;
    } else {
      ans = page + (300 - (page % 300));
    }
    setPage(ans);
  };

  const leftsmallViewPage = () => {
    setPage(page - 100);
  };

  const rigthsmallViewPage = () => {
    setPage(page + 100);
  };

  return (
    <div className="m-0 p-0 position-relative car-list-container">
      <div className="w-100 text-center">
        <h2>LATEST MODELS</h2>
        <p className="text-muted">Please select a model</p>
        <PageIndicator page={page} smallViewPage={smallViewPage} cars={cars} />
      </div>
      <div className="slider-container" data-testid="car-container">
        {
          cars.map((car) => (
            <Car
                car={car}
                setdiplayCar={setdiplayCar}
                page={(page)}
                key={car.id}
              />
          ))
        }
      </div>
      <HomeAbuttons
        page={page}
        leftfunction={pageLeftBtn}
        rigthfunction={pageRigthBtn}
        carsCount={cars.length}
      />
      <HomeBbuttons
        page={page}
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
