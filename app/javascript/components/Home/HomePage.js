import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchCars } from '../../Redux/Home/Cars';
import CarList from './CarList';

const HomePage = () => {
  const { cars } = useSelector((state) => state);
  const dispatch = useDispatch();
  const loadCarsBind = bindActionCreators(fetchCars, dispatch);

  useEffect(() => {
    loadCarsBind();
  }, []);
  let ans = (
    <p>
      I am loading now!
    </p>
  );

  if (cars) {
    ans = <div className="container-fluid m-0 p-0">
      <CarList cars={cars} />
    </div>;
  }

  return ans;
};

export default HomePage;