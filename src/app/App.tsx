import { useState } from "react";
import reactLogo from "./assets/react.svg";

import { Route, Routes, useLocation, useNavigation } from "react-router-dom";
import { Home } from "../routes/home/Home";
import { Navigation } from "../components/Navigation";
import { ScrollToTop } from "../components/ScrollToTop";
import { Register } from "../routes/auth/Register";
import { Login } from "../routes/auth/Login";
import { Search } from "../routes/search/Search";
import { Details } from "../routes/listings/Details";
import { Footer } from "../components/Footer";
import {Agent} from "../routes/agents/Agent"

function App() {
  const location = useLocation();

  const [user, setUser] = useState(null);

  // If the current page is the login or register page
  const isAuthPage =
    location.pathname === "/register" || location.pathname === "/login";

  return (
    <main className="bg-[#FEFEFF] font-sans">
      {!isAuthPage && <Navigation />}

      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register></Register>} />
        <Route path="/login" element={<Login />} />
        <Route path="/search?" element={<Search />} />
        <Route path="/listings/:houseId" element={<Details />} />
        <Route path="/agents" element={<Agent/>}/>
      </Routes>
      {!isAuthPage && <Footer />}
    </main>
  );
}

export default App;
