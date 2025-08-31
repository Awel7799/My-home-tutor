"use client"; 

import Link from "next/link";
export default function Navbar() {
  return (
    <nav className="flex items-center justify-between px-4 sm:px-8 py-4 shadow-md bg-white">
      {/* Logo */}
      <h1 className="text-2xl font-bold italic text-black tracking-tight">
        ScholarMatch
      </h1>

      {/* Navigation Links */}
      <ul className="flex items-center gap-6 text-base font-medium text-gray-700">
        <li className="hover:text-blue-600 transition-colors cursor-pointer">
          Find Tutor
        </li>

        {/* Become Tutor: hidden on small screens, visible on md+ */}
        <li className="hidden md:block hover:text-blue-600 transition-colors cursor-pointer">
          Become Tutor
        </li>

        <li>
          <Link href="/auth/sign-up">
            <button className="px-4 py-2 border rounded-xl bg-blue-200 text-black hover:bg-blue-300 transition-colors shadow-sm">
              Login / Signup
            </button>
          </Link>
        </li>
      </ul>
    </nav>
  );
}
