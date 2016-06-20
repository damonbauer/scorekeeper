import React from 'react';

export default class Input extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <input
        type="text"
        pattern="[-0-9]*"
        onBlur={this.props.handleInputBlur}
        onFocus={this.props.handleInputFocus}
      />
    );
  }
}

Input.propTypes = {
  handleInputBlur: React.PropTypes.func.isRequired,
  handleInputFocus: React.PropTypes.func.isRequired
};
