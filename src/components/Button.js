const button = ({name, action}) => {
    
    return (
        <div className="button-container">
            <button onClick={action}>{name}</button>
        </div>
    )
}

export default button
