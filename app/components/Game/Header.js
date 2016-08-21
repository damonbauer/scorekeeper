import React from 'react';

let calcScore = (values) => {
  if (!values.length) {
    return 0;
  } else {
    return values.reduce((prev, curr) => prev + curr);
  }
};

export default function Header(props) {
  let gatherScores = (index) => calcScore(props.scores.map(scores => scores[index]));

  return (
    <div className="Game-header-wrap">
      <div className="Game-header">
        <p className="Game-cell">#</p>
        {props.players.map((player, index) => <p key={player} className="Game-cell">{player} <span className="Total-score">{gatherScores(index)}</span></p>)}
      </div>
    </div>
  );
}

Header.propTypes = {
  players: React.PropTypes.array.isRequired,
  scores: React.PropTypes.array.isRequired
};
