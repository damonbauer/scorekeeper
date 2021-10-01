import { MouseEvent } from "react";
import useLocalStorage, { KEYS } from "../hooks/useLocalStorage";

interface HeaderProps {
  onNewGameClick: (e: MouseEvent<HTMLButtonElement>) => void;
}

export default function Header({ onNewGameClick }: HeaderProps) {
  const [activeGame] = useLocalStorage<string>(KEYS.activeGame, "");

  return (
    <header className="App-header">
      {activeGame ? (
        <button onClick={onNewGameClick} className="NewGame">
          &#8634; New Game
        </button>
      ) : null}
    </header>
  );
}
