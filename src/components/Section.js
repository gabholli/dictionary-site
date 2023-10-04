import React from "react"

function Section(props) {

    const definitions = props.item.meanings.map(item => item.definitions.map(
        item => <li>{item.definition}</li>
    ))

    const phonetics = props.item.phonetics.map(item => {
        return (
            item.audio && (
                <div>
                    <p className="pronunciation">{item.text}</p>
                    <audio controls>
                        <source src={item.audio}></source>
                        Your browser does not support the audio element.
                    </audio>
                </div>
            )
        )
    })

    const partOfSpeech = props.item.meanings.map(item => <li>{item.partOfSpeech}</li>)

    const synonyms = props.item.meanings.map(item => item.synonyms.map(item =>
        <li>{item}</li>))

    const antonyms = props.item.meanings.map(item => item.antonyms.map(item =>
        <li>{item}</li>))

    return (

        <div className="container">
            <h3 className="word">{props.item.word}</h3>
            <ul className="definitions">
                <h3>Definitions:</h3>
                {definitions}
            </ul>
            <ul className="partOfSpeech">
                <h3>Parts of Speech:</h3>
                {partOfSpeech}
            </ul>
            <div className="phonetics">
                {phonetics}
            </div>
            <ul className="synonyms">
                <h3>Synonyms:</h3>
                {synonyms}
            </ul>
            <ul className="antonyms">
                <h3>Antonyms:</h3>
                {antonyms}
            </ul>
        </div>

    )
}

export default Section