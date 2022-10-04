import React, { useEffect, useState } from 'react';
import axios from "axios";
import "./App.css";

const baseURL = "https://www.omdbapi.com/?apikey=6e415b15&s=batman";

const year = new Date().getFullYear()

const App = () => {
  const [results, setResults] = useState([])
  const [customSearch, setSearch] = useState("")

  useEffect(() => {
    axios.get(baseURL).then(response => {
      setResults(response.data.Search)
    })
  }, [])

  const handleInput = (event) => {
    setSearch(event.target.value)
  }

  const handleButton = (e) => {
    e.preventDefault();
    const secondURL = `https://www.omdbapi.com/?apikey=6e415b15&s=${customSearch}&type=movie`;
    axios.get(secondURL).then(res => {
      setResults(res.data.Search)
    })
    setSearch("")
  }

  const error_img = "https://i.pinimg.com/236x/e2/27/8b/e2278beeec09a6f26a64b0b1b5f8240a.jpg";


  return (
    <div className='wrapper'>
      <header className='header'>
        <h1>Movie Finder</h1>
        <form onSubmit={handleButton} className="form">
          <input placeholder='Search movie here' onChange={handleInput} value={customSearch} required/>
          <button>Search</button>
      </form>
      </header>

      
        <div className='container'>
            {results ? results.map((result, index) => {
              const imDB_URL = `https://www.imdb.com/title/${result.imdbID}`;
              return (
                <div className='sub-container' key={index}>
                          <h2>{result.Title}</h2>
                          <div className='img-wrapper'>
                          <img src={result.Poster !== "N/A" ? result.Poster : error_img} alt="img" />
                          </div>
                          <p><strong>{result.Year}</strong></p>
                          <a href={imDB_URL} target="blank">Read More</a>
                </div>)
            }) : <div className='non-container'>
              <h1>No Movies Found </h1>
              <img src='https://i.pinimg.com/236x/12/bb/80/12bb80dc4852cab654f4ea52b42ef3dc.jpg' alt='' /> 
              <a href="/">Home</a>
            </div>}
        </div>

        <footer className='footer'>
          <h2>Fake Movie DataBase</h2>
          <p>Copyrights © {year}</p>
          <p>All Rights Reserved.</p>
        </footer>
    </div>
  )
}

export default App

// 6e415b15;


        // return <div key={index}>
        //   <h2>{result.Title}</h2>
        //   <img src={result.Poster !== "N/A" ? result.Poster : error_img} alt="img" />
        // </div>
        