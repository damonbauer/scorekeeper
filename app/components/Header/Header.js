import React from 'react';
import InlineSVG from 'svg-inline-react';
import { Link } from 'react-router';

require('./styles.scss');

export default function Header() {
  return (
    <header id='Masthead' role='banner'>
      <Link to='/' className='Logo'>Scorekeeper</Link>
      <Link to='/' role="button" id='restart'><InlineSVG src={require('svg-inline!../../images/refresh.svg')} raw={true} /> Restart</Link>
    </header>
  );
}
