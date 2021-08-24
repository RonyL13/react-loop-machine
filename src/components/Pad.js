// import PropTypes from 'prop-types'


const Pad = ({ pad, ontoggle }) => {

    return (
        <div className='pad-container'>
            <button onClick={() => {ontoggle(pad.id)}} state={pad.on ? 'On' : 'Off'}>{pad.text}</button>
        </div>
    )
}

export default Pad
