import React from 'react';
import InlineSVG from 'svg-inline-react';

export default class Round extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isEditingRound: false
    };
  }

  inputHasValues(element) {
    return element.value.trim() !== '';
  }

  onFormSubmit(e) {
    e.preventDefault();

    let formEls = Array.from(e.target.getElementsByTagName('input'));
    let scores = formEls.map(input => parseInt(input.value, 10));

    if (!this.state.isEditingRound && formEls.every(::this.inputHasValues)) {
      formEls.forEach(input => input.setAttribute('disabled', 'disabled'));
      this.props.handleFormSubmit(scores);
    }
  }

  handleEditClick(e) {
    e.preventDefault();

    console.log('edit clicked?');

    this.setState({
      isEditingRound: true
    });

    Array.from(e.target.parentNode.parentNode.getElementsByTagName('input')).forEach(input => input.removeAttribute('disabled'));
  }

  handleEditDone(e) {
    e.preventDefault();

    this.setState({
      isEditingRound: false
    });

    let scores = Array.from(e.target.parentNode.parentNode.getElementsByTagName('input')).map(input => parseInt(input.value, 10));

    this.props.handleFormSubmit(scores, this.props.roundNum, true);
  }

  render() {
    //
    return (
      <form onSubmit={::this.onFormSubmit} className="Game-round" key={`round_${this.props.roundNum}`} ref={`round_${this.props.roundNum}`}>
        <div className="Game-cell">
          <p>{this.props.displayedRoundNum}</p>
          <a role="button" className="Button--bare" onClick={::this.handleEditClick} hidden={this.state.isEditingRound}>
            <InlineSVG src={require('svg-inline!../../images/edit.svg')} raw={true} />
          </a>
          <a role="button" className="Button--bare" onClick={::this.handleEditDone} hidden={!this.state.isEditingRound}>
            <InlineSVG src={require('svg-inline!../../images/check.svg')} raw={true} />
          </a>
        </div>
        {this.props.players.map((player, index) =>
          <div className="Game-cell" key={`cell_${this.props.roundNum}_${index}`}>
            <input type="number" ref={`input_${this.props.roundNum}_${index}`} />
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
  roundNum: React.PropTypes.number.isRequired,
  displayedRoundNum: React.PropTypes.number.isRequired,
  players: React.PropTypes.array.isRequired,
  handleFormSubmit: React.PropTypes.func.isRequired
};
