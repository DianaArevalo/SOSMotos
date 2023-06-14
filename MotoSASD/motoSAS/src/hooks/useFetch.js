// import { useState, useEffect } from 'react';


// const useFetch = (url) => {
//   const [data, setData] = useState(null);
//   const [isLoading, setIsLoading] = useState(false);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const fetchData = async () => {
//       setIsLoading(true);
//       try {
//         const res = await request.get(url);
//         setData(res.data.data);
//       } catch (error) {
//         setError(error);
//       }
//       setIsLoading(false);
//     };
//     fetchData();
//   }, [url]);

//   return { data, isLoading, error };
// };

// export default useFetch;

import { useState, useEffect } from 'react'

export default function useFetch (url) {
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);


useEffect (() => {
  (async () =>{
    try {
      const res = await fetch(url);
      const json = await res.json();
      setResult(json);
      setLoading(false);
    } catch (err){
      setError(err);
      setLoading(false)
    }
  })();
},[url]);

return {loading, result, error};

}
