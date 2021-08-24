import Pad from './Pad'


const Pads = ({ pads, ontoggle }) => {

    return (
        <div>
            {pads.map((pad) => (
                <Pad key = {pad.id} pad={pad} ontoggle={ontoggle}/>
            ))}
        </div>
    )
}

export default Pads
