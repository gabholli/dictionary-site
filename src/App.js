import './App.css'
import React from "react"
import { useState, useEffect } from 'react'
import Section from './components/Section'
import Navbar from './components/Navbar'
// import { nanoid } from "nanoid"


function App() {
  const [word, setWord] = useState(null)
  const [search, setSearch] = useState("")

  // const handleChange = (event) => {
  //   event.preventDefault()
  //   setSearch(event.target.value)
  //   setSearch(prevSearchData => {
  //     return {
  //       ...prevSearchData,
  //       [event.target.name]: event.target.value
  //     }
  //   })
  // }

  const handleSubmit = (event) => {
    event.preventDefault()
    setSearch(event.target.search.value)
  }

  useEffect(() => {
    if (search.length > 0) {
      fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${search}`)
        .then(res => {
          if (!res.ok) {
            throw Error("Data not available")
          }
          return res.json()
        })
        .then(data => {
          console.log(data)
          setWord(data)
        })
        .catch((error) =>
          console.error("Fetch error: ", error)
        )
    } else {
      setWord("")
    }


  }, [search])

  const wordData = word && word.map(item => {
    return (
      <Section
        item={item}
      />
    )
  })

  return (
    <div className="content">
      <Navbar
        // handleChange={handleChange}
        handleSubmit={handleSubmit}
        search={search}
      />
      {word && wordData}
    </div>
  )
}


export default App