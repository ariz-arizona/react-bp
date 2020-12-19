import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { App } from "App";

const entryBlock = document.getElementById("root");
const renderFunction: ReactDOM.Renderer = entryBlock.hasChildNodes()
  ? ReactDOM.hydrate
  : ReactDOM.render;

function Main() {
  React.useEffect(() => {
    const jssStyles = document.querySelector("#jss-server-side");
    if (jssStyles) {
      // jssStyles.parentElement.removeChild(jssStyles);
    }
  }, []);

  return (
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );
}

renderFunction(<Main />, entryBlock);
