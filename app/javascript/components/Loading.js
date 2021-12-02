import React from 'react';
import CircularProgress from 'react-cssfx-loading/lib/CircularProgress';

const Loading = () => (
  <div className="d-flex flex-column w-100 justify-content-center align-items-center">
      <CircularProgress
        color="#97bf11"
        width="100px"
        height="100px"
      />
      <h2>Loading...</h2>
    </div>
);

export default Loading;