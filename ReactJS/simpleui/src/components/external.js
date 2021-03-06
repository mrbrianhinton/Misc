import React from 'react';

// create class External
class External extends React.Component {
  render () {
    return(
      <div>
      <p>{this.props.content}</p>
      </div>
    );
    }
}

// require the content propType
External.propTypes = {
  content: React.PropTypes.string.isRequired
};

export default External;
