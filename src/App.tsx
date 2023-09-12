import './App.css'
import { Routes, Route } from 'react-router-dom'

import TrendingMovies from './pages/TrendingMovies'
import MovieDetailPage from './pages/MovieDetailPage'
import Home from './pages/Home'
import Tvshows from './pages/Tvshows'

import TopMovies from './pages/TopMovies'
import Movie from './pages/Movie'


function App() {
  

  return (
    <>
      <Routes>
        <Route path='/' element={<Home/>}/>
        
        <Route path='/trendingMovies' element={<TrendingMovies/>}/>
        <Route path='/trendingMovies/:id' element={<MovieDetailPage/>} />
        <Route path='/tvshows' element={<Tvshows/>}/>
        
        <Route path='/topRated' element={<TopMovies/>} />
        <Route path='/topMovies/:id' element={<Movie/>} />
      </Routes>
      
     
    </>
    
  )
}

export default App
