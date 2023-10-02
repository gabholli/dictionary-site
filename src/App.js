import './App.css'
import React from "react"
import { useState, useEffect } from 'react'
import Section from './components/Section'
import Navbar from './components/Navbar'
// import { nanoid } from "nanoid"


function App() {
  const [word, setWord] = useState([])
  const [search, setSearch] = useState()

  const handleChange = (event) => {
    setSearch(event.target.value)
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    console.log(search)
  }

  useEffect(() => {
    fetch("https://api.dictionaryapi.dev/api/v2/entries/en/go")
      .then(res => res.json())
      .then(data => {
        console.log(data)
        setWord(data)
      })
      .catch((error) => {
        console.error("Fetch error", error)
      })

  }, [])

  const wordData = word && word.map(item => {
    return (
      <Section
        item={item}
      />
    )
  })

  console.log(wordData)

  return (
    <div className="content">
      <Navbar
        handleChange={handleChange}
        handleSubmit={handleSubmit}
      />
      {word && wordData}
    </div>
  )
}


export default App