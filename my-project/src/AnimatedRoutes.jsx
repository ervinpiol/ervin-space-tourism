import React, { useState, useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import DotLoader from "react-spinners/DotLoader";

import Home from "./pages/Home";
import Destinations from "./pages/Destinations";
import CrewPage from "./pages/CrewPage";
import TechnologyPage from "./pages/TechnologyPage";

const AnimatedRoutes = () => {
  const [loading, setLoading] = useState(false);
  const [loadedPages, setLoadedPages] = useState([]);
  const location = useLocation();

  useEffect(() => {
    if (!loadedPages.includes(location.pathname)) {
      setLoading(true);
      const timeout = setTimeout(() => {
        setLoading(false);
        setLoadedPages((prev) => [...prev, location.pathname]);
      }, 500);
      return () => clearTimeout(timeout);
    }
  }, [location, loadedPages]);

  return (
    <>
      {loading && (
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-darkBlue z-[999] flex-col gap-10">
          <h1 className="text-2xl font-Bellefair text-white font-bold">
            LOADING PLEASE WAIT
          </h1>
          <DotLoader color={"#fff"} loading={loading} size={50} />
        </div>
      )}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/destinations" element={<Destinations />} />
        <Route path="/crew" element={<CrewPage />} />
        <Route path="/technology" element={<TechnologyPage />} />
      </Routes>
    </>
  );
};

export default AnimatedRoutes;
