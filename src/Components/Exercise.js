import './Exercise.css'
import AudioPlayer from './AudioPlayer'

export default function Exercise(props) {
    return (
        <div>
            <h2>{props.value.split('.')[1]}</h2>
            <img src={require('../Exercises images/' + props.value + '.jpeg')} alt={props.value}></img>
            <AudioPlayer file={props.value + '.mp3'} />
        </div>
    )
}