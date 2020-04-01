import React, { useState, useEffect } from "react"
import styled from "styled-components"
import { KEYS } from "../constants/keys"
import Key from "./Key"

const Piano = styled.div`
  display: flex;
  position: relative;
  height: 100%;
  max-width: 100vw;
  overflow-x: scroll;
`

export default ({ currentKeys, onNotePressed, onNoteReleased }) => {
  const [isMouseDown, setIsMouseDown] = useState(false)
  const a4 = document.getElementById("A4")

  useEffect(() => {
    a4 && a4.scrollIntoView(false)
  }, [a4])

  return (
    <Piano
      onMouseDown={() => setIsMouseDown(true)}
      onMouseUp={() => setIsMouseDown(false)}
    >
      {KEYS.map(key => (
        <Key
          key={key.name}
          {...key}
          isMouseDown={isMouseDown}
          notePressed={currentKeys.find(k => k.name === key.name)}
          onNotePressed={onNotePressed}
          onNoteReleased={onNoteReleased}
        />
      ))}
    </Piano>
  )
}
