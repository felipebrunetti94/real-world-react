import React from "react";
import ReactDOM from "react-dom";
import App from "./view/App";
import reportWebVitals from "./reportWebVitals";
import * as container from "./container";

const getInitialState = () => ({});
const storage = getInitialState();

ReactDOM.render(
  <React.StrictMode>
    <App storage={storage} container={container} />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
