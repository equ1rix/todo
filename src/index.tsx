import React from "react";
import ReactDOM from "react-dom/client";

import { Provider } from "react-redux";

import store from "./redux/store";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { ModalContextProvider } from "./context/ModalTaskContext";
import { ModalDetailsContextProvider } from "./context/ModalTaskDetailsContext";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <Provider store={store}>
    <React.StrictMode>
      <ModalDetailsContextProvider>
        <ModalContextProvider>
          <App />
        </ModalContextProvider>
      </ModalDetailsContextProvider>
    </React.StrictMode>
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
