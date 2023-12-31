import * as React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";

export default (initialState, el) => {
  ReactDOM.render(<App {...initialState} />, el);
};
