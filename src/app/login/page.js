"use client";

import Link from "next/link";
import React, { useState, useContext } from "react";
import { loginUser } from "../api";
import { useRouter } from "next/navigation";
import { AuthContext } from "@/context/AuthContext";

export default function LoginPage() {
  const { setIsAuthenticated } = useContext(AuthContext);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const router = useRouter();

  const handleLogin = async (e) => {
    e.preventDefault();
    setMessage("Logging in...");

    try {
      const result = await loginUser(email, password);

      if (result.access_token) {
        setIsAuthenticated(true); // Update auth state here!
        setMessage("Login successful! Redirecting...");
        setTimeout(() => {
          router.push("/");
        }, 1000);
      } else if (result.error) {
        setIsAuthenticated(false);
        setMessage(result.error);
      }
    } catch (error) {
      setIsAuthenticated(false);
      setMessage("Network error. Please try again.");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-[#f2e2d2]">
      <div className="bg-white p-8 shadow-lg rounded-lg w-full max-w-md">
        <h2 className="text-2xl font-bold text-[#4a7c59] mb-6">
          Login to Agora
        </h2>
        {message && (
          <div
            className={`mb-4 p-2 rounded ${
              message.toLowerCase().includes("success")
                ? "bg-green-100 text-green-800"
                : "bg-red-100 text-red-800"
            }`}
          >
            {message}
          </div>
        )}
        <form onSubmit={handleLogin}>
          <div className="mb-4">
            <label className="block text-[#1e1014] mb-2" htmlFor="email">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#4a7c59]"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="mb-6">
            <label className="block text-[#1e1014] mb-2" htmlFor="password">
              Password
            </label>
            <input
              type="password"
              id="password"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#4a7c59]"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-[#4a7c59] text-[#f2e2d2] py-2 rounded-lg hover:bg-[#1e1014]"
          >
            Login
          </button>
        </form>
        <p className="mt-4 text-center text-[#1e1014]">
          Don't have an account?{" "}
          <Link href="/signup" className="text-[#4a7c59] hover:underline">
            Sign Up
          </Link>
        </p>
      </div>
    </div>
  );
}
