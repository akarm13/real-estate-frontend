import { useState } from "react";
import reactLogo from "./assets/react.svg";

import { Route, Routes, useLocation, useNavigation } from "react-router-dom";
import { Home } from "../routes/home/Home";
import { Navigation } from "../components/Navigation";
import { ScrollToTop } from "../components/ScrollToTop";
import { Register } from "../routes/auth/Register";
import { Login } from "../routes/auth/Login";
import { Search } from "../routes/search/Search";
// <<<<<<< HEAD
import House from "../routes/housedetail/House";
// =======
import { Footer } from "../components/Footer";
// >>>>>>> db782115eb3de6ac963258e652dd888c8b3fd4df

function App() {
  const location = useLocation();

  const [user, setUser] = useState(null);

  console.log(user);

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
        <Route path="/search" element={<Search />} />
        <Route path="/houses/:houseId" element={<House/>}/>
      </Routes>
      {!isAuthPage && <Footer />}
    </main>
  );
}

export default App;
