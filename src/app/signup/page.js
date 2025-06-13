"use client";

import Link from "next/link";
import React, { useState } from "react";
import { registerUser } from "../api";
import { useRouter } from "next/navigation";

export default function SignupPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const router = useRouter();

  const handleSignup = async (e) => {
    e.preventDefault();
    const result = await registerUser(email, password);

    if (result.message) {
      setMessage("Registration successful! Redirecting to login...");
      setTimeout(() => {
        router.push("/login");
      }, 2000);
    } else {
      setMessage(result.error ? result.error.toString() : "Registration failed");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-[#f2e2d2]">
      <div className="bg-white p-8 shadow-lg rounded-lg w-full max-w-md">
        <h2 className="text-2xl font-bold text-[#4a7c59] mb-6">Sign Up for Agora</h2>
        <form onSubmit={handleSignup}>
          <div className="mb-4">
            <label className="block text-[#1e1014] mb-2" htmlFor="email">
              Email
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
          <div className="mb-4">
            <label className="block text-[#1e1014] mb-2" htmlFor="password">
              Password
            </label>
            <input
              type="password"
              id="password"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#4a7c59]"
              placeholder="Create a password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-[#4a7c59] text-[#f2e2d2] py-2 rounded-lg hover:bg-[#1e1014]"
          >
            Sign Up
          </button>
        </form>
        {message && (
          <div
            className={`mt-2 p-2 rounded ${
              message.toLowerCase().includes("success")
                ? "bg-green-100 text-green-800"
                : "bg-red-100 text-red-800"
            }`}
          >
            {message}
          </div>
        )}
        <p className="mt-4 text-center text-[#1e1014]">
          Already have an account?{" "}
          <Link href="/login" className="text-[#4a7c59] hover:underline">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
}