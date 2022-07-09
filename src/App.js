import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/homepage/Home";
import SearchPage from "./components/mainSearch/SearchPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/database" element={<SearchPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
