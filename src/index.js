import React from "react";
import ReactDOM from "react-dom";
import App from "./view/App";
import reportWebVitals from "./reportWebVitals";
import * as container from "./container";
import cache from "./infra/cache";

ReactDOM.render(
  <React.StrictMode>
    <App cache={cache} container={container} />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
