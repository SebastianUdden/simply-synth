import React from "react"
import styled from "styled-components"

const KeyWrapper = styled.div`
  width: ${p => (p.color !== "white" ? "0" : "auto")};
  position: relative;
  margin: 2px;
`
const BlackKeyWrapper = styled.div`
  margin: 0 2px 2px;
  z-index: 100;
  position: absolute;
  width: 40px;
  left: -20px;
`
const WhiteKey = styled.button`
  background-color: ${p => p.color};
  color: black;
  padding: 1.7rem;
  outline: none;
  border: none;
  height: 60vh;
  transition: border-bottom 100ms linear;
  border-left: 1px solid #999;
  border-bottom: ${p => (p.pressed ? "2px" : "10px")} solid #0b6623;
`
const BlackKey = styled.button`
  background-color: ${p => p.color};
  color: white;
  padding: 0.5rem;
  outline: none;
  border: none;
  height: 40vh;
  transition: border-bottom 100ms linear;
  border-left: 1px solid #999;
  border-bottom: ${p => (p.pressed ? "2px" : "10px")} solid #0b6623;
`

export default ({
  name,
  frequency,
  color,
  isMouseDown,
  notePressed,
  onNotePressed,
  onNoteReleased,
}) => {
  return (
    <KeyWrapper id={name} color={color}>
      {color === "white" ? (
        <WhiteKey
          color={color}
          pressed={notePressed}
          onMouseDown={() => onNotePressed(name, frequency)}
          onMouseUp={() => onNoteReleased(name)}
          onMouseEnter={() => isMouseDown && onNotePressed(name, frequency)}
          onMouseLeave={() => {
            onNoteReleased(name)
          }}
        >
          <span>{name}</span>
        </WhiteKey>
      ) : (
        <BlackKeyWrapper>
          <BlackKey
            color={color}
            pressed={notePressed}
            onMouseDown={() => onNotePressed(name, frequency)}
            onMouseUp={() => onNoteReleased(name, true)}
            onMouseEnter={() => isMouseDown && onNotePressed(name, frequency)}
            onMouseLeave={() => isMouseDown && onNoteReleased(name)}
          >
            {name}
          </BlackKey>
        </BlackKeyWrapper>
      )}
    </KeyWrapper>
  )
}
