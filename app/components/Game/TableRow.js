import React from 'react';
import Input from './Input';

export default class Tr extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <tr>
        <td>{this.props.roundNum}</td>
        {this.props.players.map((player, index) =>
          <td key={`cell_${this.props.roundNum}_${index}`}>
            <Input
              ref={`input_${this.props.roundNum}_${index}`}
              handleInputBlur={this.props.handleInputBlur}
              handleInputFocus={this.props.handleInputFocus}
            />
          </td>
        )}
      </tr>
    );
  }
}

Tr.propTypes = {
  roundNum: React.PropTypes.string.isRequired,
  players: React.PropTypes.array.isRequired,
  handleInputBlur: React.PropTypes.func.isRequired,
  handleInputFocus: React.PropTypes.func.isRequired
};
