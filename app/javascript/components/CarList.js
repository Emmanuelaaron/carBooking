import React, { useState } from 'react';
import PropTypes from "prop-types";
import { Row, Col } from 'react-bootstrap';
import triangleArrowImg from '../Img/triangle-arrow.png';
import Car from './Car';

const CarList = (props) => {
  const { cars } = props;
  const [page, setPage] = useState(1);

  const pageLeftBtn = () => {
    setPage(page - 1);
  };

  const pageRigthBtn = () => {
    setPage(page + 1);
  };

  return (
    <Row className="m-0 p-0 h-100">
      <Col md="1" className="p-0">
        <div className="d-flex flex-column justify-content-center h-100">
          <button className="home-left" onClick={pageLeftBtn} disabled={true}>
            <img className="arrowicon" src={triangleArrowImg}/>
          </button>
        </div>
      </Col>
      <Col md="10" className="flex-grow">
        <div className="d-flex flex-column justify-content-center h-100">
          <div className="w-100 text-center">
            <h2>LATEST MODELS</h2>
            <p className="text-muted">Please select a model</p>
          </div>
          <div className="d-flex flex-row justify-content-around">
            {
              cars.filter((val, index) => index >= ((page * 3) - 3) && index < (page * 3)).map((car) => {
                return <Car key={car.id} car={car} />;
              })
            }
          </div>
        </div>
      </Col>
      <Col md="1" className="p-0">
        <div className="d-flex flex-column justify-content-center h-100">
          <button className="home-rigth" onClick={pageRigthBtn}>
            <img className="arrowicon-inverse" src={triangleArrowImg}/>
          </button>
        </div>
      </Col>
    </Row>
  );
}

CarList.propTypes = {
  cars: PropTypes.array
};

export default CarList;
