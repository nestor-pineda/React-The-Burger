import { useEffect, useState } from "react";

const useFetch = (url) => {
  const [apiData, setApiData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const abortCont = new AbortController();

    fetch(url, { signal: abortCont.signal })
      .then((res) => {
        if (!res.ok) {
          throw Error("No hemos podido encontrar esa data");
        }
        return res.json();
      })
      .then((data) => {
        setApiData(data);
        setLoading(false);
        setError(null);
      })
      .catch((error) => {
        if (error.name === "AbortError") {
          console.log("fetch aborted");
        } else {
          setLoading(false);

          setError(error.message);
        }
      });
  }, [url]);

  return { apiData, loading, error };
};

export default useFetch;
