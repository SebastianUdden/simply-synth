import * as Tone from "tone"

export const createSynth = type =>
  new Tone.Synth({
    oscillator: {
      type: type,
    },
  }).toMaster()
