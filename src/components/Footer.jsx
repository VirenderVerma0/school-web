
import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <footer className="bg-white shadow-sm mt-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-4">BR School</h3>
            <p className="text-gray-600">
              Empowering minds, shaping futures. Your journey to excellence starts here.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/about" className="text-gray-600 hover:text-primary transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/teachers" className="text-gray-600 hover:text-primary transition-colors">
                  Our Teachers
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-600 hover:text-primary transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Contact Info</h3>
            <address className="text-gray-600 not-italic">
              <p>123 Education Street</p>
              <p>Learning City, ED 12345</p>
              <p className="mt-2">Email: info@BR School.com</p>
              <p>Phone: (123) 456-7890</p>
            </address>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-200">
          <p className="text-center text-gray-600">
            © {new Date().getFullYear()} BR School. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};
