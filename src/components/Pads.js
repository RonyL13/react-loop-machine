import Pad from './Pad'


const Pads = ({ pads, onToggle }) => {

    return (
        <div className='pads-container'>
            {pads.map((pad) => (
                <Pad key = {pad.id} pad={pad} onToggle={onToggle}/>
            ))}
        </div>
    )
}

export default Pads
