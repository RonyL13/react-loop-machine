import { useState, useEffect } from 'react'
import './App.css'
import Button from './components/Button'
import Pads from './components/Pads'
import sound from './loops/120_future_funk_beats_25.mp3'
import sound2 from './loops/120_stutter_breakbeats_16.mp3'
import sound3 from './loops/Bass Warwick heavy funk groove on E 120 BPM.mp3'
import sound4 from './loops/electric guitar coutry slide 120bpm - B.mp3'


const App = () => {
  const [pads, setToggle] = useState([
    {
      id: 1,
      text: 'Future',
      selected: false,
      class: 'pad',
      audio: new Audio(sound)
    },
    {
      id: 2,
      text: 'Stutter',
      selected: false,
      class: 'pad',
      audio: new Audio(sound2)
    },
    {
      id: 3,
      text: 'Warwick',
      selected: false,
      class: 'pad',
      audio: new Audio(sound3)
    },
    {
      id: 4,
      text: 'Country',
      selected: false,
      class: 'pad',
      audio: new Audio(sound4)
    },
  ])
  useEffect(() => {
    for (let i = 0; i < pads.length; i++) {
        if(pads[i].selected === false) {
          pads[i].audio.pause()
          pads[i].audio.currentTime = 0;
        }
    }
  }, [pads])

  // // Start playing the loops
  const startPlaying = () => {
    for (let i = 0; i < pads.length; i++) {
        if(pads[i].selected) {
          pads[i].audio.addEventListener('ended', startPlaying)
          pads[i].audio.play()
        }
    }
  }
  // Stop playing the loops and reset the toggled switches
  const stopPlaying = () => {
      for (let i = 0; i < pads.length; i++) {
        pads[i].audio.pause();
        pads[i].audio.currentTime = 0;
      }
  }
  
  return (
    <div className="App">
      <div className="controllers">
        <Button name={'Record'}/>
        <Button name={'Start'} action={startPlaying} />
        <Button name={'Stop'} action={stopPlaying} />
      </div>
      <Pads pads={pads}  setToggle={setToggle} />
    </div>
  );
}
export default App;
