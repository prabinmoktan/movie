import './App.css'
import { Routes, Route } from 'react-router-dom'
import Login from './components/Login'
import Register from './components/Register'

import TrendingMovies from './pages/TrendingMovies'
import MovieDetailPage from './pages/MovieDetailPage'
import Home from './pages/Home'
import Tvshows from './pages/Tvshows'

import TopMovies from './pages/TopMovies'
import Movie from './pages/Movie'
import SimpleSlider from './pages/Slider'


function App() {
  

  return (
    <>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/register' element={<Register/>}/>
        <Route path='/trendingMovies' element={<TrendingMovies/>}/>
        <Route path='/trendingMovies/:id' element={<MovieDetailPage/>} />
        <Route path='/tvshows' element={<Tvshows/>}/>
        {/* <Route path='/tvshows/:id' element={<MovieData/>}/> */}
        <Route path='/topRated' element={<TopMovies/>} />
        <Route path='/topMovies/:id' element={<Movie/>} />
        <Route path='/slider' element={<SimpleSlider/>} />
      </Routes>
      
     
    </>
    
  )
}

export default App
