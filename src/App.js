import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./components/homepage/HomePage";
import SearchPage from "./components/mainSearch/SearchPage";
import AboutPage from "./components/poke-info/AboutPage";
import TeamBuilderPage from "./components/team-builder/TeamBuilderPage";
import SharedLayout from "./SharedLayout";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<HomePage />} />
          <Route path="/database" element={<SearchPage />} />
          <Route path="/builder" element={<TeamBuilderPage />} />
          <Route path="/about" element={<AboutPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
