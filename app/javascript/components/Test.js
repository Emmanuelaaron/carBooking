import React from 'react';
import PropTypes from 'prop-types';

const Test = (props) => {
  const { text } = props;
  return (
    <>
      Text:
      {' '}
      {text}
    </>
  );
};

Test.propTypes = {
  text: PropTypes.node.isRequired,
};
export default Test;
