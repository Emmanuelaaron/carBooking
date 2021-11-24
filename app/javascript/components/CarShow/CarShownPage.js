import React from "react";
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Row } from "react-bootstrap";

const CarShownPage = () => {
  const { cars } = useSelector((state) => state);
  const { id } = useParams();
  let car = [];
  let ans = <p>Loading .....</p>;
  if (cars.length > 0 && id){
    car = cars.find((item) => item.id == id);
    if (car){
      ans = (
        <div className="container-fluid p-0 m-0">
          <Row className="m-0 h-100 w-100 border">
            <div className="col-12 col-md-8 d-flex flex-column justify-content-center">
              <img
                className="w-100" src="https://media.istockphoto.com/photos/illustration-of-generic-sports-coupe-car-on-white-picture-id1003904064?k=20&m=1003904064&s=612x612&w=0&h=qjMmK0xlPn7GLOefECHBNI0VWccVlLK7xo8vuIBw5uM="
              />
            </div>
            <div className="col-12 col-md-4">
              <h1>{car.name}</h1>
            </div>
          </Row>
        </div>
      );
    } else {
      ans = <p>Error, that car does not exist.....</p>;
    }
  }

  return ans;
};

export default CarShownPage;
