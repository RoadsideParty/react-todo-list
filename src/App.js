import React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import TodoList from "./pages/TodoList";
class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<TodoList />} />
        </Routes>
      </BrowserRouter>
    )
  }
}

export default App;
