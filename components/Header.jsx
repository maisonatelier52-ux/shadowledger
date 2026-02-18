"use client";

import { useState, useCallback } from "react";
import Link from "next/link";
import { FaBars, FaTimes, FaSearch, FaFacebook, FaTwitter, FaInstagram, FaVimeo } from "react-icons/fa";
import { MdFavoriteBorder } from "react-icons/md";
import { AiOutlineStar } from "react-icons/ai";
import { BsLightbulb } from "react-icons/bs";


export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

  const toggleMenu = useCallback(() => {
    setIsMenuOpen(prev => !prev);
  }, []);

  const toggleSearch = useCallback(() => {
    setSearchOpen(prev => !prev);
  }, []);

  const closeMenu = useCallback(() => {
    setIsMenuOpen(false);
  }, []);

  const navItems = [
    { label: "HOME", href: "/" },
    { label: "HEADER", href: "/header" },
    { label: "SLIDER", href: "/slider" },
    { label: "POST FORMATS", href: "/post-formats" },
    { label: "SHOP", href: "/shop" },
  ];

  const categoryItems = [
    { label: "FEATURED", icon: MdFavoriteBorder, href: "/featured" },
    { label: "HOT", icon: AiOutlineStar, href: "/hot" },
    { label: "TRENDING", icon: BsLightbulb , href: "/trending" },
  ];

  const socialLinks = [
    { icon: FaFacebook, href: "https://facebook.com", label: "Facebook" },
    { icon: FaTwitter, href: "https://twitter.com", label: "Twitter" },
    { icon: FaInstagram, href: "https://instagram.com", label: "Instagram" },
    { icon: FaVimeo, href: "https://vimeo.com", label: "Vimeo" },
  ];

  return (
    <header className="w-full">
      {/* Main Header */}
      <div className="bg-[#d43939] text-white">
        <div className="max-w-full mx-auto px-4 md:px-[10%] py-4 md:py-5">
          {/* Mobile Header */}
          <div className="flex items-center justify-between md:hidden">
            {/* Logo */}
            <Link href="/" className="text-2xl md:text-3xl font-bold">
              Shadow Ledger
            </Link>

            {/* Mobile Menu Button */}
            <button
              onClick={toggleMenu}
              className="text-white text-2xl p-2 focus:outline-none focus:ring-2 focus:ring-white rounded"
              aria-label="Toggle menu"
              aria-expanded={isMenuOpen}
            >
              {isMenuOpen ? <FaTimes /> : <FaBars />}
            </button>
          </div>

          {/* Desktop Header */}
          <div className="hidden md:flex items-center justify-between">
            {/* Logo */}
            <Link href="/" className="text-3xl font-bold mr-8">
              Shadow Ledger
            </Link>

            {/* Desktop Navigation */}
            <nav className="flex items-center gap-6 flex-1">
              {navItems.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className="font-semibold hover:text-gray-200 transition-colors text-md"
                >
                  {item.label}
                </Link>
              ))}
            </nav>

            {/* Desktop Social Icons */}
            <div className="flex items-center gap-3">
              {socialLinks.map((social) => (
                <Link
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-gray-200 transition-colors text-lg"
                  aria-label={social.label}
                  title={social.label}
                >
                  <social.icon />
                </Link>
              ))}

              {/* Desktop Search */}
              <button
                onClick={toggleSearch}
                className="text-white hover:text-gray-200 transition-colors text-lg p-2 focus:outline-none focus:ring-2 focus:ring-white rounded"
                aria-label="Search"
              >
                <FaSearch />
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu - Expandable */}
        {isMenuOpen && (
          <nav className="md:hidden bg-[#d43939] border-t border-red-600 px-4 py-4 animate-slideDown">
            {/* Navigation Items */}
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="block py-3 text-white font-semibold text-base  flex items-center justify-between hover:text-gray-200 transition-colors"
                onClick={closeMenu}
              >
                {item.label}
                <span className="text-sm">›</span>
              </Link>
            ))}

            {/* Mobile Social Icons */}
            <div className="flex gap-4 py-4 ">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-gray-200 transition-colors text-lg"
                  aria-label={social.label}
                >
                  <social.icon />
                </a>
              ))}
            </div>

            {/* Mobile Search */}
            <div className="py-4 ">
              <div className="flex items-center bg-white rounded-md px-3 py-2">
                <FaSearch className="text-gray-500 mr-2" />
                <input
                  type="text"
                  placeholder="Type keyword to search"
                  className="flex-1 outline-none text-gray-800 text-sm bg-white"
                  aria-label="Search"
                />
              </div>
            </div>

            {/* Mobile Category Links */}
            <div className="py-4 space-y-3">
              {categoryItems.map((item) => {
                const IconComponent = item.icon;
                return (
                  <Link
                    key={item.label}
                    href={item.href}
                    className="flex items-center gap-2 text-white font-semibold text-base hover:text-gray-200 transition-colors"
                    onClick={closeMenu}
                  >
                    <IconComponent className="text-lg" />
                    {item.label}
                  </Link>
                );
              })}
            </div>
          </nav>
        )}

        {/* Desktop Search Bar - Expandable */}
        {searchOpen && (
          <div className=" hidden md:block bg-[#d43939] border-t border-red-600 px-4 md:px-[10%] py-4 animate-slideDown">
            <div className="flex items-center bg-white rounded-md px-4 py-2 max-w-md ml-auto">
              <FaSearch className="text-gray-500 mr-3" />
              <input
                type="text"
                placeholder="Type keyword to search"
                className="flex-1 outline-none text-gray-800 text-sm bg-white"
                aria-label="Search"
                autoFocus
              />
            </div>
          </div>
        )}
      </div>

      {/* Category Bar - Desktop Only */}
      <div className="hidden md:block bg-[#162238] text-white">
  <div className="max-w-full mx-auto px-4 md:px-[10%] py-2">
    <div className="flex items-center justify-center gap-8">
      {categoryItems.map((item) => {
        const IconComponent = item.icon;
        return (
          <Link
            key={item.label}
            href={item.href}
            className="flex items-center gap-2 font-bold text-sm hover:text-gray-300 transition-colors"
          >
            <IconComponent className="text-sm" />
            {item.label}
          </Link>
        );
      })}
    </div>
  </div>
</div>

      {/* Styles for animation */}
      <style jsx>{`
        @keyframes slideDown {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-slideDown {
          animation: slideDown 0.3s ease-out;
        }
      `}</style>
    </header>
  );
}