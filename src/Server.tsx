import fs from "fs";
import express from "express";
import React from "react";
import ReactDOMServer from "react-dom/server";
import { StaticRouter } from "react-router";
import { ServerStyleSheets, ThemeProvider } from "@material-ui/core";

import { App } from "App";
import { Html } from "./Html/Server";

import theme from "./theme";

const port = 3000;
const server = express();
const jsFiles: Array<string> = [];

fs.readdirSync("./dist/assets").forEach((file) => {
  if (file.split(".").pop() === "js") jsFiles.push("/assets/" + file);
});

server.use("/assets", express.static("./dist/assets"));

server.get("*", async (req, res) => {
  const sheets = new ServerStyleSheets();
  const html = ReactDOMServer.renderToStaticMarkup(
    sheets.collect(
      <ThemeProvider theme={theme}>
        <StaticRouter location={req.url} context={{}}>
          <App />
        </StaticRouter>
      </ThemeProvider>
    )
  );
  const css = sheets.toString();

  return ReactDOMServer.renderToNodeStream(
    <Html scripts={jsFiles} css={css} html={html} />
  ).pipe(res);
});

server.listen(port, () => console.log(`Listening on port ${port}`));
