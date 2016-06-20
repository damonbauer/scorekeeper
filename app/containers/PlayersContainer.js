import React from 'react';
import { Link } from 'react-router';
import InlineSVG from 'svg-inline-react';

require('./styles.scss');

export default class PlayersContainer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      players: []
    };
  }

  handleSubmitPlayer(e) {
    e.preventDefault();

    let inputValue = this.refs.playerInput.value;
    let newArray = this.state.players.slice();

    if (!inputValue) {
      return false;
    }

    newArray.push({
      name: inputValue
    });

    this.setState({
      players: newArray
    });

    this.refs.playerInput.value = '';
  }

  handleRemovePlayer(playerIndex) {
    let newPlayers = this.state.players.filter((value, index) => index !== playerIndex);

    this.setState({
      players: newPlayers
    });
  }

  componentDidMount() {
    window.localStorage.removeItem('state');
  }

  componentDidUpdate() {
    window.localStorage.setItem('state', JSON.stringify(this.state));
  }

  render() {
    let playersList = this.state.players.map((player, index) =>
      <li key={index} className="Player">
        <a
          role="button"
          id="remove-player"
          className="Button--bare Button--inline"
          onClick={() => {::this.handleRemovePlayer(index)}}>
          <InlineSVG src={require('svg-inline!../images/remove.svg')} raw={true} />
        </a> {player.name}
      </li>
    );

    return (
      <div id="Players">
        <h2>Add Players</h2>
        <form onSubmit={::this.handleSubmitPlayer}>
          <div className="InputGroup">
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Name"
              ref="playerInput"
             />
            <button type="submit" id="add">
              <InlineSVG src={require('svg-inline!../images/plus.svg')} raw={true} />
            </button>
          </div>
        </form>

        <ul className="Players-list">
          {playersList}
        </ul>

        <Link to='/game' role="button" className="Button--block" disabled={!this.state.players.length}>Start Game</Link>
      </div>
    );
  }
}
