import { useEffect, useState } from "react";
import axios, { AxiosRequestConfig } from "axios";
import { RandomUser } from "../../types/apis";

export default function useRandomData() {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [results, setResults] = useState<RandomUser[] | []>([]);

  const getRandomData = async (config: AxiosRequestConfig<any>) => {
    try {
      const result = await axios(config);
      setResults(result.data);
      setError(false);
      return setLoading(false);
    } catch (error) {
      setError(true);
      return setLoading(false);
    }
  };

  useEffect(() => {
    // Note to self:
    //
    // https://github.com/Kinzume/user-dashboard/commit/b3682631812154dde3f7cad97ba98a3c62f29fdc#diff-a079ea34e2158b53b71d9fd436255ac7e3d99808451944df6bdfe16ad5b711a5
    // Bug: In React Strict Mode when useEffect is called twice, the `error` state is left `true`,
    // causing the React to show the error Skeleton UI instead of displaying the results
    //
    // I think this happens because `error` and `loading` are each set twice,
    // and the two axios calls are queued behind setting the state
    // When the first axios call is aborted, the `error` is set to `true` as per the `catch` block
    // The second axios call successfully sets the `results` but there's no `setError(false)` in the `then` block

    const controller = new AbortController();
    const signal = controller.signal;
    const config = {
      method: "get",
      url: "https://random-data-api.com/api/v2/users?size=5&response_type=json",
      headers: {},
      signal: signal,
    };
    getRandomData(config);

    return () => controller.abort();
  }, []);

  return { loading, error, results };
}
