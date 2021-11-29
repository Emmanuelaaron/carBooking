import React from 'react';
import PropTypes from 'prop-types';

class Test extends React.Component {
  render() {
    return (
      <>
        Text:
        {' '}
        {this.props.text}
      </>
    );
  }
}

Test.propTypes = {
  text: PropTypes.node,
};
export default Test;
