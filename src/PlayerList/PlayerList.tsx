import { MouseEvent } from "react";

interface PlayerListProps {
  players: string[];
  onRemovePlayer: (name: string) => void;
}

export default function PlayerList({
  players,
  onRemovePlayer,
}: PlayerListProps) {
  const handleRemoveClick = (e: MouseEvent<HTMLButtonElement>) =>
    onRemovePlayer(e.currentTarget.name);

  return (
    <div className="PlayerList">
      {players.map((player, index) => (
        <div key={`${player}-${index}`} className="PlayerList-player">
          <button onClick={handleRemoveClick} name={player}>
            &times;
          </button>
          {player}
        </div>
      ))}
    </div>
  );
}
