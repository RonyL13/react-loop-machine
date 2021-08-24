import { useState } from 'react'
import Button from './components/Button'
import Pads from './components/Pads'
import sound from './loops/120_future_funk_beats_25.mp3'
import sound2 from './loops/120_stutter_breakbeats_16.mp3'
import sound3 from './loops/Bass Warwick heavy funk groove on E 120 BPM.mp3'

const App = () => {

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

  const toggle = (pad) => {
    let theButton = document.getElementById(pad.id)
    let audio = theButton.nextSibling;
    audio.addEventListener('ended', () => {audio.play()})
    if (pad.on) {
      pad.on = false;
      theButton.setAttribute('status', 'Off')
      audio.pause()
      audio.currentTime = 0;
    } else {
      pad.on = true;
      theButton.setAttribute('status', 'On')
      
    }
    console.log(pad, theButton);

    // let audio = thebutton.nextSibling;
    // audio.addEventListener('ended', () => {audio.play()})

    //   if (pad.on) {
    //     pad.on = false;
    //     audio.pause();
    //     audio.currentTime = 0
    //   } else {
    //     pad.on = true;

    //     audio.play()
    //   }

    //   console.log(pad);
  }
      const startPlaying = () => {
        let playedPads = [];
        let selectedPads = document.querySelectorAll('.pad')
        selectedPads.forEach(pad => {
            if(pad.getAttribute('status') === 'On') {
                console.log(pad.nextSibling);
                pad.nextSibling.play()
            }
        })
    }

    const stopPlaying = () => {
      console.log('someother');
}
  return (
    <div className="App">
      <Button name={'Start'} action={startPlaying}/>
      <Button name={'Stop'} action={stopPlaying}/>
      <Pads pads={pads} onToggle={toggle} />
    </div>
  );
}
export default App;
