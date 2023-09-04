import './App.css'
import { Routes, Route } from 'react-router-dom'
import Login from './components/Login'
import Register from './components/Register'
import Appnav from './components/Appnav'
import TrendingMovies from './pages/TrendingMovies'
import MovieDetailPage from './pages/MovieDetailPage'
import Home from './pages/Home'

function App() {
  

  return (
    <>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/register' element={<Register/>}/>
        <Route path='/trendingMovies' element={<TrendingMovies/>}/>
        <Route path='/trendingMovies/:id' element={<MovieDetailPage/>} />
      </Routes>
     
    </>
  )
}

export default App
