import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import RegisterPage from "./pages/registerPage";
import "./index.css";
import LoginPage from "./pages/loginPage";
import VioletPage from "./pages/violetPage";
import HomePage from "./pages/homePage";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Router>
      <Routes>
        <Route
          path="*"
          element={
            <div className="flex justify-center items-center h-screen bg-neutral-900">
              <h1 className="text-5xl text-white font-bold">
                YOUR PAGE NOT FOUND 404
              </h1>
            </div>
          }
        />
        <Route path="/" element={<HomePage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/violet" element={<VioletPage />} />
      </Routes>
    </Router>
  </StrictMode>
);
