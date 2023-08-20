import axios from "axios";
import { useEffect, useState } from "react";

 export const useFetch = (url) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
//console.log(url)
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const res = await axios.get(`http://localhost:6600/api/${url}`);
        setData(res.data);
        setLoading(false);
      } catch (error) {
        setError(error.message)
        setLoading(false);
      }
    };
    
    fetchData();
  }, [url]);
  return { data, loading, error };
};

 