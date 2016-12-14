import React from 'react';
import ReactDOM from 'react-dom';
import { Base } from '../config/api';
import foreach from 'lodash.foreach';
import InlineSVG from 'svg-inline-react';
import Header from '../components/Game/Header';
import Round from '../components/Game/Round';

export default class GameContainer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      gameId: this.props.params.gameId,
      rows: [0],
      scores: [],
      players: []
    };
  }

  componentDidMount() {
    Base.fetch(`game/${this.state.gameId}`, {
      context: this,
      then(data) {
        let playersFromFirebase = [];
        let scoresFromFirebase = [];
        let rowsFromFirebase = [];

        foreach(data.players, player => {
          playersFromFirebase.push(player.name);
        });

        foreach(data.scores, round => {
          scoresFromFirebase.push(round);
        });

        foreach(data.rows, (key, index) => {
          rowsFromFirebase.push(index);
        });

        this.setState({
          players: playersFromFirebase,
          scores: scoresFromFirebase,
          rows: rowsFromFirebase
        });

        ReactDOM.findDOMNode(this.refs.row_0).querySelector('input').focus();
      }
    });
  }

  componentDidUpdate() {
    this.applyScoresToInputs();

    Base.post(`game/${this.state.gameId}/scores`, {
      data: this.state.scores
    });

    Base.post(`game/${this.state.gameId}/rows`, {
      data: this.state.rows
    });
  }

  applyScoresToInputs() {
    let scores = this.state.scores;

    for (let i = 0; i < scores.length; i++) {
      for (let j = 0; j < scores[i].length; j++) {
        let input = ReactDOM.findDOMNode(this.refs[`row_${i}`].refs[`input_${i}_${j}`]);
        input.value = scores[i][j];
        input.setAttribute('disabled', 'disabled');
      }
    }
  }

  onFormSubmit(scores, roundNum, shouldReplaceRound = false) {
    let prevRow = this.state.rows.slice(-1)[0];
    let newRowsArray = this.state.rows.slice();
    let currentScores = this.state.scores.slice();

    if (!shouldReplaceRound) {
      newRowsArray.push(prevRow + 1);
      currentScores.push(scores);
    } else {
      currentScores.splice(roundNum, 1, scores);
    }

    this.setState({
      rows: newRowsArray,
      scores: currentScores
    });
  }

  handleRestart() {
    if (window.confirm('Are you sure you want to reset?')) {
      this.setState({
        rows: [0],
        scores: []
      });

      Array.from(document.querySelectorAll('input')).forEach(input => {
        input.value = '';
        input.removeAttribute('disabled');
      });

      ReactDOM.findDOMNode(this.refs.row_0).querySelector('input').focus();
    }
  }

  render() {
    let rows = this.state.rows.map(num =>
      <Round
        key={`row_${num}`}
        ref={`row_${num}`}
        roundNum={num}
        displayedRoundNum={num + 1}
        players={this.state.players}
        handleFormSubmit={(scores, roundNum, shouldReplaceRound) => {::this.onFormSubmit(scores, roundNum, shouldReplaceRound)}}
      />
    );

    return (
      <div id="Game">
        <button id='restart' onClick={::this.handleRestart}>
          <InlineSVG src={require('svg-inline!../images/refresh.svg')} raw={true} /> Reset
        </button>
        <Header players={this.state.players} scores={this.state.scores} />
        {rows}
      </div>
    );
  }
}

GameContainer.propTypes = {
  params: React.PropTypes.object
};
