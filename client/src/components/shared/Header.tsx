import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Header: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-40 bg-white border-b border-neutral-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-3 flex-shrink-0">
          <div className="w-10 h-10 rounded-lg bg-gradient-purple flex items-center justify-center">
            <span className="text-white font-bold">+</span>
          </div>
          <span className="hidden sm:inline font-bold text-xl text-neutral-900">HealthBridge</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          <a href="#services" className="text-neutral-700 hover:text-primary-600 transition-colors text-sm font-medium">
            Services
          </a>
          <a href="#why-us" className="text-neutral-700 hover:text-primary-600 transition-colors text-sm font-medium">
            Why Us
          </a>
          <a href="#team" className="text-neutral-700 hover:text-primary-600 transition-colors text-sm font-medium">
            Team
          </a>
        </div>

        {/* Desktop Auth Buttons */}
        <div className="hidden md:flex items-center gap-4">
          <Link
            to="/login"
            className="text-neutral-700 hover:text-primary-600 font-semibold transition-colors"
          >
            Sign in
          </Link>
          <Link
            to="/register"
            className="px-6 py-2 rounded-lg bg-gradient-purple text-white font-semibold hover:shadow-lg transition-all"
          >
            Sign up
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 hover:bg-neutral-100 rounded-lg transition-colors"
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? (
            <svg className="w-6 h-6 text-neutral-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="w-6 h-6 text-neutral-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-neutral-200 bg-white">
          <div className="px-4 py-4 space-y-3">
            <a
              href="#services"
              className="block text-neutral-700 hover:text-primary-600 font-medium py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              Services
            </a>
            <a
              href="#why-us"
              className="block text-neutral-700 hover:text-primary-600 font-medium py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              Why Us
            </a>
            <a
              href="#team"
              className="block text-neutral-700 hover:text-primary-600 font-medium py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              Team
            </a>
            <div className="border-t border-neutral-200 pt-3 space-y-2">
              <Link
                to="/login"
                className="block text-neutral-700 hover:text-primary-600 font-semibold py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                Sign in
              </Link>
              <Link
                to="/register"
                className="block px-4 py-2 rounded-lg bg-gradient-purple text-white font-semibold text-center hover:shadow-lg transition-all"
                onClick={() => setMobileMenuOpen(false)}
              >
                Sign up
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Header;
