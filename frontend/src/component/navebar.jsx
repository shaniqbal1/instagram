import React from "react";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();

  return (
    <div className="flex justify-between items-center px-6 py-3 bg-white shadow">

      <h1 className="font-bold text-xl">MyApp</h1>

      <div className="flex gap-4">

        <button onClick={() => navigate("/dashboard")}>
          Home
        </button>

        <button
          onClick={() => navigate("/profile")}
          className="bg-indigo-600 text-white px-3 py-1 rounded"
        >
          Profile
        </button>

      </div>

    </div>
  );
};

export default Navbar;