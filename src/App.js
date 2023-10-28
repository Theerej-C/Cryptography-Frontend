import React from "react";
import { ReactDOM } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import DashBoard from "./component/DashBoard";
import UserLogin from "./component/UserLogin";
import UserRegistration from "./component/UserRegistration";

import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route
            path="register"
            element={<UserRegistration></UserRegistration>}
          />
          <Route path="login" element={<UserLogin></UserLogin>} />
          <Route path="dashboard" element={<DashBoard></DashBoard>}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
