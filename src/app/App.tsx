import { useState } from "react";
import reactLogo from "./assets/react.svg";

import { Route, Routes, useLocation, useNavigation } from "react-router-dom";
import { Home } from "../routes/home/Home";
import { Navigation } from "../components/Navigation";
import { ScrollToTop } from "../components/ScrollToTop";
import { Register } from "../routes/register/Register";

function App() {
  const location = useLocation()


  return (
    <main className="bg-[#FEFEFF] font-sans">
      {
        location.pathname === "/register/sign-in" || location.pathname === "/register/sign-up" ? '' : <Navigation />
      }

      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register/sign-in" element={<Register />} />
        <Route path="/register/sign-up" element={<Register />} />
      </Routes>
    </main>
  );
}

export default App;
