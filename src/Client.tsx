import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "@material-ui/core";

import { App } from "App";

import theme from "./theme";

const entryBlock = document.getElementById("root");
const renderFunction: ReactDOM.Renderer = entryBlock.hasChildNodes()
  ? ReactDOM.hydrate
  : ReactDOM.render;

function Main() {
  React.useEffect(() => {
    const jssStyles = document.querySelector("#jss-server-side");
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }, []);

  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    </BrowserRouter>
  );
}

renderFunction(<Main />, entryBlock);
