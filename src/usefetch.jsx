
import { useEffect, useState } from "react";
const useFetch = (url) => {
  const [data, setData] = useState(null);

  const [dummy, setDummy] = useState(true);

  const [error, setError] = useState(null);

  useEffect(() => {
    (setTimeout(() => {
      fetch(url)
        .then((response) => {
          if (!response.ok) {
            throw Error("Could't retrive data");
          }
          return response.json();
        })
        .then((data) => setData(data))
        .catch((error) => {
          console.log(error.message);
          setError(error.message);
        });
    }),
      1000);
  }, []);
  return [data ,dummy,error]







};

export default useFetch;
