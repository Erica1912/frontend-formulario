import useFetch from "./hooks/FetcHook";
import Formulario from "./components/Formulario";
import "bootstrap/dist/css/bootstrap.min.css";

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
      <div className="container mt-5">
        <Formulario />
      </div>

      <div>
        <table class="table table-bordered">
          <thead>
            <tr>
              <th scope="col">Nombre Completo</th>
              <th scope="col">Email</th>
            </tr>
          </thead>
          <tbody>
            {response.map((item) => (
              <tr>
                <td>
                  <div key={item.id}>{item.name}</div>
                </td>
                <td>
                  <div key={item.id}>{item.email}</div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );

  /*
  const { response, error, isLoading } = useFetch("/users/1", null, {});
  if (isLoading) {
    return <h1>Cargando sitio...</h1>;
  }
  if (error) {
    return <h1>{error.toString()}</h1>;
  }
  return <div>Hola, {response.name}</div>;
  */
}
export default App;
