import { useState } from "react";
import reactLogo from "./assets/react.svg";

import { Route, Routes, useLocation, useNavigation } from "react-router-dom";
import { Home } from "../routes/home/Home";
import { Navigation } from "../components/Navigation";
import { ScrollToTop } from "../components/ScrollToTop";
import { Register } from "../routes/auth/Register";
import { Login } from "../routes/auth/Login";
import { Search } from "../routes/search/Search";

function App() {
  const location = useLocation();

  const [user, setUser] = useState(null);

  console.log(user);

  return (
    <main className="bg-[#FEFEFF] font-sans">
      {location.pathname === "/register" || location.pathname === "/login" ? (
        ""
      ) : (
        <Navigation />
      )}

      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register></Register>} />
        <Route path="/login" element={<Login />} />
        <Route path="/search" element={<Search />} />
      </Routes>
    </main>
  );
}

export default App;
