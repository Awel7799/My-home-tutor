export default function Footer() {
  return (
    <footer className="shadow text-gray-700 py-6 mt-50">
      <div className="max-w-6xl mx-auto px-4 flex flex-col items-center">
        
        {/* Navigation Links */}
        <ul className="flex flex-wrap justify-center gap-6 md:gap-20 text-sm mb-4 md:mb-0">
          <li>
            <a href="#" className="hover:text-blue-500 transition">About Us</a>
          </li>
          <li>
            <a href="#" className="hover:text-blue-500 transition">Contact</a>
          </li>
          <li>
            <a href="#" className="hover:text-blue-500 transition">Privacy Policy</a>
          </li>
          <li>
            <a href="#" className="hover:text-blue-500 transition">Terms of Service</a>
          </li>
        </ul>

        {/* Copyright */}
        <p className="text-xs text-center mt-6 text-gray-500">
          © 2025 ScholarMatch. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
