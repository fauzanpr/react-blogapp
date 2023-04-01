import { useEffect, useState } from "react";

const useFetch = (url) => {
  const abortCont = new  AbortController();
  const [data, setData] = useState(null);
  const [isLoading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  useEffect(() => {
    setInterval(() => {
      fetch(url)
        .then((res) => {
          if (res.status === 404) {
            return false;
          }
          return res.json();
        })
        .then((data) => {
          setLoading(false);
          setData(data);
        })
        .catch((err) => {
          setError(err.message);
          setLoading(false);
        });
    }, 1000);
  }, [url]);
  return { data, isLoading, error };
};

export default useFetch;
