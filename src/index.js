import React from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import store from "./app/store";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import "./index.css";

import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";

import Sign from "./components/Sign";
import Page from "./components/Page";
import RequestList from "./features/request/RequestList";
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
            <Route path="sign" element={<Sign />} />
            <Route path="public" element={<Page to="/public" />}>
              <Route
                path="intangible"
                element={<RequestList scope="public" type="intangible" />}
              />
              <Route
                path="tangible"
                element={<RequestList scope="public" type="tangible" />}
              />
            </Route>
            <Route path="followed" element={<Page to="/followed" />}>
              <Route
                path="intangible"
                element={<RequestList scope="followed" type="intangible" />}
              />
              <Route
                path="tangible"
                element={<RequestList scope="followed" type="tangible" />}
              />
            </Route>
            <Route path="self" element={<Page to="/self" />}>
              <Route
                path="intangible"
                element={<RequestList scope="self" type="intangible" />}
              />
              <Route
                path="tangible"
                element={<RequestList scope="self" type="tangible" />}
              />
            </Route>
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
            <Route path="edit" element={<Outlet />}>
              <Route path="intangible/:requestId" element={null} />
              <Route path="tangible/:requestId" element={null} />
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
