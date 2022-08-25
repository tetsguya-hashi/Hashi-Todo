import React, {  useState, createContext } from 'react'
import { TodoObj } from '../component/molecules/InputArea'

export const TodosContext = createContext<any>({});

const TodosProvider = ({ children }:any) => {
  const [todos, setTodos] = useState<TodoObj[]>([{ id: 1, todoText: '家事１' }, { id: 2, todoText: '家事２' }])
  return (
    <TodosContext.Provider value={{todos,setTodos}}>
      {children}
    </TodosContext.Provider>
  )
}

export default TodosProvider