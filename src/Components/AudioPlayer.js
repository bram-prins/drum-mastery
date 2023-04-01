import './AudioPlayer.css'
import audio from '../Audio'
import { useState } from 'react'

export default function AudioPlayer(props) {
    const [playing, setPlaying] = useState(false)

    const play = async () => {
        if (!playing) {
            const callback = () => setPlaying(false)
            if (!audio.initialized) {
                await audio.init()
                audio.play(props.file, callback)
            } else {
                if (audio.file !== props.file) {
                    audio.stop()
                    audio.play(props.file, callback)
                } else {
                    audio.play(null, callback)
                }
            }

            setPlaying(true)
        } else {
            audio.stop()
        }
    }

    let mouseDownInterval = null
    const changeSpeed = (increment) => {
        const p = document.getElementById('bpm')
        const currentValue = parseInt(p.innerText)
        const newValue = currentValue + (increment ? 1 : -1)

        if (newValue < 60 || newValue > 180)
            return

        p.innerText = newValue
        audio.setSpeed(newValue)
    }
    
    if (playing) {
        return (
            <div>
                <button onClick={play}>STOP</button>
                <span>&nbsp;| BPM&nbsp;</span>
                <button 
                    onMouseDown={() => {
                        clearInterval(mouseDownInterval)
                        changeSpeed(true)
                        mouseDownInterval = setInterval(() => changeSpeed(true), 100) 
                    }}
                    onMouseUp={() => clearInterval(mouseDownInterval)}
                >+</button>
                <span id="bpm">{audio.bpm}</span>
                <button 
                    onMouseDown={() => {
                        clearInterval(mouseDownInterval)
                        changeSpeed(false)
                        mouseDownInterval = setInterval(() => changeSpeed(false), 100) 
                    }}
                    onMouseUp={() => clearInterval(mouseDownInterval)}
                >-</button>
            </div>
        )
    } else {
        return <div><button onClick={play}>PLAY</button></div>
    }
}