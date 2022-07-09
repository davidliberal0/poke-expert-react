import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/homepage/Home";
import SearchPage from "./components/mainSearch/SearchPage";
import AboutPage from "./components/poke-info/AboutPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/database" element={<SearchPage />} />
        <Route path="/about" element={<AboutPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
