import React from "react";
import ReactDOM from "react-dom/client";

import { Provider } from "react-redux";

import store from "./redux/store";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { ModalContextProvider } from "./context/ModalTaskContext";
import { ModalDetailsContextProvider } from "./context/ModalTaskDetailsContext";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Homepage from "./pages/Homepage";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <Provider store={store}>
    <React.StrictMode>
      <BrowserRouter>
        <ModalDetailsContextProvider>
          <ModalContextProvider>
            <Routes>
              <Route path="/" element={<Navigate to="/homepage" />} />
              <Route path="/homepage" element={<Homepage />} />
            </Routes>
          </ModalContextProvider>
        </ModalDetailsContextProvider>
      </BrowserRouter>
    </React.StrictMode>
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
