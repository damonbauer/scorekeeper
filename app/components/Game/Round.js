import React from 'react';
import InlineSVG from 'svg-inline-react';

export default class Round extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
    };
  }

  inputHasValues(element) {
    return element.value.trim() !== '';
  }

  onFormSubmit(e) {
    e.preventDefault();

    let formEls = Array.from(e.target.getElementsByTagName('input'));
    let scores = formEls.map(input => parseInt(input.value, 10));

    if (formEls.every(::this.inputHasValues)) {
      formEls.forEach(input => input.setAttribute('disabled', 'disabled'));
      this.props.handleFormSubmit(scores);
    }
  }

  render() {
    return (
      <form onSubmit={::this.onFormSubmit} className="Game-round" key={`round_${this.props.roundNum}`}>
        <p className="Game-cell">{this.props.roundNum}</p>
        {this.props.players.map((player, index) =>
          <div className="Game-cell" key={`cell_${this.props.roundNum}_${index}`}>
            <input type="number" />
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
