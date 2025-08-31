"use client";
import React, { useState } from "react";
import SearchField from "@/component/searchField";

const SearchPage = () => {
  const [filters, setFilters] = useState({
    subject: "",
    grade: "",
    rate: "",
    location: "",
  });

  const [results, setResults] = useState([
    { id: 1, name: "Sophia Carter" },
    { id: 2, name: "Ethan Walker" },
    { id: 3, name: "Olivia Bennett" },
    { id: 3, name: "Olivia Bennett" },
    { id: 3, name: "Olivia Bennett" },
    { id: 3, name: "Olivia Bennett" },
  ]);

  const [page, setPage] = useState(1);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFilters({ ...filters, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // 🔗 Later: send filters + page to backend API
    console.log("Filters submitted:", filters, "Page:", page);
  };

  return (
    <section className="max-w-7xl mx-auto p-6 grid grid-cols-1 md:grid-cols-4 gap-6">
      {/* Left Sidebar - Filters */}
      <aside className="bg-white p-4 mt-30 rounded-2xl shadow-md border border-gray-300 md:col-span-1">
        <h2 className="text-lg font-semibold mb-4">Filters</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium">Subject</label>
            <input
              type="text"
              name="subject"
              value={filters.subject}
              onChange={handleChange}
              className="w-full mt-1 p-2 border rounded-lg border-gray-300"
              placeholder="e.g. Math, English"
            />
          </div>

          <div>
            <label className="block text-sm font-medium">Grade Level</label>
            <input
              type="number"
              name="grade"
              value={filters.grade}
              onChange={handleChange}
              className="w-full border-gray-300 mt-1 p-2 border rounded-lg"
              placeholder="e.g. 8"
            />
          </div>

          <div>
            <label className="block text-sm font-medium">Hourly Rate ($)</label>
            <input
              type="number"
              name="rate"
              value={filters.rate}
              onChange={handleChange}
              className="w-full border-gray-300 mt-1 p-2 border rounded-lg"
              placeholder="Max hourly rate"
            />
          </div>

          <div>
            <label className="block text-sm font-medium">Location</label>
            <input
              type="text"
              name="location"
              value={filters.location}
              onChange={handleChange}
              className="w-full mt-1 border-gray-300 p-2 border rounded-lg"
              placeholder="e.g. Addis Ababa"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700"
          >
            Apply Filters
          </button>
        </form>
      </aside>

      {/* Main Content - Search + Results */}
      <main className="md:col-span-3 ">
        <div className="mt-[-50] mb-10">
         <SearchField />
        </div>
        {/* Results */}
        <div className="mt-6">
          <h2 className="text-lg font-semibold mb-4">
            {results.length} Tutors Found
          </h2>
          <ul className="space-y-3">
            {results.map((tutor) => (
              <li
                key={tutor.id}
                className="flex justify-between items-center bg-white p-4 rounded-xl shadow-sm border border-gray-300"
              >
                <span className="font-medium">{tutor.name}</span>
                <a
                  href="#"
                  className="text-blue-600 hover:underline text-sm font-medium"
                >
                  View Profile
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Pagination */}
        <div className="flex items-center justify-center space-x-3 mt-6">
          <button
            onClick={() => setPage((p) => Math.max(p - 1, 1))}
            className="px-3 py-1 bg-gray-200 rounded-md hover:bg-gray-300"
          >
            Prev
          </button>
          {[1, 2, 3].map((num) => (
            <button
              key={num}
              onClick={() => setPage(num)}
              className={`px-3 py-1 rounded-md ${
                page === num ? "bg-blue-600 text-white" : "bg-gray-200"
              }`}
            >
              {num}
            </button>
          ))}
          <button
            onClick={() => setPage((p) => p + 1)}
            className="px-3 py-1 bg-gray-200 rounded-md hover:bg-gray-300"
          >
            Next
          </button>
        </div>
      </main>
    </section>
  );
};

export default SearchPage;
