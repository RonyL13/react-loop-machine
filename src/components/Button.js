const button = ({name, action}) => {
    

    return (
        <div className="button-container">
            <button className="button" onClick={action}>{name}</button>
        </div>
    )
}

export default button
