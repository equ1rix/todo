import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";

import store, { persistor } from "./redux/store";
import { PersistGate } from "redux-persist/integration/react";
import reportWebVitals from "./reportWebVitals";

import "./index.css";
import App from "./App";
import { ModalContextProvider } from "./context/ModalTaskContext";
import { ModalDetailsContextProvider } from "./context/ModalTaskDetailsContext";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <ModalDetailsContextProvider>
          <ModalContextProvider>
            <App />
          </ModalContextProvider>
        </ModalDetailsContextProvider>
      </PersistGate>
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
