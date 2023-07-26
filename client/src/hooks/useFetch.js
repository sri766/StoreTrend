import { useState, useEffect } from "react"; 
import { makeRequest } from "../makeRequest";
 

const useFetch = (url)=>{

    const [data, setData] = useState(null)
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(false)



    useEffect(() => {
        const fetchProduct = async () => {
          try {
            setLoading(true)
            const res = await makeRequest.get(url,
              {
                headers: {
                  Authorization: "bearer " + process.env.REACT_APP_ACCESS_TOKEN,
                },
              }
            );
            setData(res.data.data);
          } catch (err) {
            setError(true);
          }
          setLoading(false);
        }
        fetchProduct();
      }, [url])

        return {data, loading, error};
}

export default useFetch;