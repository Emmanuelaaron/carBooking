import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import {
  Row, Col, Card, Button,
} from 'react-bootstrap';
import { fetchCars, removeCar } from '../Redux/Home/Cars';

const DeleteCars = () => {
  const dispatch = useDispatch();
  const fetchCarAction = bindActionCreators(fetchCars, dispatch);
  const removeCarAction = bindActionCreators(removeCar, dispatch);
  const cars = useSelector((state) => state.cars);

  useEffect(() => {
    fetchCarAction();
    return null;
  }, []);

  return (
    <Row xs={1} md={4} className="g-4">
      {cars.map((car) => (
        <Col key={car.id}>
          <Card className="card-body">
            <Card.Img variant="top" src={car.image_data} />
            <Card.Body className="d-flex justify-content-between align-items-center">
              <Card.Title>{car.name}</Card.Title>
              <Button variant="danger" onClick={() => removeCarAction(car.id)}>Delete</Button>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
  );
};

export default DeleteCars;
