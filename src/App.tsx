import './App.css'
import { Routes, Route } from 'react-router-dom'
import Login from './components/Login'
import Register from './components/Register'
import Appnav from './components/Appnav'
import TrendingMovies from './pages/TrendingMovies'
import MovieDetailPage from './pages/MovieDetailPage'
import Home from './pages/Home'
import Tvshows from './pages/Tvshows'
import MovieData from './pages/MovieData'
import TopMovies from './pages/TopMovies'


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
        <Route path='/tvshows/:id' element={<MovieData/>}/>
        <Route path='/topRated' element={<TopMovies/>} />
      </Routes>
      
     
    </>
    
  )
}

export default App
