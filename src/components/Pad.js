const Pad = ({ pad, setToggle }) => {
    const updateState = () => {
        if (pad.selected) {
            setToggle((prev) => {
                let newState = prev.slice()
                newState[pad.id - 1].selected = false;
                newState[pad.id - 1].class = 'pad'
                return newState
            })
        } else {
            setToggle((prev) => {
                let newState = prev.slice()
                newState[pad.id - 1].selected = true;
                newState[pad.id - 1].class = 'selectedPad'
                return newState
            })
        }
    }
    return (
        <div className='pad-container'>
            <button className={pad.class} selected={pad.selected} id={pad.id} onClick={updateState}>{pad.text}</button>
        </div>
    )
}

export default Pad
