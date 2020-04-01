import * as Tone from "tone"

export const createReverb = () => {
  const reverb = new Tone.Reverb({
    decay: 1550.5,
    preDelay: 0.01,
    wet: 0.5,
  })
  return reverb.generate()
}

export const createSynth = (synth, waveform, measure, envelope) => {
  return new Tone[synth]({
    oscillator: {
      type: waveform,
    },
    envelope: measure === "envelope" ? envelope : undefined,
  }).toMaster()
}

export const changeMasterVolume = volume => {
  Tone.Master.volume.value = volume
}
