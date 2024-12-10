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

  const handleRemoveTodo = (todoId: string) => {
    setTodos((prev) => {
      return prev.filter(td => td.id !== todoId);
    });
  }

  return (
    <div>
      <NewTodo onAddTodo={handleAddTodo} />
      <Todos items={todos} onRemove={handleRemoveTodo} />
    </div>
  );
}

export default App;
