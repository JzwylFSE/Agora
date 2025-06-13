"use client";
import { useState, useContext } from "react";
import { logoutUser } from "../app/api";
import { AuthContext } from "@/context/AuthContext";

export default function LogoutButton() {
  const [message, setMessage] = useState("");
  const { setIsAuthenticated } = useContext(AuthContext);

  const handleLogout = async () => {
    const result = await logoutUser();
    if (result && result.message) {
      setIsAuthenticated(false); // Update auth state!
      setMessage("Logged out successfully!");
    } else {
      setMessage(
        result && result.error ? result.error.toString() : "An error occurred"
      );
    }
  };

  return (
    <div>
      <button
        onClick={handleLogout}
        className="bg-red-500 text-white p-2 rounded"
      >
        Logout
      </button>
      {message && <p className="mt-2 text-red-500">{message}</p>}
    </div>
  );
}
