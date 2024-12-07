import { useState, useEffect } from "react";

export const useFecth = () => {
  const [isLoading, setLoading] = useState(false);
  const [data, setData] = useState([]);
  const [enpoint, setEnpoint] = useState("");
  const [method, setMethod] = useState("");
  const [token, setToken] = useState("");
  const [body, setBody] = useState({});
  const [response, setResponse] = useState();
  const [isDone, setIsDone] = useState(false);
  const BASE_URL = import.meta.env.VITE_API_URL;

  const fetchData = async () => {
    try {
      let response;
      setLoading(true);
      if (!method || method == "GET") {
        response = await fetch(`${BASE_URL}${enpoint}`, {
          headers: { Authorization: `Bearer ${token}` },
        });
      } else {
        response = await fetch(`${BASE_URL}${enpoint}`, {
          method: method,
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify(body),
        });
      }
      setResponse(response);
      const responseJson = await response.json();
      setData(responseJson);
      setLoading(false);
      setEnpoint("");
    } catch {
      console.error(
        `ERROR IN HOOK USEFETCH IN ENPOINT ${enpoint} USING THE METHOD ${method}`
      );
      return;
    }
  };

  useEffect(() => {
    if (enpoint) {
      const makeFetch = async () => {
        setIsDone(false);
        await fetchData();
        setIsDone(true);
      };
      makeFetch();
    }
  }, [enpoint]);

  return {
    isLoading,
    data,
    setEnpoint,
    setMethod,
    setToken,
    setBody,
    response,
    isDone,
  };
};
