import { useState, useEffect } from 'react';

const useApi = (path) => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);

    fetch(path)
    .then(res => res.json())
    .then(res => {
      setData(res)
      setIsLoading(false);
    });
  }, [path])

  return {
    isLoading,
    data
  };
}

export default useApi;
