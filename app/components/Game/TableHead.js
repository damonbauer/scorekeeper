import React from 'react';

export default function Thead(props) {
  return (
    <thead>
      <tr>
        <th>#</th>
        {props.data.map(player => <th key={player.name}>{player.name}</th>)}
      </tr>
    </thead>
  );
}

Thead.propTypes = {
  data: React.PropTypes.array.isRequired
};
