import Pad from './Pad'


const Pads = ({ pads, setToggle }) => {

    return (
        <div className='pads-container'>
            {pads.map((pad) => (
                <Pad key = {pad.id} pad={pad} setToggle={setToggle}/>
            ))}
        </div>
    )
}

export default Pads
