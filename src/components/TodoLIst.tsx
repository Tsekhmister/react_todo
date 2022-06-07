import './styles.css';
import { Todo } from '../model';
import TodoItem from './TodoItem';

interface Props {
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}

const TodoLIst:React.FC<Props> = ({ todos, setTodos }) => {
  return (
    <div className="todos">
      {todos.map(todo => (
        <TodoItem 
          todo={todo} 
          key={todo.id} 
          todos={todos} 
          setTodos={setTodos}
        />
      ))}
    </div>
  )
} 

export default TodoLIst