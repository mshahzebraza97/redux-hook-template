import React from "react";
import { StoreProvider } from "./store/StoreCtx";
import ReactDOM from "react-dom";
import { initialState, bookTableReducer } from "./store/bookTableReducer";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

ReactDOM.render(
  <React.StrictMode>
    <StoreProvider initialState={initialState} reducer={bookTableReducer}>
      <App />
    </StoreProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
