import React from 'react'


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
 const useFetch = (url, options = {}) => {
  const [response, setResponse] = React.useState(null)
  
  const [error, setError] = React.useState(null)
  
  const [isLoading, setIsLoading] = React.useState(false)
  
  React.useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true)
      
      try {
        const res = await fetch(url, options)
        
        const json = await res.json()
        
        setResponse(json)
        setIsLoading(false)
        
      } catch (error) {
        setError(error);
        setIsLoading(false)
      }
    };
    
    fetchData()
  }, [])
  
  return { response, error, isLoading }
}

export default useFetch