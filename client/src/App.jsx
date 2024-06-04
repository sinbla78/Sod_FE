import { Fragment } from "react";
import "./App.css";
import Router from "./Router";
import { GlobalStyle } from "./styles/GlobalStyle";

const App = () => {
  return (
    <Fragment>
      <GlobalStyle />
      <Router />
    </Fragment>
  );
};
export default App;
