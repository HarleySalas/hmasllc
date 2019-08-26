import React, { useState, useEffect } from "react";

let checkFetch = function(res) {
  if (!res.ok) {
    throw Error(res);
  }
  return res;
};

const useFetch = (url, options) => {
  const [response, setResponse] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(url, options);
        const json = await res.json();
        checkFetch(res);
        setResponse(json);
      } catch (error) {
        setError(error);
      }
    };
    fetchData();
  }, []);
  return { response, error };
};

export default useFetch;
