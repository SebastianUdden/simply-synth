import React from "react"
import styled from "styled-components"

const Input = styled.input`
  cursor: pointer;
`
const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
`
const Label = styled.label`
  text-transform: capitalize;
  margin: 0 0.5rem;
`

export default ({ min, max, step, value, name, onChange, labels }) => (
  <Wrapper>
    <Label>{name}</Label>
    <Input
      type="range"
      min={min}
      max={max}
      step={step}
      value={value}
      list={name}
      name={name}
      onChange={e => onChange(name, e.target.value)}
    />
    <Label>{value}</Label>
    <datalist id={name}>
      <option value={min} label={labels[0]} />
      <option value={max} label={labels[1]} />
    </datalist>
  </Wrapper>
)
