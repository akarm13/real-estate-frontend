import { useEffect } from "react";
import { useLocation, useRoutes } from "react-router-dom";

import { Footer } from "../components/Footer";
import { Navigation } from "../components/Navigation";
import { ScrollToTop } from "../components/ScrollToTop";
import { Agents } from "../routes/agents/Agents";
import { Login } from "../routes/auth/Login";
import { Register } from "../routes/auth/Register";
import { Home } from "../routes/home/Home";
import { ListingDetails } from "../routes/listings/ListingDetails";
import { Search } from "../routes/search/Search";

import { Toaster } from "react-hot-toast";
import { GuestRoute } from "../components/GuestRoute";
import { useSetUserFromLocalStorage } from "../hooks/useSetUserFromLocalStorage";
import { Map } from "../routes/listings/map/Map";
import { CreateListing } from "../routes/listings/create/CreateListing";
import { Profile } from "../routes/profile/Profile";
import { EditProfile } from "../routes/profile/EditProfile";
import { MyListings } from "../routes/profile/MyListings";
import { MyFavorites } from "../routes/profile/MyFavorites";
import { AccountSettings } from "../routes/profile/AccountSettings";

import { AnimatePresence } from "framer-motion";
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
    { path: "/map", element: <Map /> },
    { path: "/listings/create", element: <CreateListing /> },
    { path: "/listings/:id", element: <ListingDetails /> },
    { path: "/agents", element: <Agents /> },

    {
      path: "/profile",
      element: <Profile />,

      children: [
        { path: "edit", element: <EditProfile /> },
        { path: "listings", element: <MyListings /> },
        { path: "favorites", element: <MyFavorites /> },
        { path: "settings", element: <AccountSettings /> },
      ],
    },
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
      <Toaster />
      <AnimatePresence>{routes}</AnimatePresence>
      {!isAuthPage && <Footer />}
    </main>
  );
}

export default App;
