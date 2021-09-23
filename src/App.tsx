import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Home from "./Components/Home";
import { BrowserRouter, Route } from "react-router-dom";
import { DetailsPage } from "./Components/DetailsPage";

function App() {
  return (
    <BrowserRouter>
      <Route exact path="/" component={Home} />
      <Route exact path="/details/:id" component={DetailsPage} />
    </BrowserRouter>
  );
}

export default App;
