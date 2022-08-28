import * as React from "react";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { useState } from "react";
import { Todo } from "./Todo";
import { Addtodo } from "./Addtodo";

export const tableStyle = {
  table: {
    borderCollapse: "collapse",
  },
  tableCell: {
    border: "1px solid gray",
    margin: 0,
    padding: "5px 10px",
    width: "max-content",
    minWidth: "150px",
  },
  form: {
    container: {
      padding: "20px",
      border: "1px solid #F0F8FF",
      borderRadius: "15px",
      width: "max-content",
      marginBottom: "40px",
    },
    inputs: {
      marginBottom: "5px",
    },
    submitBtn: {
      marginTop: "10px",
      padding: "10px 15px",
      border: "none",
      backgroundColor: "lightseagreen",
      fontSize: "14px",
      borderRadius: "5px",
    },
  },
};

export function App() {
  const [todos, setTodos] = useState<{ title: string; isComplete: boolean }[]>([
    { title: "Wake up", isComplete: false },
    { title: "Eat breakfast", isComplete: false },
  ]);


  const addTodo = (title: string, isComplete: false) => {
    let newTodos = [...todos, { title, isComplete }];
    setTodos(newTodos);
  }

  return (
    <Container maxWidth="sm">
      <Box sx={{ my: 4 }}>
        <Typography variant="h4" component="h1" gutterBottom>
          Todo App with TypeScript
        </Typography>
        <table>
          <tbody>
            {todos.map((item, index) => (
              <tr key={index}>
                <Todo item={item} />
              </tr>
            ))}
          </tbody>
        </table>
        <Addtodo addTodo={addTodo} />
      </Box>
    </Container>
  );
}
