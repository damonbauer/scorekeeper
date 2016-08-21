import React from 'react';
// import InlineSVG from 'svg-inline-react';
import { Link } from 'react-router';

export default function Header() {
  // let gameId = window.location.pathname.split('/').pop();

  return (
    <header id='Masthead' role='banner'>
      <Link to='/' className='Logo'>Scorekeeper</Link>
      {/*<Link to={`/game/${gameId}`} role="button" id='restart'><InlineSVG src={require('svg-inline!../../images/refresh.svg')} raw={true} /> Restart</Link>*/}
    </header>
  );
}
