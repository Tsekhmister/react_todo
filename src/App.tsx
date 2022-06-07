import { useState } from 'react';
import './App.css';
import InputField from './components/InputField';
import TodoLIst from './components/TodoLIst';
import { Todo } from './model';
 
const App: React.FC = () => {
  const [todo, setTodo] = useState<string>('');
  const [todos, setTodos] = useState<Todo[]>([
    {
      id: Date.now() + Math.random(),
      todo: 'Feed the cat',
      isDone: true,
    },
    {
      id: Date.now() + Math.random(),
      todo: 'Find a job',
      isDone: false,
    }
  ]);

  const handleAdd = (e: React.FormEvent) => {
    e.preventDefault();

    const newTodo = {
      id: Date.now() + Math.random(),
      todo: todo.trim(),
      isDone: false,
    }

    if (todo.trim().length) {
      setTodos([...todos, newTodo ]);
      setTodo('');
    } else {
      setTodo('');
    }
  }
  
  return (
    <div className="App">
      <span className='heading'>Taskinet</span>
      <InputField 
        todo={todo} 
        setTodo={setTodo}
        handleAdd={handleAdd}
        />
        <TodoLIst todos={todos} setTodos={setTodos} />
 
    </div>
  );
}

export default App;
