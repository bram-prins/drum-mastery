import * as Tone from 'tone'

class Audio {
    init = async () => {
        await Tone.start()
        this.initialized = true
        this.bpm = 80
    }

    play = async (file, callback) => {
        if (file) {
            this.file = file

            this.player = new Tone.GrainPlayer({
                url: require('./Exercises audio/' + file),
                loop: true,
                playbackRate: this.bpm / 80,
                grainSize: 0.045,
                overlap: 0.005,
                onload: () => this.player.start()
            }).toDestination()
        } else {
            this.player.start()
        }
        this.player.onstop = callback
    }

    stop = () => this.player.stop()

    setSpeed = (bpm) => {
        this.player.playbackRate = bpm / 80
        this.bpm = bpm
    }
}

const audio = new Audio()
export default audio