import React from "react"
import styled from "styled-components"
import { MEASURES } from "../constants/measures"
import Selected from "./Selected"
import { WAVEFORMS } from "../constants/waveforms"

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
const Input = styled.input`
  cursor: pointer;
`

export default ({
  volume,
  onVolumeChange,
  waveform,
  onWaveformChange,
  measure,
  onMeasureChange,
}) => {
  return (
    <Settings>
      <Row>
        <span>Volume</span>
        <Input
          type="range"
          min="0.0"
          max="1.0"
          step="0.05"
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
      <Row>
        <span>Current measure </span>
        <div>
          {MEASURES.map(name => (
            <Selected name={name} current={measure} onClick={onMeasureChange} />
          ))}
        </div>
      </Row>
      <Row>
        <span>Current waveform </span>
        <div>
          {WAVEFORMS.map(name => (
            <Selected
              name={name}
              current={waveform}
              onClick={onWaveformChange}
            />
          ))}
        </div>
      </Row>
    </Settings>
  )
}
