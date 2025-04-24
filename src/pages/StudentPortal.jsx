import React from 'react';
import { Link } from 'react-router-dom';

const StudentPortal = () => {
  return (
    <div className="animate-fade-in pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Student Portal
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Welcome to your student dashboard. Access your academic information and
            resources here.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white p-8 rounded-lg shadow-sm">
            <h2 className="text-2xl font-semibold text-gray-900 mb-6">Login</h2>
            <form className="space-y-4">
              <div>
                <label
                  htmlFor="student-id"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Student ID
                </label>
                <input
                  type="text"
                  id="student-id"
                  className="w-full p-2 border border-gray-300 rounded-md"
                  placeholder="Enter your student ID" />
              </div>
              <div>
                <label
                  htmlFor="password"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  className="w-full p-2 border border-gray-300 rounded-md"
                  placeholder="Enter your password"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-[#6266f0] text-white py-2 px-4 rounded-md hover:bg-primary/90 transition-colors"
              >
                Login
              </button>
            </form>
          </div>

          <div className="space-y-6">
            {/*   <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Quick Links
              </h3>
              <ul className="space-y-2 text-[#6266f0]">
                <li>
                  <Link
                    to="#"
                    className="text-primary hover:text-primary/80 transition-colors"
                  >
                    Academic Calendar
                  </Link>
                </li>
                <li>
                  <Link
                    to="#"
                    className="text-primary hover:text-primary/80 transition-colors"
                  >
                    Course Schedule
                  </Link>
                </li>
                <li>
                  <Link
                    to="#"
                    className="text-primary hover:text-primary/80 transition-colors"
                  >
                    Exam Results
                  </Link>
                </li>
                <li>
                  <Link
                    to="#"
                    className="text-primary hover:text-primary/80 transition-colors"
                  >
                    Student Resources
                  </Link>
                </li>
              </ul>
            </div> */}

            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Need Help?
              </h3>
              <p className="text-gray-600 mb-4">
                If you're having trouble accessing your account or need assistance,
                please contact our support team.
              </p>
              <p className="text-gray-600">
                Email: support@BR School.com
                <br />
                Phone: (123) 456-7890
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentPortal;
