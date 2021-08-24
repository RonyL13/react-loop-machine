

const Pad = ({ pad, onToggle }) => {

    return (
        <div className='pad-container'>
            <button className="pad" status="Off" id={pad.id} onClick={() => {onToggle(pad)}}>{pad.text}</button>
            <audio src={pad.src}></audio>
        </div>
    )
}

export default Pad