import React from "react";
interface Html {
  html: string;
  scripts: Array<string>;
  css: string;
}

export function Html({ html, scripts, css }: React.PropsWithChildren<Html>) {
  return (
    <html>
      <head>
        <meta charSet="UTF-8" />
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
        <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
        <title>React Starter Pack</title>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/icon?family=Material+Icons"
        />
        <style id="jss-server-side" dangerouslySetInnerHTML={{ __html: css }} />
      </head>
      <body>
        <div id="root" dangerouslySetInnerHTML={{ __html: html }} />
        {scripts.map((script, index) => (
          <script src={script} key={index} />
        ))}
      </body>
    </html>
  );
}
