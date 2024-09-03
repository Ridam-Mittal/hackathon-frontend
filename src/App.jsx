import React, { useState, useEffect } from "react";
import "./App.css";
import Navbar from "./Navbar";
import Footer from "./Footer.jsx";
import { BrowserRouter } from "react-router-dom";
import AppRoutes from "./AppRoutes.jsx";
import ClipLoader from "react-spinners/ClipLoader";
import './index.css';


function App() {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  // Placeholder for adding routes
  const handleRoutes = () => {
    // Add your route handling logic here
  };

  return (
    <>
      {loading ? (
        <div className="loader-wrapper">
          <ClipLoader color={"#e6c7eb"} loading={loading} size={90} />
        </div>
      ) : (
        <BrowserRouter>
          <Navbar />
          <AppRoutes />
          {/* <Footer /> */}
        </BrowserRouter>
      )}
    </>
  );
}

export default App;
