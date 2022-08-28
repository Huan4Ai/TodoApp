import React from 'react';
import { tableStyle } from './App';

interface TodoProps {
  item: {
    title: string;
    isComplete: boolean;
  }
}

export const Todo: React.FC<TodoProps> = ({ item }) => {
  return <td style={tableStyle.tableCell}>
    <span style={{ textDecoration: item.isComplete ? "line-through" : "" }}>{item.title}</span>
  </td>
}
