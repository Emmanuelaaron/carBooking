import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { bindActionCreators } from 'redux';
import './homepage.css';
import { fetchCars } from '../../Redux/Home/Cars';
import CarList from './CarList';
import CarShownPage from './CarShownPage';
import Loading from '../Loading';

const HomePage = () => {
  const { cars } = useSelector((state) => state);
  const dispatch = useDispatch();
  const loadCarsBind = bindActionCreators(fetchCars, dispatch);
  const [diplayCar, setdiplayCar] = useState({ car: null, display: false });
  
  useEffect(() => {
    loadCarsBind();
  }, []);

  return (
    <div className="position-relative w-100 h-100 p-0 m-0 min-width-0 overflow-y-auto">
      {
        (cars.length > 0) ?
          <div className="home-container">
            <CarList cars={cars} setdiplayCar={setdiplayCar} />
            <CarShownPage car={diplayCar.car} display={diplayCar.display} setdiplayCar={setdiplayCar} />
          </div>
        :
          <Loading status={true} />
      }
    </div>
  );
};

export default HomePage;
