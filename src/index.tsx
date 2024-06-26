import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";

import store, { persistor } from "src/redux/store";
import { PersistGate } from "redux-persist/integration/react";
import reportWebVitals from "./reportWebVitals";

import "./index.css";
import { ModalContextProvider } from "src/context/ModalTaskContext";
import { ModalDetailsContextProvider } from "src/context/ModalTaskDetailsContext";
import { HashRouter, Navigate, Route, Routes } from "react-router-dom";
import Homepage from "./pages/homepage";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <HashRouter>
          <ModalDetailsContextProvider>
            <ModalContextProvider>
              <Routes>
                <Route path="/" element={<Navigate to="/homepage" />} />
                <Route path="/homepage" element={<Homepage />} />
              </Routes>
            </ModalContextProvider>
          </ModalDetailsContextProvider>
        </HashRouter>
      </PersistGate>
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
