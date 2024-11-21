import React from "react";
import { useNavigate } from "react-router-dom";

const HomeSection = () => {
  const navigate = useNavigate("");

  return (
    <div
      className="h-screen flex px-72 items-center gap-10"
      style={{
        backgroundImage: `url("./Violet-27.jpg")`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <button
        className="px-10 py-2 bg-orange-600/80  font-semibold text-white rounded-md hover:rounded-xl hover:tracking-widest transition-all duration-200"
        onClick={() => navigate("/register")}
      >
        Register
      </button>
      <button
        className="px-10 py-2 bg-orange-600/80  font-semibold text-white rounded-md hover:rounded-xl hover:tracking-widest transition-all duration-200"
        onClick={() => navigate("/login")}
      >
        Login
      </button>
    </div>
  );
};

export default HomeSection;
