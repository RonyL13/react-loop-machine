import { useState } from 'react'
import './App.css'
import Button from './components/Button'
import Pads from './components/Pads'
import sound from './loops/120_future_funk_beats_25.mp3'
import sound2 from './loops/120_stutter_breakbeats_16.mp3'
import sound3 from './loops/Bass Warwick heavy funk groove on E 120 BPM.mp3'

const App = () => {

  const removeFromArray = (array, value) => {
    let index = array.indexOf(value)
    array.splice(index, 1)
  }

  const [pads, togglePad] = useState([
    {
      id: 1,
      text: 'Future',
      src: sound,
      on: false
    },
    {
      id: 2,
      text: 'Stutter',
      src: sound2,
      on: false
    },
    {
      id: 3,
      text: 'Warwick',
      src: sound3,
      on: false
    },
  ])
  let toBePlayed = []; // This array will contain all files that are set to be played (selected pads)

  // This function is preparing the tracks that will be played upon clicking "Start"
  const toggle = (pad) => {
    let selectedAudio = document.getElementById(pad.id).nextSibling; // Grabbing the clicked pad audio element

    if (pad.on) {
      pad.on = false
      removeFromArray(toBePlayed, selectedAudio)
      selectedAudio.pause();
      selectedAudio.currentTime = 0;
    } else {
      pad.on = true
      toBePlayed.push(selectedAudio)
    }

  }

  // Start playing the loops
  const startPlaying = () => {
    for (let i = 0; i < toBePlayed.length; i++) {
      toBePlayed[i].addEventListener('ended', startPlaying)
      toBePlayed[i].play()
    }
  }
  // Stop playing the loops and reset the toggled switches
  const stopPlaying = () => {
    for (let i = 0; i < toBePlayed.length; i++) {
      toBePlayed[i].pause();
      toBePlayed[i].currentTime = 0;
    }
    toBePlayed = [];
  }
  return (
    <div className="App">
      <Button name={'Start'} action={startPlaying} />
      <Button name={'Stop'} action={stopPlaying} />
      <Pads pads={pads} onToggle={toggle} />
    </div>
  );
}
export default App;
