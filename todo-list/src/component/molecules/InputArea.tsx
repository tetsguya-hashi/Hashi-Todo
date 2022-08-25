import React, { useContext, useState } from 'react'
import { TodosContext } from '../../provider/TodosProvider'
import Btn from '../atoms/Btn'

export type TodoObj = {
  id: number,
  todoText: string
}

const InputArea = () => {
  const {todos, setTodos} = useContext(TodosContext);
  const [value, setValue] = useState('');
  
  const clickHandlerAdd = () => {
    if(value === '') {
      return
    }
    const newTodos = [...todos, { id: todos.length + 1, todoText: value }];
    setTodos(newTodos);
    setValue('');
  }
  const handleValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value)
  }

  return (
    <>
      <input type="text" value={value} onChange={handleValue} />
      <Btn  primary={false} clickHandler={clickHandlerAdd}>追加</Btn>
    </>
  )
}

export default InputArea