import { render } from "@testing-library/react";
import React from "react";

function FetchHook() {
  const url = "http://localhost:3000/users";
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      for (let i = 0; i < data.length; i++) {
        console.log(data[i]);
      }
    })
    .catch((err) => console.log(err));

  return (
    <div>
      <h1>otro</h1>
    </div>
  );
}

export default FetchHook;
