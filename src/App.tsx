import './App.css'
import { Routes, Route } from 'react-router-dom'

import TrendingMovies from './pages/TrendingMovies'
import MovieDetailPage from './pages/movieDetailPage/MovieDetailPage'
import Home from './pages/Homepage/Home'
import Tvshows from './pages/Tvshows'

import TopMovies from './pages/TopMovies'


function App() {
  

  return (
    <>
      <Routes>
        <Route path='/' element={<Home/>}/>
        
        <Route path='/trendingMovies' element={<TrendingMovies/>}/>
        <Route path='/trendingMovies/:id' element={<MovieDetailPage/>} />
        <Route path='/tvshows' element={<Tvshows/>}/>
        
        <Route path='/topRated' element={<TopMovies/>} />
      </Routes>
      
     
    </>
    
  )
}

export default App
