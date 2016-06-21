import React from 'react';
import InlineSVG from 'svg-inline-react';

export default class Round extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      scores: []
    };
  }

  onFormSubmit(e) {
    e.preventDefault();

    this.setState({
      scores: []
    });

    this.props.handleFormSubmit();
  }

  render() {
    return (
      <form onSubmit={::this.onFormSubmit} className="Game-round" key={`round_${this.props.roundNum}`}>
        <p className="Game-cell">{this.props.roundNum}</p>
        {this.props.players.map((player, index) =>
          <div className="Game-cell" key={`cell_${this.props.roundNum}_${index}`}>
            <input type="text" pattern="[-0-9]*" />
          </div>
        )}
        <button type="submit" id="add-row">
          <InlineSVG src={require('svg-inline!../../images/plus.svg')} raw={true} /> Add Round
        </button>
      </form>
    );
  }
}

Round.propTypes = {
  roundNum: React.PropTypes.string.isRequired,
  players: React.PropTypes.array.isRequired,
  handleFormSubmit: React.PropTypes.func.isRequired
};
