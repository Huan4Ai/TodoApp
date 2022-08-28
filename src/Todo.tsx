import React from "react";
import { tableStyle } from "./App";

interface TodoProps {
  item: {
    title: string;
    isComplete: boolean;
  };
  index: number;
  editTodo: (index: number) => void;
  removeTodo: (index: number) => void;
}

export const Todo: React.FC<TodoProps> = ({ item, index, editTodo, removeTodo }) => {
  return (
    <td style={tableStyle.tableCell}>
      <span style={{ textDecoration: item.isComplete ? "line-through" : "" }}>
        {item.title}
      </span>
      <button onClick={() => editTodo(index)}>Complete</button>
      <button onClick={() => removeTodo(index)}>Remove</button>
    </td>
  );
};
