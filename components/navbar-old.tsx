'use client';

import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, Calendar } from 'lucide-react';
import { drBlakeData } from '@/lib/data';

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { href: '#about', label: 'About' },
    { href: '#services', label: 'Services' },
    { href: '#faq', label: 'FAQ' },
    { href: '#contact', label: 'Contact' },
  ];

  const handleLinkClick = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-white/95 backdrop-blur-lg shadow-md border-b border-gray-200'
            : 'bg-white/70 backdrop-blur-sm'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-12">
          <div className="flex items-center justify-between h-20">

            {/* LOGO SECTION */}
            <a
              href="#hero"
              className="flex items-center gap-4 group"
              onClick={handleLinkClick}
            >
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary-600 to-accent-600 flex-center text-white text-xl font-bold shadow-md group-hover:scale-105 transition">
                S
              </div>
              <div className="flex flex-col leading-tight">
                <span className="text-lg font-semibold text-gray-900">
                  Dr. Serena Blake
                </span>
                <span className="text-sm text-gray-500">
                  Clinical Psychologist
                </span>
              </div>
            </a>

            {/* DESKTOP NAV */}
            <div className="hidden lg:flex items-center gap-10">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="text-gray-600 text-[15px] font-medium hover:text-primary-600 transition-colors"
                >
                  {item.label}
                </a>
              ))}
            </div>

            {/* CTA BUTTONS */}
            <div className="hidden md:flex items-center gap-3">
              <a
                href={`tel:${drBlakeData.contact.phone}`}
                className="flex items-center gap-2 px-4 py-2 text-primary-600 border border-primary-300 rounded-lg hover:bg-primary-50 transition font-medium text-sm"
              >
                <Phone className="w-4 h-4" />
                <span className="hidden lg:inline">Call Clinic</span>
              </a>

              <a
                href="#contact"
                onClick={handleLinkClick}
                className="px-6 py-2 bg-gradient-to-r from-primary-600 to-accent-600 text-white rounded-lg font-semibold hover:shadow-md transition flex items-center gap-2"
              >
                <Calendar className="w-4 h-4" />
                Book Appointment
              </a>
            </div>

            {/* Mobile Toggle */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 rounded-lg hover:bg-gray-100 transition"
            >
              {isMobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
            </button>
          </div>

          {/* MOBILE MENU */}
          {isMobileMenuOpen && (
            <div className="lg:hidden border-t border-gray-200 py-4 space-y-3">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={handleLinkClick}
                  className="block py-3 px-4 rounded-lg hover:bg-primary-50 text-gray-700 font-medium"
                >
                  {item.label}
                </a>
              ))}

              <a
                href={`tel:${drBlakeData.contact.phone}`}
                className="flex items-center justify-center gap-2 w-full py-3 rounded-lg bg-gray-100 text-primary-600 font-semibold"
              >
                <Phone size={18} />
                Call Clinic
              </a>

              <a
                href="#contact"
                onClick={handleLinkClick}
                className="flex items-center justify-center gap-2 w-full py-3 rounded-lg bg-gradient-to-r from-primary-600 to-accent-600 text-white font-semibold"
              >
                <Calendar size={18} />
                Book Now
              </a>
            </div>
          )}
        </div>
      </nav>

      {/* Spacer so content doesn't jump */}
      <div className="h-20" />
    </>
  );
}
