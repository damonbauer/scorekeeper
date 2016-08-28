import React from 'react';
import { Link } from 'react-router';

export default function Header() {
  return (
    <header id='Masthead' role='banner'>
      <Link to='/' className='Logo'>Scorekeeper</Link>
    </header>
  );
}
