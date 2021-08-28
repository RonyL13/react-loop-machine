const Recorder = ({ isRecording, startRecording, stopRecording }) => {
    const recordingHandler = () => {
        if (isRecording) {
            stopRecording();
        } else {
            startRecording();
        }
    }
    return (
        <div  className="recorder-container">
            <label htmlFor="recorder">{isRecording ? "Recorder On" : "Recorder Off"}</label>
            <button id="recorder" className={isRecording ? "Rec" : "notRec"} onClick={recordingHandler}></button>
        </div>
    )
}

export default Recorder
