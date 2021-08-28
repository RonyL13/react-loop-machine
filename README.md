# React Loop Machine

## About The Project

A simple loop machine created using React. This app enables you to play audio files on a loop and mix and record them. Upon stopping the recording process you are able to playback the recording.

### Built With

React.js

## Getting Started

To get a local copy of the app clone the repository

https://github.com/RonyL13/react-loop-machine.git

## Usage

**NOTE:**
In order for the app to be able to record audio you must provide it with permission to access your microphone.
If you choose not to allow microphone access you won't be able to use the recording feature.

After enabling microphone access just click any combination of the audio pads (9 squares) and hit the start button.

Selected pads will play their corresponding audio indefinetly until you stop them (individually or all).

Unselecting a pad while the audio is playing will cause that particular pad to stop playing.
Selecting a pad while the audio is playing will start playing that pad's audio on the next loop start.

Clicking the stop button will cause all pads to stop.

to record audio click the "Start Recording" button.
to stop recording audio click the "Stop Recording" button.
Upon stopping a "Play" button will appear that when clicked will playback the recorded audio.
