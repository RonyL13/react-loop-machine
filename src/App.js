import { useState, useEffect } from 'react'
import './App.css'
import Button from './components/Button'
import Pads from './components/Pads'
import Recorder from './components/Recorder'
import sound from './loops/120_future_funk_beats_25.mp3'
import sound2 from './loops/120_stutter_breakbeats_16.mp3'
import sound3 from './loops/Bass Warwick heavy funk groove on E 120 BPM.mp3'
import sound4 from './loops/electric guitar coutry slide 120bpm - B.mp3'
import sound5 from './loops/FUD_120_StompySlosh.mp3'
import sound6 from './loops/GrooveB_120bpm_Tanggu.mp3'
import sound7 from './loops/MazePolitics_120_Perc.mp3'
import sound8 from './loops/PAS3GROOVE1.03B.mp3'
import sound9 from './loops/SilentStar_120_Em_OrganSynth.mp3'

const App = () => {
  const [isRecording, setIsRecording] = useState(false)
  const [mediaRecorder, setMediaRecorder] = useState(null)
  const [playRecordingButton, setPlayRecordingButton] = useState(false)
  const [recording, setRecording] = useState(null)
  const [loopTimer, setLoopTimer] = useState('loop-timer')
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
    {
      id: 5,
      text: 'Slompy',
      selected: false,
      class: 'pad',
      audio: new Audio(sound5)
    },
    {
      id: 6,
      text: 'Groove',
      selected: false,
      class: 'pad',
      audio: new Audio(sound6)
    },
    {
      id: 7,
      text: 'Maze',
      selected: false,
      class: 'pad',
      audio: new Audio(sound7)
    },
    {
      id: 8,
      text: 'PAS3',
      selected: false,
      class: 'pad',
      audio: new Audio(sound8)
    },
    {
      id: 9,
      text: 'Silent Star',
      selected: false,
      class: 'pad',
      audio: new Audio(sound9)
    },
  ])

  // Stop pads from playing immediately upon unselect
  useEffect(() => {
    for (let i = 0; i < pads.length; i++) {
      if (pads[i].selected === false) {
        pads[i].audio.pause()
        pads[i].audio.currentTime = 0;
      }
    }
    if (!(pads.find(pad => pad.selected === true))) {
      setLoopTimer('loop-timer')
    }

  }, [pads])

  const startRecording = () => {
    let audioChunks = [];
    setIsRecording(true);
    navigator.mediaDevices.getUserMedia({ audio: true })
      .then(stream => {
        const mr = new MediaRecorder(stream)
        mr.start()
        mr.addEventListener("dataavailable", event => {
          audioChunks.splice(0, 1, event.data)
        });
        setMediaRecorder(mr);
        mr.addEventListener("stop", () => {
          const audioBlob = new Blob(audioChunks);
          const audioUrl = URL.createObjectURL(audioBlob);
          const audio = new Audio(audioUrl);
          setRecording(audio);
          setPlayRecordingButton(true);
        });
      })
  }
  const playRecording = () => {
    recording.play()
  }
  const stopRecording = () => {
    setIsRecording(false)
    mediaRecorder.stop();
  }

  // // Start playing the loops
  const startPlaying = () => {
    setLoopTimer('loop-timer-active')
    for (let i = 0; i < pads.length; i++) {
      if (pads[i].selected) {
        pads[i].audio.addEventListener('ended', startPlaying)
        pads[i].audio.play()
      }
    }
  }
  // Stop playing all active loops
  const stopPlaying = () => {
    setLoopTimer('loop-timer')
    for (let i = 0; i < pads.length; i++) {
      pads[i].audio.pause();
      pads[i].audio.currentTime = 0;
    }
    // Reset all pads
    setToggle(prev => {
      let newState = prev.slice();
      for (let i = 0; i < prev.length; i++) {
        newState[i].selected = false;
        newState[i].class = 'pad'
      }
      return newState
    })
  }

  return (
    <div className="App">
      <h1 className="project-title">Loop Machine</h1>
      <div className="controllers">
        <div className="recorder-and-play-container">
          <Recorder isRecording={isRecording} startRecording={startRecording} stopRecording={stopRecording} />
          <button className="play-recording-button" onClick={playRecording} disabled={!playRecordingButton}>{playRecordingButton ? 'Play' : ''}</button>
        </div>
        <div className="start-stop-container">
          <Button name={'Start'} action={startPlaying} />
          <Button name={'Stop'} action={stopPlaying} />
        </div>
      </div>
      <Pads pads={pads} setToggle={setToggle} />
      <div className={loopTimer}></div>
    </div>
  );
}
export default App;