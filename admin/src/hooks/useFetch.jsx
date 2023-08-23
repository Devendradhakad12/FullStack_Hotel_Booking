import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../context/AuthContext";

 export const useFetch = (url) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const {token} = useContext(AuthContext)
  const config = {
    headers: {
      "auth-token": token,
    },
  };
//console.log(url)
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const res = await axios.get(`http://localhost:6600/api${url}`,config);
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

 