import React from 'react';
import { Link } from 'react-router';

require('./styles.scss');

export default function Header() {
  return (
    <header id='Masthead' role='banner'>
      <Link to='/' className='Logo'>Scorekeeper</Link>
      <button id='Menu'>Menu</button>
    </header>
  );
}
