import React, { useState, useEffect } from "react"
import styled from "styled-components"
import Piano from "../components/Piano"
import Settings from "../components/Settings"
import { createSynth, changeMasterVolume } from "../utils/synth"

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
  const [measure, setMeasure] = useState("envelope")
  const [synthType, setSynthType] = useState("Synth")
  const [synth, setSynth] = useState(undefined)
  const [envelope, setEnvelope] = useState({
    attack: 0.01,
    decay: 0.36,
    sustain: 0.19,
    release: 1.88,
  })

  const onNotePressed = (name, frequency) => {
    if (measure === "envelope") {
      synth.triggerAttack(name)
    } else {
      synth.triggerAttackRelease(name, measure)
    }
    setCurrentKeys([
      ...currentKeys.filter(key => key.name !== name),
      { name, frequency },
    ])
  }
  const onNoteReleased = (name, releaseAll) => {
    if (measure === "envelope") {
      synth.triggerRelease()
    }

    if (releaseAll) {
      setCurrentKeys([])
      return
    }
    setCurrentKeys(currentKeys.filter(key => key.name !== name))
  }

  useEffect(() => {
    if (synthType && waveform && measure && envelope) {
      setSynth(createSynth(synthType, waveform, measure, envelope))
    }
  }, [synthType, waveform, measure, envelope])
  useEffect(() => changeMasterVolume(volume), [volume])

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
        synthType={synthType}
        onSynthTypeChange={synthType => setSynthType(synthType)}
        envelope={envelope}
        onEnvelopeChange={(type, value) =>
          setEnvelope({ ...envelope, [type]: value })
        }
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
