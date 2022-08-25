import React from 'react'
import styled, { css } from 'styled-components'

type Props = {
  children: string,
  primary: any
  clickHandler?: () => void
}

const Btn = (props: Props) => {
  const { children,primary, clickHandler } = props;
  return (
    <SBtn primary={primary} onClick={clickHandler} >{children}</SBtn>
  )
}

export default Btn

const SBtn = styled.button < { primary: any }> `
  width: 100px;
  height: 60px;
  display: grid;
  place-items: center;
  background-color:  ${({ primary }) => (primary ? 'palevioletred' : '#3077C6')};
  font-size: 18px;
  font-weight: bold;
  letter-spacing: 0.2em;
  border-radius:5px;
  color: white;

`;

