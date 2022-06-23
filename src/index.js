import React from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import store from "./app/store";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import "./index.css";

import {
  BrowserRouter,
  Routes,
  Route,
  Outlet,
  Navigate,
} from "react-router-dom";

import Sign from "./components/Sign";
import Page from "./components/Page";
import RequestList from "./features/request/RequestList";
import IntangiblePage from "./features/request/intangible/IntangiblePage";
import TangiblePage from "./features/request/tangible/TangiblePage";
import AddRequest from "./features/request/AddRequest";
import SetIntangible from "./features/request/intangible/SetIntangible";
import SetTangible from "./features/request/tangible/SetTangible";
import Edit from "./components/Edit";

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
                index
                element={<Navigate to="/public/intangible" replace />}
              />
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
                index
                element={<Navigate to="/followed/intangible" replace />}
              />
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
                index
                element={<Navigate to="/self/intangible" replace />}
              />
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
              <Route path="intangible/:requestId" element={<Outlet />}>
                <Route index element={<IntangiblePage />} />
                <Route path="edit" element={<Edit type="intangible" />} />
              </Route>
              <Route path="tangible/:requestId" element={<Outlet />}>
                <Route index element={<TangiblePage />} />
                <Route path="edit" element={<Edit type="tangible" />} />
              </Route>
            </Route>
            <Route path="add" element={<AddRequest />}>
              <Route
                index
                element={<Navigate to="/add/intangible" replace />}
              />
              <Route path="intangible" element={<SetIntangible />} />
              <Route path="tangible" element={<SetTangible />} />
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
