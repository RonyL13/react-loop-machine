import { useState } from 'react'
import Button from './components/Button'
import Pads from './components/Pads'
import sound from './loops/120_future_funk_beats_25.mp3'
import sound2 from './loops/120_stutter_breakbeats_16.mp3'

const App = () => {
  const [pads, togglePad] = useState([
    {
        id: 1,
        text: 'Test1',
        src: sound,
        on: false
    },
    {
      id: 2,
      text: 'Test2',
      src: sound2,
      on: false
  },
])

  const toggle = (id) => {
    console.log(id);
  }
  
  return (
    <div className="App">
      <Button />
      <Pads pads={pads} ontoggle={toggle} />
    </div>
  );
}
export default App;
