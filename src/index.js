import React from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import store from "./app/store";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import "./index.css";

import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";

import Public from "./components/Public";
import Followed from "./components/Followed";
import Self from "./components/Self";

import Intangible from "./features/request/intangible/Intangible";
import Tangible from "./features/request/tangible/Tangible";
import IntangiblePage from "./features/request/intangible/IntangiblePage";
import TangiblePage from "./features/request/tangible/TangiblePage";

import AddRequest from "./features/request/AddRequest";
import AddIntangible from "./features/request/intangible/AddIntangible";
import AddTangible from "./features/request/tangible/AddTangible";

const container = document.getElementById("root");
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />}>
            <Route path="public" element={<Public />}>
              <Route path="intangible" element={<Intangible />} />
              <Route path="tangible" element={<Tangible />} />
            </Route>
            <Route path="followed" element={<Followed />} />
            <Route path="self" element={<Self />} />
            <Route path="request" element={<Outlet />}>
              <Route
                path="intangible/:requestId"
                element={<IntangiblePage />}
              />
              <Route path="tangible/:requestId" element={<TangiblePage />} />
            </Route>
            <Route path="add" element={<AddRequest />}>
              <Route path="intangible" element={<AddIntangible />} />
              <Route path="tangible" element={<AddTangible />} />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
