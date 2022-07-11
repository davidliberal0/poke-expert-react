import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/homepage/Home";
import SearchPage from "./components/mainSearch/SearchPage";
import AboutPage from "./components/poke-info/AboutPage";
import SharedLayout from "./SharedLayout";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Home />} />
          <Route path="/database" element={<SearchPage />} />
          <Route path="/about" element={<AboutPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
