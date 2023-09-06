import  { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { tvshowData } from '../services/axios.service';

const MovieData = () => {
  const [show, settShow] = useState([]);
  const {id} = useParams();

  const singleData = async(id: number) => {
    const response = await tvshowData(id);
    console.log(response)
  }

  useEffect(() => {
    singleData(id)
  },[])

  return (
    <>
    
    </>
  )
}

export default MovieData