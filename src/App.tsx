import React from "react";
import { Routes, Route, Router, BrowserRouter } from "react-router-dom";
import ReposPage from "./pages/ReposPage";
import RepoPreview from "./pages/RepoPreview";

import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ReposPage />} />
        <Route path="/preview/:owner/:repo" element={<RepoPreview />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
