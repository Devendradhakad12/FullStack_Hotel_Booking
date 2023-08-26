import axios from 'axios'
import { useEffect, useState } from 'react'

function useFeatch(path){
    const [data,setData] = useState([])
    const [loading,setLoading] = useState(false)
    const [error,setError] = useState(false)
    useEffect(()=>{
      const featchData = async ()=>{
        setLoading(true)
        try {
            let res = await axios.get(`http://localhost:6600/api/rooms${path}`)
            let roomData = await res.data
             setData(roomData)
             setLoading(false)
        } catch (error) {
             setError(error)
             setLoading(false)
        }
      }
      featchData();
    },[path])

    return {data,loading,error}
   
}

export default useFeatch;