import useFetch from "./hooks/FetcHook";
import Formulario from "./components/Formulario"


function App() {
  const { response, error, isLoading } = useFetch("/users", null, []);
  if (isLoading) {
    return <h1>Cargando sitio...</h1>;
  }
  if (error) {
    return <h1>{error.toString()}</h1>;
  }

  return (
    <div className="App">
      <header className="App-header"></header>
      <div className= "container mt-5">
          <Formulario/>
      </div>
      
      <div>
        {response.map((item) => (
          <div key={item.id}>{item.name}</div>
        ))}
      </div>
    </div>
  ); /*
  const { response, error, isLoading } = useFetch("/users/1", null, {});
  if (isLoading) {
    return <h1>Cargando sitio...</h1>;
  }
  if (error) {
    return <h1>{error.toString()}</h1>;
  }
  return <div>Hola, {response.name}</div>;*/
}
export default App;
