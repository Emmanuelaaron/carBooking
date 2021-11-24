import React, { useEffect } from "react";
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchCars } from '../../Redux/Home/Cars';
import { NavLink } from 'react-router-dom';
import { Row } from "react-bootstrap";
import './CarShow.css';
import arrowRigth from '../../Img/arrow-right.png';
import triangleArrow from '../../Img/triangle-arrow.png';


const CarShownPage = () => {
  const { cars } = useSelector((state) => state);
  const dispatch = useDispatch();
  const loadCarsBind = bindActionCreators(fetchCars, dispatch);

  useEffect(() => {
    loadCarsBind();
  }, []);

  const { id } = useParams();
  let car = [];
  let ans = <p>Loading .....</p>;
  if (cars.length > 0 && id){
    car = cars.find((item) => item.id == id);
    if (car){
      ans = (
        <div className="container-fluid p-0 m-0 position-relative">
          <NavLink  to={`/`} className="backBtn">
            <img className="Btnicon" src={triangleArrow}/>
          </NavLink>
          <Row className="m-0 h-100 w-100">
            <div className="col-12 col-md-8 d-flex flex-column justify-content-center">
              <img
                className="w-100" src="https://media.istockphoto.com/photos/illustration-of-generic-sports-coupe-car-on-white-picture-id1003904064?k=20&m=1003904064&s=612x612&w=0&h=qjMmK0xlPn7GLOefECHBNI0VWccVlLK7xo8vuIBw5uM="
              />
            </div>
            <div className="col-12 col-md-4 text-center d-flex flex-column justify-content-center">
              <h1 className="m-0 fs-1">{car.model.toUpperCase()}</h1>
              <h2 className="m-0 fs-2 border-bottom">{car.name}</h2>
              <q>{car.description}</q>
              <table>
                <tr>
                  <td>Fincance Fee</td>
                  <td>{(car.price * 0.20) + '$'}</td>
                </tr>
                <tr>
                  <td>Montyl Payments</td>
                  <td>{(((car.price * 0.2) + car.price) /48) + '$'}</td>
                </tr>
                <tr>
                  <td>Duration</td>
                  <td>12 month</td>
                </tr>
              </table>
              <div className="d-flex flex-column p-5 button-container">
                <p className="text-center fs-3">You like it?</p>
                <button>
                  Reserve It
                  <img className="Btnicon" src={arrowRigth}/>
                </button>
              </div>
            </div>
          </Row>
        </div>
      );
    }
  }

  return ans;
};

export default CarShownPage;
