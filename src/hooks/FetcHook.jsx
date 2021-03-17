import React from "react";
import Config from "../config";
/**
 * Custom hook for fetching data
 * @param {string} url - Url to fetch
 * @param {options} [options={}] - Fetch options
 *
 * @returns {{response, error, loading}} - State data
 *
 * @example
 * function App() {
 *  const res = useFetch('https://dog.ceo/api/breeds/image/random')
 *
 *  if (!res.response) {
 *    return <div>Loading...</div>
 *  }
 *
 *  const {status: name, message: url} = res
 *
 *  return (
 *     <div className="App">
 *       <div>
 *         <h3>{dogName}</h3>
 *           <div>
 *           <img src={imageUrl} alt="avatar" />
 *         </div>
 *       </div>
 *     </div>
 *   );
 * }
 */
const useFetch = (url, options, initialValue) => {
  const [response, setResponse] = React.useState(initialValue);

  const [error, setError] = React.useState(null);

  const [isLoading, setIsLoading] = React.useState(false);

  React.useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);

      try {
        const res = await fetch(`${Config.baseUrl}${url}`, options);

        const json = await res.json();

        setResponse(json);
        setError(null);
        setIsLoading(false);
      } catch (error) {
        setResponse(null);
        setError(error);
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  return { response, error, isLoading };
};

export default useFetch;
