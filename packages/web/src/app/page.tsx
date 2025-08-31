import heroImg from '../../public/Depth 4, Frame 0.png'
import { Search, User, CheckCircle, Star, DollarSign, Shield } from "lucide-react";
import SearchField from '@/component/searchField';
export default function Home() {
  return (
    <section className="font-sans">
      {/* Hero Section */}
      <div
        className="h-[80vh] md:h-screen w-full bg-cover bg-center block items-center justify-center text-center"
        style={{
          backgroundImage: "url('/Depth 4, Frame 0.png')", // replace with your image path
        }}
      >
        <h3 className="text-3xl block sm:text-4xl md:text-6xl lg:text-6xl font-bold text-white leading-snug max-w-4xl mt-4 w-full pt-40 ml-60 ">
          Unlock Your child’s Potential  With  Top University Tutors
        </h3>
        <SearchField />
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* How It Works */}
        <div className="mt-16 sm:mt-24">
          <h2 className="text-xl sm:text-2xl font-bold text-gray-800 mb-3 sm:mb-4">How it works</h2>
          <h1 className="text-2xl sm:text-4xl font-bold text-gray-900 mb-4 sm:mb-6">
            Simple Steps to Success
          </h1>
          <p className="text-gray-600 mb-10 sm:mb-14">
            Our platform makes it easy to find and connect with qualified tutors.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-10">
            <div className="border border-gray-200 rounded-xl p-6 sm:p-8 shadow-sm hover:shadow-md transition">
              <Search className="text-blue-600 mb-4" size={32} />
              <h3 className="font-semibold text-lg mb-2 sm:mb-3">Find the Perfect Tutor</h3>
              <p className="text-gray-600">
                Browse our extensive network of university student tutors
                specializing in various subjects and grades.
              </p>
            </div>
            <div className="border border-gray-200 rounded-xl p-6 sm:p-8 shadow-sm hover:shadow-md transition">
              <User className="text-blue-600 mb-4" size={32} />
              <h3 className="font-semibold text-lg mb-2 sm:mb-3">Connect with Tutors</h3>
              <p className="text-gray-600">
                Easily connect with tutors who match your child’s needs and
                schedule sessions at your convenience.
              </p>
            </div>
            <div className="border border-gray-200 rounded-xl p-6 sm:p-8 shadow-sm hover:shadow-md transition">
              <CheckCircle className="text-blue-600 mb-4" size={32} />
              <h3 className="font-semibold text-lg mb-2 sm:mb-3">Achieve Academic Success</h3>
              <p className="text-gray-600">
                Watch your child’s confidence and grades soar with personalized
                tutoring from top university students.
              </p>
            </div>
          </div>
        </div>

        {/* Why Choose Us */}
        <div className="mt-20 sm:mt-28">
          <h2 className="text-xl sm:text-2xl font-bold text-gray-800 mb-3 sm:mb-4">Why Choose Us</h2>
          <h1 className="text-2xl sm:text-4xl font-bold text-gray-900 mb-4 sm:mb-6">
            Benefits for Parents
          </h1>
          <h5 className="text-gray-600 mb-10 sm:mb-14">
            We are committed to providing a safe, effective, and affordable tutoring experience.
          </h5>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-10">
            <div className="border border-gray-200 rounded-xl p-6 sm:p-8 shadow-sm hover:shadow-md transition">
              <Star className="text-blue-600 mb-4" size={32} />
              <h3 className="font-semibold text-lg mb-2 sm:mb-3">Top University Tutors</h3>
              <p className="text-gray-600">
                Access a network of highly qualified tutors from leading
                universities, ensuring top-notch academic support.
              </p>
            </div>
            <div className="border border-gray-200 rounded-xl p-6 sm:p-8 shadow-sm hover:shadow-md transition">
              <DollarSign className="text-blue-600 mb-4" size={32} />
              <h3 className="font-semibold text-lg mb-2 sm:mb-3">Affordable Rates</h3>
              <p className="text-gray-600">
                Benefit from competitive and transparent pricing, making quality
                tutoring accessible to all families.
              </p>
            </div>
            <div className="border border-gray-200 rounded-xl p-6 sm:p-8 shadow-sm hover:shadow-md transition">
              <Shield className="text-blue-600 mb-4" size={32} />
              <h3 className="font-semibold text-lg mb-2 sm:mb-3">Safe and Secure</h3>
              <p className="text-gray-600">
                Our platform prioritizes safety with background checks and
                secure communication tools, giving parents peace of mind.
              </p>
            </div>
          </div>
        </div>

        {/* Featured Tutors */}
        <div className="mt-20 sm:mt-28">
          <h1 className="text-2xl sm:text-4xl font-bold text-gray-900 mb-10 sm:mb-12">
            Featured Tutors
          </h1>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-10">
            <div className="border border-gray-200 rounded-xl p-6 sm:p-8 shadow-sm hover:shadow-md transition text-center">
              <img
                src={heroImg.src}
                alt="Tutor profile"
                className="w-24 h-24 sm:w-28 sm:h-28 rounded-full mx-auto mb-4 sm:mb-5 object-cover"
              />
              <h5 className="font-semibold text-lg mb-1">Sarah Chen</h5>
              <p className="text-gray-600">Math, Grade 10 • ⭐ 4.9</p>
            </div>
            <div className="border border-gray-200 rounded-xl p-6 sm:p-8 shadow-sm hover:shadow-md transition text-center">
              <img
                src={heroImg.src}
                alt="Tutor profile"
                className="w-24 h-24 sm:w-28 sm:h-28 rounded-full mx-auto mb-4 sm:mb-5 object-cover"
              />
              <h5 className="font-semibold text-lg mb-1">David Lee</h5>
              <p className="text-gray-600">Science, Grade 11 • ⭐ 4.8</p>
            </div>
            <div className="border border-gray-200 rounded-xl p-6 sm:p-8 shadow-sm hover:shadow-md transition text-center">
              <img 
                src={heroImg.src}
                alt="Tutor profile"
                className="w-24 h-24 sm:w-28 sm:h-28 rounded-full mx-auto mb-4 sm:mb-5 object-cover"
              />
              <h5 className="font-semibold text-lg mb-1">Emily Rodriguez</h5>
              <p className="text-gray-600">English, Grade 9 • ⭐ 4.7</p>
            </div>
          </div>
        </div>

        {/* Join Tutors Network */}
        <div className="mt-20 sm:mt-28 text-center">
          <h1 className="text-2xl sm:text-4xl font-bold text-gray-900 mb-6">
            Join Our Network of Tutors
          </h1>
          <p className="text-gray-600 mb-6 sm:mb-8 px-4 sm:px-0">
            Share your knowledge and help students succeed. Apply to become a tutor today.
          </p>
          <button className="px-6 sm:px-8 py-3 sm:py-4 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 transition">
            Become a Tutor
          </button>
        </div>
      </div>
    </section>
  );
}
