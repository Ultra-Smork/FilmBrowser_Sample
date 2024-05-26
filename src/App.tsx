import { useEffect, useState } from "react"
import './App.css'
import SearchIcon from './Search.svg'
import FilmCard from './components/FilmCard'
import {BrowserRouter as Router, Route, Routes } from "react-router-dom"
const API_URL = 'http://www.omdbapi.com?apikey=cdfe9f5b'


function App() {

  const searchMovies = async (title: string) => {
    const response = await fetch(`${API_URL}&s=${title}`)
    const data = await response.json()
    
    console.log(data.Search)
    setFilms(data.Search)
  }

  const [Films, setFilms] = useState([]);
  const [searchTerm, setSearchTerm] = useState('')

  useEffect(() => {
    searchMovies(`Apaches`);
  }, []);
  return (
    <Router>
      <div className="app">
        <Routes>
          <Route path='/' element='' >
              <h1>FilmLands</h1>
              <div className="search">
                <input 
                  placeholder="Search for films"
                  value={searchTerm}
                  onChange={(event) => {
                    setSearchTerm(event.target.value)
                  }}
                />
                <img
                  src={SearchIcon}
                  alt="Search"
                  onClick={() => {
                    searchMovies(searchTerm)
                  }}
                />
              </div>{
              Films?.length > 0
                    ? (
                      <div className="container">
                        {Films.map((Film) => (
                            <FilmCard Film1={Film}/>
                        ))}
                      </div> 
                    ): (
                        <div className="empty">
                          <h2>No films found</h2>
                        </div>
                      )
                    }
            </Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App