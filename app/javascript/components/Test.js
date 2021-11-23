import React from "react"
import PropTypes from "prop-types"
class Test extends React.Component {
  render () {
    return (
      <React.Fragment>
        Text: {this.props.text}
      </React.Fragment>
    );
  }
}

Test.propTypes = {
  text: PropTypes.node
};
export default Test
