import React from 'react';
import PropTypes from 'prop-types';
import CircularProgress from 'react-cssfx-loading/lib/CircularProgress';
import './Loading.css';

const Loading = (props) => {
  const { status } = props;

  return (
    <div
      className={(status ? "d-flex" : "d-none") + " loading"}
    >
        <CircularProgress
          color="#97bf11"
          width="200px"
          height="200px"
        />
        <h2 className="text-white">Please Wait..</h2>
      </div>
  );
};

Loading.propTypes = {
  status: PropTypes.bool.isRequired
};

export default Loading;