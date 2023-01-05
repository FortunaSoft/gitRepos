import React from "react";
import { Routes, Route, Router, BrowserRouter } from "react-router-dom";
import ReposPage from "./pages/ReposPage";

import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ReposPage />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
