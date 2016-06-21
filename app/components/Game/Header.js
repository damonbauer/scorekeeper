import React from 'react';

export default function Header(props) {
  return (
    <div className="Game-header">
      <p className="Game-cell">#</p>
      {props.data.map(player => <p key={player.name} className="Game-cell">{player.name}</p>)}
    </div>
  );
}

Header.propTypes = {
  data: React.PropTypes.array.isRequired
};
