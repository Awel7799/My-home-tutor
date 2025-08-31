export default function SearchField() {
  return (
    <div className="flex items-center w-full max-w-md lg:max-w-2xl mx-auto bg-white border border-gray-300 rounded-lg shadow-sm overflow-hidden mt-20">
      <input
        type="text"
        placeholder="Search by subject, grade, and rate"
        className="flex-grow px-4 py-2 lg:px-6 lg:py-3 text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400 text-sm lg:text-base"
      />
      <button className="px-4 py-2 lg:px-6 lg:py-3 bg-blue-600 text-white font-medium hover:bg-blue-700 transition-colors text-sm lg:text-base">
        Search
      </button>
    </div>
  );
}
