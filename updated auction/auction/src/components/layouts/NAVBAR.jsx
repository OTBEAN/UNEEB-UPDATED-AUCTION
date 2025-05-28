import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../Auth/AuthContext';

function NAVBAR() {
  const { user, logOut } = useAuth();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Add scroll effect to navbar
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isMobileMenuOpen && !event.target.closest('.mobile-menu-container')) {
        setIsMobileMenuOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isMobileMenuOpen]);

  return (
    <header className={`fixed w-full z-50 bg-white transition-all duration-300 ${isScrolled ? 'shadow-lg py-2' : 'shadow-md py-3'}`}>
      <div className="container mx-auto px-4 sm:px-6">
        <div className="flex justify-between items-center">
          {/* Logo Section */}
          <div className="flex items-center space-x-2">
            <i className="fas fa-gavel text-indigo-500 text-2xl" />
            <Link to="/" className="text-2xl font-bold text-slate-800">
              Auction<span className="text-indigo-600">Hub</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            <Link to="/" className="text-gray-700 hover:text-indigo-600 font-medium transition-colors">Home</Link>
            <Link to="/auctions" className="text-gray-700 hover:text-indigo-600 font-medium transition-colors">Auctions</Link>
            <Link to="/sell" className="text-gray-700 hover:text-indigo-600 font-medium transition-colors">Sell</Link>
            {user && (
              <Link to="/dashboard" className="text-gray-700 hover:text-indigo-600 font-medium transition-colors">Dashboard</Link>
            )}
          </nav>

          {/* Auth Buttons - Desktop */}
          <div className="hidden lg:flex items-center space-x-4">
            {user ? (
              <>
                <span className="text-gray-700 font-medium hidden xl:inline">
                  Welcome, {user.email.split('@')[0]}
                </span>
                <button 
                  onClick={logOut}
                  className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-full shadow hover:shadow-lg transition-all"
                >
                  Logout
                </button>
              </>
            ) : (
              <>
                <Link to="/login" className="text-gray-700 hover:text-indigo-600 font-medium transition-colors">Login</Link>
                <Link to="/signup" className="bg-gradient-to-r from-indigo-500 to-emerald-500 text-white px-6 py-2 rounded-full shadow hover:shadow-lg transition-all">
                  Join Free
                </Link>
              </>
            )}
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center">
            <button 
              className="text-gray-700 focus:outline-none p-2 -mr-2"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? (
                <i className="fas fa-times text-2xl" />
              ) : (
                <i className="fas fa-bars text-2xl" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div 
          className={`lg:hidden mobile-menu-container transition-all duration-300 ease-in-out overflow-hidden ${isMobileMenuOpen ? 'max-h-screen mt-4 pb-4' : 'max-h-0'}`}
        >
          <div className="flex flex-col space-y-3 bg-white rounded-lg shadow-xl p-6">
            <Link 
              to="/" 
              className="text-lg text-gray-700 hover:text-indigo-600 font-medium py-2 px-3 rounded-lg hover:bg-gray-50 transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <i className="fas fa-home mr-3 w-5 text-center"></i>
              Home
            </Link>
            <Link 
              to="/auctions" 
              className="text-lg text-gray-700 hover:text-indigo-600 font-medium py-2 px-3 rounded-lg hover:bg-gray-50 transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <i className="fas fa-gavel mr-3 w-5 text-center"></i>
              Auctions
            </Link>
            <Link 
              to="/sell" 
              className="text-lg text-gray-700 hover:text-indigo-600 font-medium py-2 px-3 rounded-lg hover:bg-gray-50 transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <i className="fas fa-tag mr-3 w-5 text-center"></i>
              Sell
            </Link>
            {user && (
              <Link 
                to="/dashboard" 
                className="text-lg text-gray-700 hover:text-indigo-600 font-medium py-2 px-3 rounded-lg hover:bg-gray-50 transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <i className="fas fa-columns mr-3 w-5 text-center"></i>
                Dashboard
              </Link>
            )}

            <div className="border-t border-gray-200 pt-4 flex flex-col space-y-3">
              {user ? (
                <>
                  <div className="text-gray-700 font-medium py-2 px-3 flex items-center">
                    <i className="fas fa-user-circle mr-3 text-xl text-indigo-500"></i>
                    {user.email.split('@')[0]}
                  </div>
                  <button 
                    onClick={() => {
                      logOut();
                      setIsMobileMenuOpen(false);
                    }}
                    className="text-lg bg-red-500 hover:bg-red-600 text-white px-4 py-3 rounded-full shadow hover:shadow-lg transition-all text-center flex items-center justify-center"
                  >
                    <i className="fas fa-sign-out-alt mr-2"></i>
                    Logout
                  </button>
                </>
              ) : (
                <>
                  <Link 
                    to="/login" 
                    className="text-lg text-gray-700 hover:text-indigo-600 font-medium py-3 px-4 rounded-lg hover:bg-gray-50 transition-colors text-center flex items-center justify-center"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    <i className="fas fa-sign-in-alt mr-2"></i>
                    Login
                  </Link>
                  <Link 
                    to="/signup" 
                    className="text-lg bg-gradient-to-r from-indigo-500 to-emerald-500 text-white px-6 py-3 rounded-full shadow hover:shadow-lg transition-all text-center flex items-center justify-center"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    <i className="fas fa-user-plus mr-2"></i>
                    Join Free
                  </Link>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default NAVBAR;