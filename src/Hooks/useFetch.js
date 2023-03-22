import { useEffect, useState } from "react";

const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [isLoading, setLoading] = useState(true);
  useEffect(() => {
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
      });
  }, []);
  return { data, isLoading }
};

export default useFetch;