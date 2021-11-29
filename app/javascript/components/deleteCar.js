import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import {
  Row, Col, Card, Button,
} from 'react-bootstrap';
import { fetchCars } from '../Redux/Home/Cars';

const DeleteCars = () => {
  const dispatch = useDispatch();
  const fetchCarAction = bindActionCreators(fetchCars, dispatch);
  const cars = useSelector((state) => state.cars);

  useEffect(() => {
    fetchCarAction();
    return null;
  }, []);

  console.log(cars);
  return (
    <Row xs={1} md={4} className="g-4">
      {cars.map((car) => (
        <Col key={car.id}>
          <Card>
            <Card.Img variant="top" src="https://media.istockphoto.com/photos/generic-modern-suv-car-in-concrete-garage-picture-id1307086567" />
            <Card.Body className="d-flex justify-content-between align-items-center">
              <Card.Title>{car.name}</Card.Title>
              <Button variant="danger">Delete</Button>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
  );
};

export default DeleteCars;
