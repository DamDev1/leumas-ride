"use client"
import React, { useState, useEffect } from 'react';
import { Menu, X, Zap, Phone, Mail } from 'lucide-react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-gradient-to-r from-green-600 to-green-700 shadow-xl' 
        : 'bg-gradient-to-r from-green-500 to-green-600 shadow-lg'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex items-center space-x-3 cursor-pointer hover:scale-105 transform transition-transform duration-200">
            <div className="bg-white rounded-full p-2 shadow-lg">
              <Zap className="h-6 w-6 text-green-600" />
            </div>
            <div className="text-white">
              <h1 className="text-2xl font-bold tracking-tight">LeumasBike</h1>
              <p className="text-green-100 text-xs font-medium">Electric Bikes & More</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#home" className="text-white hover:text-green-200 font-medium transition-colors duration-200 relative group">
              Home
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-white group-hover:w-full transition-all duration-300"></span>
            </a>
            <a href="#bikes" className="text-white hover:text-green-200 font-medium transition-colors duration-200 relative group">
              E-Bikes
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-white group-hover:w-full transition-all duration-300"></span>
            </a>
            <a href="#accessories" className="text-white hover:text-green-200 font-medium transition-colors duration-200 relative group">
              Accessories
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-white group-hover:w-full transition-all duration-300"></span>
            </a>
            <a href="#services" className="text-white hover:text-green-200 font-medium transition-colors duration-200 relative group">
              Services
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-white group-hover:w-full transition-all duration-300"></span>
            </a>
            <a href="#about" className="text-white hover:text-green-200 font-medium transition-colors duration-200 relative group">
              About
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-white group-hover:w-full transition-all duration-300"></span>
            </a>
            <a href="#contact" className="text-white hover:text-green-200 font-medium transition-colors duration-200 relative group">
              Contact
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-white group-hover:w-full transition-all duration-300"></span>
            </a>
          </nav>

          {/* Desktop CTA Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <a href="tel:+1234567890" className="flex items-center space-x-2 text-white hover:text-green-200 transition-colors duration-200">
              <Phone className="h-4 w-4" />
              <span className="text-sm font-medium">Call Now</span>
            </a>
            <button className="bg-white text-green-600 px-6 py-2 rounded-full font-semibold hover:bg-green-50 transform hover:scale-105 transition-all duration-200 shadow-lg">
              Shop Now
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white hover:text-green-200 transition-colors duration-200"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <div className={`md:hidden transition-all duration-300 ease-in-out ${
          isMenuOpen 
            ? 'max-h-96 opacity-100 pb-6' 
            : 'max-h-0 opacity-0 overflow-hidden'
        }`}>
          <nav className="flex flex-col space-y-4 pt-4 border-t border-green-400">
            <a href="#home" className="text-white hover:text-green-200 font-medium py-2 transition-colors duration-200">
              Home
            </a>
            <a href="#bikes" className="text-white hover:text-green-200 font-medium py-2 transition-colors duration-200">
              E-Bikes
            </a>
            <a href="#accessories" className="text-white hover:text-green-200 font-medium py-2 transition-colors duration-200">
              Accessories
            </a>
            <a href="#services" className="text-white hover:text-green-200 font-medium py-2 transition-colors duration-200">
              Services
            </a>
            <a href="#about" className="text-white hover:text-green-200 font-medium py-2 transition-colors duration-200">
              About
            </a>
            <a href="#contact" className="text-white hover:text-green-200 font-medium py-2 transition-colors duration-200">
              Contact
            </a>
            
            {/* Mobile CTA */}
            <div className="flex flex-col space-y-3 pt-4 border-t border-green-400">
              <a href="tel:+1234567890" className="flex items-center space-x-2 text-white hover:text-green-200 transition-colors duration-200">
                <Phone className="h-4 w-4" />
                <span className="font-medium">Call Now</span>
              </a>
              <button className="bg-white text-green-600 px-6 py-3 rounded-full font-semibold hover:bg-green-50 transition-colors duration-200 shadow-lg w-full">
                Shop Now
              </button>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
}