import React, {useState} from 'react';
import Todos from './components/Todos.tsx';
import NewTodo from './components/NewTodo.tsx';
import Todo from './models/todo.ts';

function App() {
  const [todos, setTodos] = useState<Todo[]>([]);

  const handleAddTodo = (todoText: string) => {
    const newTodoAdd = new Todo(todoText);
    
    setTodos((prev) => {
      return prev.concat(newTodoAdd)
    });
  }

  return (
    <div>
      <NewTodo onAddTodo={handleAddTodo} />
      <Todos items={todos} />
    </div>
  );
}

export default App;
