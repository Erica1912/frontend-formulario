import useFetch from "../hooks/FetcHook";
import Formulario from "../components/Formulario";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

const HomeView = () => {
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
        <table className="table table-bordered">
          <thead>
            <tr>
              <th scope="col">Nombre Completo</th>
              <th scope="col">Email Usuario</th>
            </tr>
          </thead>
          <tbody>
            {response.map((item) => (
              <tr>
                <td>
                  <div key={item.id}>
                    <Link to={`/components/${item.id}`}>{item.name}</Link>
                  </div>
                </td>
                <td>
                  <div key={item.id}>
                    <Link>{item.email}</Link>
                  </div>
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
};
export default HomeView;
