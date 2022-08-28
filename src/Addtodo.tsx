import React, {useState} from 'react';


interface AddtodoProps {
  addTodo: (title: string, isComplete: false) => void;
}

export const Addtodo: React.FC<AddtodoProps> = ({ addTodo }) => {
  const [word, setWord] = useState("");
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!word) return;
    addTodo(word, false);
    setWord("");
  };
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={word}
        onChange={(e: React.FormEvent<HTMLInputElement>): void =>
          setWord(e.currentTarget.value)
        }
      />
      <button type="submit">Add new task</button>
    </form>
  );
}
