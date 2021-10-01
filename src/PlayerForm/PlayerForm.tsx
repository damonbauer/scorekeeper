import { ChangeEvent, createRef, FormEvent, useState } from "react";

interface PlayerFormProps {
  onSubmit: (name: string) => void;
}

export default function PlayerForm({ onSubmit }: PlayerFormProps) {
  const nameInputRef = createRef<HTMLInputElement>();
  const [name, setName] = useState("");
  const handleNameChange = (e: ChangeEvent<HTMLInputElement>) =>
    setName(e.target.value);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // @ts-ignore
    onSubmit(e.currentTarget.elements["playerName"].value);
    setName("");
    nameInputRef.current?.focus();
  };

  return (
    <form onSubmit={handleSubmit} className="PlayerForm">
      <input
        type="text"
        id="playerName"
        name="playerName"
        placeholder="Name"
        value={name}
        onChange={handleNameChange}
        ref={nameInputRef}
        autoComplete="given-name"
      />
      <button type="submit" disabled={!name}>
        + Add
      </button>
    </form>
  );
}
