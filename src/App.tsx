import { nanoid } from "nanoid";

import Header from "./Header/Header";
import PlayerForm from "./PlayerForm/PlayerForm";
import PlayerList from "./PlayerList/PlayerList";
import GameForm, { GamesShape } from "./GameForm/GameForm";

import useLocalStorage, { KEYS } from "./hooks/useLocalStorage";

import "./App.css";

function App() {
  const [names, setNames] = useLocalStorage<string[]>(KEYS.names, []);
  const [, setGames] = useLocalStorage<GamesShape>(KEYS.games, {});
  const [activeGame, setActiveGame] = useLocalStorage<string>(
    KEYS.activeGame,
    ""
  );

  const startNewGame = () => {
    setActiveGame("");
  };

  const handleSubmit = (name: string) =>
    setNames((prevNames) => [...prevNames, name]);

  const handleStartGame = () => {
    const gameId = nanoid();
    setGames((prevGames) => ({
      ...prevGames,
      [gameId]: [Array(names.length).fill(null)],
    }));
    setActiveGame(gameId);
  };

  const handleRemovePlayer = (name: string) =>
    setNames((prevNames) => prevNames.filter((prevName) => prevName !== name));

  return (
    <div className="App">
      {activeGame ? (
        <>
          <Header onNewGameClick={startNewGame} />
          <GameForm activeGame={activeGame} />
        </>
      ) : (
        <>
          <PlayerForm onSubmit={handleSubmit} />
          <PlayerList players={names} onRemovePlayer={handleRemovePlayer} />

          <button
            className="StartGame"
            type="button"
            disabled={!names.length}
            onClick={handleStartGame}
          >
            Start Game &rarr;
          </button>
        </>
      )}
    </div>
  );
}

export default App;
