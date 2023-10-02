import React from "react"

function Section(props) {

    const definitions = props.item.meanings.map(item => item.definitions.map(
        item => <li>{item.definition}</li>
    ))

    const phonetics = props.item.phonetics.map(item => {
        return (
            item.audio && (
                <div>
                    <audio controls>
                        <source src={item.audio}></source>
                        Your browser does not support the audio element.
                    </audio>
                </div>
            )
        )
    })

    return (

        <div className="container">
            <h3 className="word">{props.item.word}</h3>
            <ul className="definitions">
                <h3>Possible Definitions:</h3>
                {definitions}
            </ul>
            <div className="phonetics">
                {props.item.phonetics.audio && <h3>Possible Pronunciations:</h3>}
                {phonetics}
            </div>
        </div>

    )
}

export default Section