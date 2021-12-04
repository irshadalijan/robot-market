import { useState, useEffect } from "react";
import appConstants from "./appConstants";

export default function useCallApi(param: string) {
  const [data, setData] = useState([] as any);
  const [isLoaded, setIsLoaded] = useState(false);
  const [error, setError] = useState("");
  const url = `${appConstants.apiBaseUrl}${param}`;

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then(
        (result) => {
          setData(result.data);
          setIsLoaded(true);
        },
        (err) => {
          setError("Data Cannnot be Fetched");
          setIsLoaded(true);
        }
      );
    return () => {
      setIsLoaded(false);
    };
  }, [url]);

  return { error, isLoaded, data };
}
