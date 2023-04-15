import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useRoutes,
  useLocation,
} from "react-router-dom";

import { Home } from "../routes/home/Home";
import { Navigation } from "../components/Navigation";
import { ScrollToTop } from "../components/ScrollToTop";
import { Register } from "../routes/auth/Register";
import { Login } from "../routes/auth/Login";
import { Search } from "../routes/search/Search";
import { Details } from "../routes/listings/Details";
import { Footer } from "../components/Footer";
import { Agent } from "../routes/agents/Agent";

import { GuestRoute } from "../components/GuestRoute";
import { useSetUserFromLocalStorage } from "../hooks/useSetUserFromLocalStorage";

function App() {
  const routes = useRoutes([
    { path: "/", element: <Home /> },
    {
      path: "/register",
      element: <GuestRoute />,
      children: [{ index: true, element: <Register /> }],
    },
    {
      path: "/login",
      element: <GuestRoute />,
      children: [{ index: true, element: <Login /> }],
    },
    { path: "/search", element: <Search /> },
    { path: "/listings/:id", element: <Details /> },
    { path: "/agents", element: <Agent /> },
  ]);

  const location = useLocation();

  const isAuthPage =
    location.pathname.includes("login") ||
    location.pathname.includes("register");

  const { trigger, isLoading } = useSetUserFromLocalStorage();

  // Don't trigger the hook if we're on the auth page

  useEffect(() => {
    if (!isAuthPage) {
      trigger();
    }
  }, [trigger, isAuthPage]);

  return (
    <main className="bg-[#FEFEFF] font-sans">
      {!isAuthPage && <Navigation />}

      <ScrollToTop />
      {routes}
      {!isAuthPage && <Footer />}
    </main>
  );
}

export default App;
