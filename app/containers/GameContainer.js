import React from 'react';
import ReactDOM from 'react-dom';
import InlineSVG from 'svg-inline-react';
import Thead from '../components/Game/TableHead';
import Tr from '../components/Game/TableRow';

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
    ReactDOM.findDOMNode(this.refs.row_1.refs.input_1_0).focus();
  }

  componentDidUpdate() {
    window.localStorage.setItem('state', JSON.stringify(this.state));
  }

  handleInputFocus() {}

  handleInputBlur() {}

  handleAddRow() {
    let prevRow = this.state.rows.slice(-1)[0].num;
    let newArray = this.state.rows.slice();

    newArray.push({'num': prevRow + 1});

    this.setState({
      rows: newArray
    });
  }

  render() {
    let rows = this.state.rows.map(row =>
      <Tr
        key={`row_${row.num}`}
        ref={`row_${row.num}`}
        roundNum={`${row.num}`}
        players={this.state.players}
        handleInputFocus={::this.handleInputFocus}
        handleInputBlur={::this.handleInputBlur}
      />
    );

    return (
      <div id="Game">
        <h1>Game</h1>
        <table>
          <Thead data={this.state.players} />
          <tbody ref="tableBody">
            {rows}
          </tbody>
        </table>
        <button type="button" id="add-row" onClick={::this.handleAddRow}>
          <InlineSVG src={require('svg-inline!../images/plus.svg')} raw={true} /> Add Round
        </button>
      </div>
    );
  }
}
