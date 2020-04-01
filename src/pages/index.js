import React, { useState, useEffect } from "react"
import styled from "styled-components"
import Piano from "../components/Piano"
import Settings from "../components/Settings"
import { createSynth } from "../utils/synth"

const Container = styled.div`
  margin: 0 auto;
  padding: 0.5rem;
  max-width: 1000px;
  max-height: 500px;
  text-align: center;
`
const H1 = styled.h1`
  color: #fefefe;
  text-align: center;
`
const WrapWord = styled.span`
  border-bottom: 1px solid ${p => p.color};
`

const Keys = styled.div`
  display: flex;
  flex-direction: column;
`
const Key = styled.div``
const Label = styled.label`
  margin: 0 0.2rem;
`

export default () => {
  const [volume, setVolume] = useState(0.5)
  const [waveform, setWaveform] = useState("sine")
  const [currentKeys, setCurrentKeys] = useState([])
  const [measure, setMeasure] = useState("8n")
  const [synth, setSynth] = useState(createSynth("sine"))

  const onNotePressed = (name, frequency) => {
    synth.triggerAttackRelease(name, measure)

    setCurrentKeys([
      ...currentKeys.filter(key => key.name !== name),
      { name, frequency },
    ])
  }
  const onNoteReleased = (name, releaseAll) => {
    if (releaseAll) {
      setCurrentKeys([])
      return
    }
    setCurrentKeys(currentKeys.filter(key => key.name !== name))
  }

  useEffect(() => setSynth(createSynth(waveform)), [waveform])

  return (
    <Container>
      <H1>
        Simply<WrapWord color="orange">Synth</WrapWord>
      </H1>
      <Piano
        currentKeys={currentKeys}
        onNotePressed={onNotePressed}
        onNoteReleased={onNoteReleased}
      />
      <Settings
        volume={volume}
        onVolumeChange={volume => {
          setVolume(volume)
        }}
        waveform={waveform}
        onWaveformChange={waveform => setWaveform(waveform)}
        measure={measure}
        onMeasureChange={measure => setMeasure(measure)}
      />
      <Keys>
        {currentKeys.length !== 0 &&
          currentKeys.map(({ name, frequency }) => (
            <Key>
              <Label>{name}</Label>
              <Label>{frequency}</Label>
            </Key>
          ))}
      </Keys>
    </Container>
  )
}
