import { useEffect, useState } from "react";
import axios from "axios";
import { RandomUser } from "../../types/apis";

export default function useRandomData() {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [results, setResults] = useState<RandomUser[] | []>([]);
  useEffect(() => {
    setError(false);
    setLoading(true);
    const config = {
      method: "get",
      url: "https://random-data-api.com/api/v2/users?size=5&response_type=json",
      headers: {},
    };
    axios(config)
      .then((response) => {
        console.log(response.data);
        setResults(response.data);
        return setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        return setError(true);
      });
  }, []);
  return { loading, error, results };
}
