import useFetch from "../hooks/FetcHook";
import Formulario from "../components/Formulario";
import "bootstrap/dist/css/bootstrap.min.css";
import React, { Fragment, useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams,
} from "react-router-dom";

const User = () => {
  const { response, error, isLoading } = useFetch("/users", null, []);
  const { id } = useParams();
  console.log(id)
  return (
    <div>
      <Link to={`/components/${response.id}`}>{response.name}</Link>
    </div>
  );
};

export default User;
