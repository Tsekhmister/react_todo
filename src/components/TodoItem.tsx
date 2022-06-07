import React, {useState, useRef, useEffect} from 'react';
import { Todo } from '../model';
import { RiEdit2Fill, RiDeleteBin2Fill } from 'react-icons/ri';
import { MdOutlineFileDownloadDone } from 'react-icons/md';
import './styles.css';

type Props = {
  todo: Todo,
  todos: Todo[],
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}

const TodoItem:React.FC<Props> = ({ todo, todos, setTodos}) => {
  const [edit, setEdit] = useState<boolean>(false);
  const [editTodo, setEditTodo] = useState<string>(todo.todo);

  const inputRef = useRef<HTMLInputElement>(null);


  const handleDone = (id: number) => {
    setTodos(todos.map(todo => (
      todo.id === id ? {...todo, isDone: !todo.isDone} : todo 
      )
    ))
  }

  const handleDelete = (id: number) => {
    setTodos(todos.filter(todo => (
      todo.id !== id)
    ))
  }

  const handleEdit = (e: React.FormEvent, id: number) => {
    e.preventDefault();

    setTodos(todos.map(todo => (
      todo.id === id ? {...todo, todo: editTodo} : todo
    )))

    setEdit(false);
  }

  useEffect(() => {
    inputRef.current?.focus();
  }, [edit])
  

  return (
    <form 
      className='todos__item'
      onSubmit={e => handleEdit(e, todo.id)}
      >
      {
        edit ? (
          <input 
            ref={inputRef}
            className='todos__item--text'
            value={editTodo}
            onChange={ e => setEditTodo(e.target.value)}
          />
        ) : (
          
            todo.isDone ? (
              <s className="todos__item--text" style={{textDecorationColor: 'white', textDecorationThickness: '2.5px', opacity: '0.5'}}> {todo.todo}</s>
            ) : (
              <span className="todos__item--text">
                {todo.todo}
              </span>
            )
          
        )
      }
      <div>
        <span className='icons' onClick={() => {
              if (!edit && !todo.isDone) {
                setEdit(!edit);
              }
        }}>
          <RiEdit2Fill />
        </span>
        <span className='icons' onClick={() => handleDelete(todo.id)}>
          <RiDeleteBin2Fill />
        </span>
        <span className='icons' onClick={() => handleDone(todo.id)}>
          <MdOutlineFileDownloadDone />
        </span>
      </div>
    </form>
  )
}

export default TodoItem