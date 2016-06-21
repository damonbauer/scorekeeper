import React from 'react';
import ReactDOM from 'react-dom';
import Header from '../components/Game/Header';
import Round from '../components/Game/Round';

require('./styles.scss');

export default class GameContainer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      rows: [{'num': 1}],
      scores: []
    };
  }

  componentWillMount() {
    this.setState(JSON.parse(window.localStorage.state));
  }

  componentDidMount() {
    ReactDOM.findDOMNode(this.refs.row_1).querySelector('input').focus();
  }

  componentDidUpdate() {
    window.localStorage.setItem('state', JSON.stringify(this.state));
  }

  onFormSubmit() {
    let prevRow = this.state.rows.slice(-1)[0].num;
    let newArray = this.state.rows.slice();

    newArray.push({'num': prevRow + 1});

    this.setState({
      rows: newArray
    });
  }

  render() {
    let rows = this.state.rows.map(row =>
      <Round
        key={`row_${row.num}`}
        ref={`row_${row.num}`}
        roundNum={`${row.num}`}
        players={this.state.players}
        handleFormSubmit={::this.onFormSubmit}
      />
    );

    return (
      <div id="Game">
        <Header data={this.state.players} />
        {rows}
      </div>
    );
  }
}
