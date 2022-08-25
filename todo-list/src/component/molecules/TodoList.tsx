import React, { useContext, useState } from 'react'
import { TodosContext } from '../../provider/TodosProvider';
import Btn from '../atoms/Btn';
import { TodoObj } from './InputArea';



const TodoList: React.FC = () => {
  const {todos, setTodos} = useContext(TodosContext);
  const [textFlag, setTextFlag ]= useState<boolean>(true);

  const clickHandlerDelete = (index:number) => {
    const newTodos = [...todos]
    const deleteTodo = newTodos.splice(index,1)
    setTodos(newTodos);
  }
  return (
    
    <>
      <ul>
        {todos.map((todo: TodoObj,index:number) => (
          <li key={todo.id}>
            <p>{todo.todoText}</p>
            <Btn primary={true} clickHandler={() => {clickHandlerDelete(index)}}>
              {textFlag ? '完了' : '削除'}
              </Btn>
          </li>
        ))}
      </ul>
    </>
  )
}

export default TodoList