import { FocusEvent, useRef } from "react";
import useLocalStorage, { KEYS } from "../hooks/useLocalStorage";

type GameShape = number[];
export type GamesShape = Record<string, GameShape[]>;
interface GameFormProps {
  activeGame: string;
}

export default function GameForm({ activeGame }: GameFormProps) {
  const formRef = useRef<HTMLFormElement>(null);
  const [names] = useLocalStorage<string[]>(KEYS.names, []);
  const [games, setGames] = useLocalStorage<GamesShape>(KEYS.games, {});

  const handleAddRowClick = (): void => {
    setGames((prevGames) => ({
      ...prevGames,
      [activeGame]: [
        ...prevGames[activeGame],
        [...Array(names.length).fill(null)],
      ],
    }));
  };

  const handleClearScoresClick = (): void => {
    formRef.current?.reset();
    setGames((prevGames) => ({
      ...prevGames,
      [activeGame]: [[...Array(names.length).fill(null)]],
    }));
  };

  const handleScoreChange = (
    roundIndex: number,
    scoreIndex: number,
    score: string
  ): void => {
    setGames((prevGames) => {
      const cloned = { ...prevGames };
      cloned[activeGame][roundIndex][scoreIndex] = parseFloat(score);
      return cloned;
    });
  };

  const handleInputFocus = (e: FocusEvent<HTMLInputElement>) =>
    e.target.select();

  const calculateScore = (index: number): number =>
    games[activeGame].reduce((acc, round) => acc + round[index], 0);

  return (
    <form ref={formRef}>
      <table>
        <thead>
          <tr>
            <th style={{ width: 25 }} />
            {names.map((name, index) => (
              <th key={`${name}-${index}`}>
                <div>
                  <span>{name}</span> {calculateScore(index)}
                </div>
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {Object.values(games[activeGame]).map((round, roundIndex) => (
            <tr key={`round-${roundIndex}`}>
              <td style={{ width: 25, padding: 0 }}>
                <span
                  style={{
                    fontSize: 12,
                  }}
                >
                  {roundIndex + 1}
                </span>
              </td>
              {round.map((score, scoreIndex) => (
                <td key={`round-${roundIndex}-score-${scoreIndex}`}>
                  <input
                    style={{
                      width: "100%",
                    }}
                    type="number"
                    defaultValue={score}
                    placeholder="0"
                    onFocus={handleInputFocus}
                    onChange={(e) => {
                      e.preventDefault();
                      const score = e.target.value;
                      if (!score) return;
                      handleScoreChange(roundIndex, scoreIndex, score);
                    }}
                  />
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
      <button type="button" onClick={handleAddRowClick} className="AddRound">
        + Add Round
      </button>
      <button
        type="button"
        onClick={handleClearScoresClick}
        className="ClearScores"
      >
        &times; Clear All Scores
      </button>
    </form>
  );
}
