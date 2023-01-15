import { useState } from "react";
import reactLogo from "./assets/react.svg";

import { Route, Routes } from "react-router-dom";
import { Home } from "../routes/home/Home";
import { Navigation } from "../components/Navigation";
import { ScrollToTop } from "../components/ScrollToTop";

function App() {
  return (
    <main className="bg-[#FEFEFF] font-sans">
      <Navigation />
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </main>
  );
}

export default App;
