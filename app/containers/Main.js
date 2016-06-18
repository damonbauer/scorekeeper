import React from 'react';
import Header from '../components/Header/Header.js';

export default class Main extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <main role='main' id='Main'>
          {this.props.children}
        </main>
      </div>
    );
  }
}

Main.propTypes = {
  children: React.PropTypes.node
};
