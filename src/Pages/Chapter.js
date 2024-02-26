import Exercise from '../Components/Exercise'
import audio from '../Audio'

export default function Chapter(props) {
    if (audio.player && audio.player.state === 'started')
        audio.stop()

        const introduction = () => {
            switch (props.value.name) {
                case "Beats 1": return (
                    <p>Test {props.value.name}</p>
                )
                case "Fills 1": return (
                    <p>Test {props.value.name}</p>
                )
                case "Beats 2": return (
                    <p>Test {props.value.name}</p>
                )
                case "Fills 2": return (
                    <p>Test {props.value.name}</p>
                )
                case "Beats 3": return (
                    <p>Test {props.value.name}</p>
                )
                case "Fills 3": return (
                    <p>Test {props.value.name}</p>
                )
                case "Beats 4": return (
                    <p>Test {props.value.name}</p>
                )
                case "Fills 4": return (
                    <p>Test {props.value.name}</p>
                )
                case "Beats 5": return (
                    <p>Test {props.value.name}</p>
                )
                case "Fills 5": return (
                    <p>Test {props.value.name}</p>
                )
                case "Beats 6": return (
                    <p>Test {props.value.name}</p>
                )
                case "Fills 6": return (
                    <p>Test {props.value.name}</p>
                )
                case "Beats 7": return (
                    <p>Test {props.value.name}</p>
                )
                case "Fills 7": return (
                    <p>Test {props.value.name}</p>
                )
                case "Beats 8": return (
                    <p>Test {props.value.name}</p>
                )
                case "Fills 8": return (
                    <p>Test {props.value.name}</p>
                )
                case "Beats 9": return (
                    <p>Test {props.value.name}</p>
                )
                case "Fills 9": return (
                    <p>Test {props.value.name}</p>
                )
                case "Beats 10": return (
                    <p>Test {props.value.name}</p>
                )
                case "Fills 10": return (
                    <p>Test {props.value.name}</p>
                )
                case "Rudiments": return (
                    <p>Test {props.value.name}</p>
                )
                default: return false
            }
        }

    const exercises = []

    for (let i = 1; i <= props.value.count; i++) {
        let song, note = null
        if (props.value.songs)
            song = props.value.songs.find(s => s.exercise === i.toString())

        if (props.value.notes)
            note = props.value.notes.find(n => n.exercise === i.toString())


        exercises.push(
            <Exercise 
                key={i}
                value={props.value.name + "." + i}
                embed={song && song.embed}
                note={note && note.html}
            />
        )
    }

    if (props.value.bonus > 0) {
        for (let i = 1; i <= props.value.bonus; i++) {
            let song, note = null
            if (props.value.songs)
                song = props.value.songs.find(s => s.exercise === "Bonus" + i.toString())
    
            if (props.value.notes)
                note = props.value.notes.find(n => n.exercise === "Bonus" + i.toString())

            exercises.push(
                <Exercise 
                    key={"Bonus" + i.toString()}
                    value={props.value.name + ".Bonus" + i}
                    embed={song && song.embed}
                    note={note && note.html}
                />
            )
        }
    }

    return (
        <div className="page">
            <h1>{props.value.name}</h1>
            {introduction()}
            {exercises}
        </div>
    )
}

