import React, { createContext, useState } from 'react';
import './App.css';
import styled from 'styled-components';
import Btn from './component/atoms/Btn';
import TodoList from './component/molecules/TodoList';
import InputArea from './component/molecules/InputArea';



function App() {

  return (
    <>
      <SContainer>
        <InputArea/>
        <TodoList />
      </SContainer>
    </>
  );
}

export default App;

const SContainer = styled.div`
  max-width: 500px;
  margin: 0 auto;
  padding: 100px 40px;
  background-color: #eee;
`
