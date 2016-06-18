import React from 'react';
import PlayersContainer from '../containers/PlayersContainer';

export default class Home extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  componentDidMount() {
  }

  componentWillUnmount() {
  }

  render() {
    return (
      <PlayersContainer />
    );
  }
}
