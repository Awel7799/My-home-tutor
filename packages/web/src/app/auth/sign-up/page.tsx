"use client";
import { useState } from "react";

export default function AuthCard() {
  const [isLogin, setIsLogin] = useState(true);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    const email = (form.elements.namedItem("email") as HTMLInputElement).value;
    const password = (form.elements.namedItem("password") as HTMLInputElement).value;

    const endpoint = isLogin ? "/api/login" : "/api/signup";

    // Send credentials to backend
    try {
      const res = await fetch(endpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });
      const data = await res.json();
      console.log(data);
      // handle login/signup success or errors
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      <div className="bg-white rounded-2xl shadow-lg w-full max-w-md p-5">
        {/* Toggle Tabs */}
        <div className="flex justify-baseline gap-1 mb-6">
          <button
            onClick={() => setIsLogin(true)}
            className={`px-6 py-2 font-semibold rounded-xs transition ${
              isLogin ? "bg-gray-600 text-white" : "bg-gray-200 text-gray-700"
            }`}
          >
            Login
          </button>
          <button
            onClick={() => setIsLogin(false)}
            className={`px-6 py-2 font-semibold rounded-xs transition ${
              !isLogin ? "bg-gray-600 text-white" : "bg-gray-200 text-gray-700"
            }`}
          >
            Sign Up
          </button>
        </div>

        <h2 className="text-2xl font-bold text-center mb-6">
          {isLogin ? "Login to your account" : "Create a new account"}
        </h2>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <label htmlFor="email" className="font-medium">
            Email
          </label>
          <input
            type="email"
            name="email"
            id="email"
            required
            placeholder="Enter your email"
            className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />

          <label htmlFor="password" className="font-medium">
            Password
          </label>
          <input
            type="password"
            name="password"
            id="password"
            required
            placeholder="Enter your password"
            className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />

          {isLogin && (
            <div className="text-right text-sm">
              <a href="#" className="text-blue-600 hover:underline">
                Forgot password?
              </a>
            </div>
          )}

          <button
            type="submit"
            className="bg-blue-600 text-white font-semibold py-2 rounded-lg hover:bg-blue-700 transition"
          >
            {isLogin ? "Login" : "Sign Up"}
          </button>

          <button
            type="button"
            className="bg-red-500 text-white font-semibold py-2 rounded-lg hover:bg-red-600 transition"
          >
            Continue with Google
          </button>
        </form>
      </div>
    </section>
  );
}
