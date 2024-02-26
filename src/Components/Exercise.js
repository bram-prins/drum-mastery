import './Exercise.css'
import AudioPlayer from './AudioPlayer'

export default function Exercise(props) {
    return (
        <li className="exercise">            
            <div className="exercise-no">
                {String(props.value).includes("Bonus") ? (
                    <>
                        <span>BONUS</span><br />
                        &nbsp;{+ /\d+/.exec(props.value.split('.')[1])}
                    </>

                ) : (
                    <>
                        <span>&nbsp;</span><br />
                        {props.value.split('.')[1]}
                    </>
                )}
                
            </div>
            <div className="exercise-body">
                <img src={require('../Exercises images/' + props.value + '.jpeg')} alt={props.value}></img>
                {props.note &&
                    <p>{props.note}</p>
                }
                {!String(props.value).startsWith("Rudiments") &&
                    <AudioPlayer file={props.value + '.mp3'} />
                }
                {props.embed && 
                    <iframe
                        src={props.embed}
                        title="YouTube video player"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowFullScreen={true}
                    />
                }
            </div>
        </li>
    )
}