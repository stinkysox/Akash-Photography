import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Formsection from "./components/FormSection/FormSection";
const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/form" element={<Formsection />} />
    </Routes>
  );
};

export default App;
