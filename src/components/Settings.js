import React from "react"
import styled from "styled-components"
import { MEASURES } from "../constants/measures"
import Selected from "./Selected"
import { WAVEFORMS } from "../constants/waveforms"
import { SYNTHS } from "../constants/synths"
import Range from "./Range"

const Settings = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1rem;
`
const Row = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.5rem;
  border-bottom: 1px solid white;
`
const Column = styled.div`
  display: flex;
  flex-direction: column;
`
const Input = styled.input`
  cursor: pointer;
`

const OptionWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  flex-wrap: wrap;
`

export default ({
  volume,
  onVolumeChange,
  waveform,
  onWaveformChange,
  measure,
  onMeasureChange,
  synthType,
  onSynthTypeChange,
  envelope,
  onEnvelopeChange,
}) => {
  const { attack, decay, sustain, release } = envelope
  return (
    <Settings>
      <Row>
        <span>Volume</span>
        <Input
          type="range"
          min="-75"
          max="0"
          step="1"
          value={volume}
          list="volumes"
          name="volume"
          onChange={e => onVolumeChange(e.target.value)}
        />
        <datalist id="volumes">
          <option value="0.0" label="Mute" />
          <option value="1.0" label="100%" />
        </datalist>
      </Row>
      {measure === "envelope" && (
        <Row>
          <span>ADSR Envelope</span>
          <Column>
            <Range
              min="0.01"
              max="2"
              step="0.01"
              name="attack"
              value={attack}
              onChange={onEnvelopeChange}
              labels={["Short", "Long"]}
            />
            <Range
              min="0.01"
              max="2"
              step="0.01"
              name="decay"
              value={decay}
              onChange={onEnvelopeChange}
              labels={["Short", "Long"]}
            />
            <Range
              min="0"
              max="1"
              step="0.01"
              name="sustain"
              value={sustain}
              onChange={onEnvelopeChange}
              labels={["Low", "High"]}
            />
            <Range
              min="0.01"
              max="4"
              step="0.01"
              name="release"
              value={release}
              onChange={onEnvelopeChange}
              labels={["Short", "Long"]}
            />
          </Column>
        </Row>
      )}
      <Row>
        <span>Measure</span>
        <OptionWrapper>
          {MEASURES.map(name => (
            <Selected name={name} current={measure} onClick={onMeasureChange} />
          ))}
        </OptionWrapper>
      </Row>
      <Row>
        <span>Synth</span>
        <OptionWrapper>
          {SYNTHS.map(name => (
            <Selected
              name={name}
              current={synthType}
              onClick={onSynthTypeChange}
            />
          ))}
        </OptionWrapper>
      </Row>
      <Row>
        <span>Waveform</span>
        <OptionWrapper>
          {WAVEFORMS.map(name => (
            <Selected
              name={name}
              current={waveform}
              onClick={onWaveformChange}
            />
          ))}
        </OptionWrapper>
      </Row>
    </Settings>
  )
}
