import React from "react"
import styled from "styled-components"

const Button = styled.button`
  background-color: ${p => (p.selected ? "white" : "inherit")};
  color: ${p => (p.selected ? "black" : "white")};
  border: 1px solid white;
  margin: 0.4rem;
  padding: 0.5rem;
  cursor: pointer;
`

export default ({ name, onClick, current }) => (
  <Button selected={current === name} onClick={() => onClick(name)}>
    {name}
  </Button>
)
