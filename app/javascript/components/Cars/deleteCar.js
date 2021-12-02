import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Card } from 'react-bootstrap';
import { fetchCars, removeCar } from '../../Redux/Home/Cars';
import Loading from '../Loading';
import './deletecars.css';
import CircularProgress from 'react-cssfx-loading/lib/CircularProgress';
import btnDelete from '../../Img/delete.png';

const DeleteCars = () => {
  const dispatch = useDispatch();
  const fetchCarAction = bindActionCreators(fetchCars, dispatch);
  const removeCarAction = bindActionCreators(removeCar, dispatch);
  const cars = useSelector((state) => state.cars);
  const [ deleting, setDeleting ] = useState(false);

  const updataDeleting = () => {
    setDeleting(!deleting);
  };

  useEffect(() => {
    fetchCarAction();
  }, []);

  return (
    <div className="h-100 w-100 position-relative">
      {
        (cars.length > 0) ?
          <div className="h-100 w-100 pb-5 position-relative bg-white overflow-y-auto">
            <h1 className="fs-1 text-green text-center w-100">All Cars</h1>
            <div className="row m-0 p-2 delete-car-container pb-3" data-testid="delete-car-container">
              {
                cars.map((car) => {
                  const imgStyle = {
                    background: `linear-gradient(0deg, #000000 13%, #ffffff00 25%), url('${car.imageData}')`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat'
                  };
                  return (
                    <div key={car.id} className="col-12 col-sm-6 col-lg-4 col-xl-3 p-1">
                      <Card
                        style={imgStyle}
                        className="card-body h-100 shadow border-green delete-car-card position-relative p-0"
                      >
                        <div className="car-image-data" />
                          <Card.Title
                            className="text-green p-2 d-flex flex-row card-title m-0 text-center fs-4"
                          >
                            {car.name}
                            <p className="text-white m-0">
                              {'(' + car.model + ')'}
                            </p>
                          </Card.Title>
                          <button
                            className="btn-delete-car"
                            onClick={() => {
                              updataDeleting();
                              removeCarAction(car.id, setDeleting);
                            }}
                            disabled={deleting}
                          >
                            <img src={btnDelete} />
                          </button>
                      </Card>
                    </div>
                  );
                })
              }
            </div>
            <Loading status={deleting} />
          </div>
        :
        <Loading status={true} />
      }
    </div>
  );
};

export default DeleteCars;
