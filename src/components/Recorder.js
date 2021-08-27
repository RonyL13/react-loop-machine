const Recorder = ({ isRecording, startRecording, stopRecording }) => {
    const recordingHandler = () => {
        if (isRecording) {
            stopRecording();
        } else {
            startRecording();
        }
    }
    return (
        <div className="recorder-container">
            <label htmlFor="recorder">Record:</label>
            <button name="recorder" className="recorder" onClick={recordingHandler}>{isRecording ? "Switch Off" : "Switch On"}</button>
        </div>
    )
}

export default Recorder
