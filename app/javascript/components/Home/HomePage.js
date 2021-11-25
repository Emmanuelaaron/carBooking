import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { bindActionCreators } from 'redux';
import './homepage.css';
import { fetchCars } from '../../Redux/Home/Cars';
import CarList from './CarList';
import CarShownPage from './CarShownPage';

const HomePage = () => {
  const { cars } = useSelector((state) => state);
  const dispatch = useDispatch();
  const loadCarsBind = bindActionCreators(fetchCars, dispatch);
  const [ diplayCar, setdiplayCar ] = useState({ car: null, display: false });

  useEffect(() => {
    loadCarsBind();
  }, []);
  let ans = (
    <p>
      I am loading now!
    </p>
  );

  if (cars) {
    ans = <div className="m-0 p-0 position-relative container-fluid">
      <CarList cars={cars} setdiplayCar={setdiplayCar} />
      <CarShownPage car={diplayCar.car} display={diplayCar.display} setdiplayCar={setdiplayCar} />
    </div>;
  }

  return ans;
};

export default HomePage;