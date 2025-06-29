// components/Navbar.jsx
'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, Sun, Moon } from 'lucide-react';
import Image from 'next/image';
import logo from '../../../public/download.svg';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const pathname = usePathname();

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Initialize theme from system preference
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const isDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      setIsDarkMode(isDark);
      document.documentElement.classList.toggle('dark', isDark);
    }
  }, []);

  // Handle theme toggle
  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
    document.documentElement.classList.toggle('dark');
  };

  // Close menu when route changes
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  // Navigation items
  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Disclosures', path: '/disclosures' },
    { name: 'Disclaimers', path: '/disclaimers' },
    // { name: 'Contact', path: '/contact' },
  ];

  return (    <header      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? 'shadow-lg dark:shadow-neutral-900/30' : ''
      }`}
      style={{
        backgroundColor: scrolled ? 'var(--neutral-100)' : 'var(--neutral-200)',
        boxShadow: scrolled 
          ? 'rgba(0, 0, 0, 0.1) 0px 4px 6px -1px, rgba(0, 0, 0, 0.06) 0px 2px 4px -1px' 
          : 'none',
        transition: 'background-color 0.3s ease-in-out, box-shadow 0.3s ease-in-out'
      }}
    >      <div className="container mx-auto px-[10%]">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}          
          <Link href="/" className="flex items-center">              <Image 
              src={logo} 
              alt="TWCA Logo"
              width={162}
              height={100}              priority
              className="transition-all duration-300 p-1 w-[81px] h-[50px] md:w-[130px] md:h-[80px] lg:w-[162px] lg:h-[100px]"
              style={{
                filter: isDarkMode ? 'brightness(0) invert(1)' : 'invert(19%) sepia(82%) saturate(638%) hue-rotate(176deg) brightness(95%) contrast(101%)'
              }}
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <nav className="flex space-x-8">              {navItems.map((item) => (                <Link
                  key={item.path}
                  href={item.path}
                  className={`relative py-2 group transition-colors duration-300 ${
                    pathname === item.path
                      ? 'text-primary-500 font-medium dark:text-primary-400'
                      : 'text-secondary-600 dark:text-secondary-600 hover:text-primary-500 dark:hover:text-primary-400'
                  }`}
                >
                  {item.name}
                  <span 
                    className={`absolute bottom-0 left-0 w-full h-0.5 transform origin-left transition-transform duration-300 ease-out ${
                      pathname === item.path ? 'scale-x-100' : 'scale-x-0'
                    } group-hover:scale-x-100`}                    style={{
                      backgroundColor: 'var(--primary-500)',
                    }}
                  />
                </Link>
              ))}
            </nav>
            
            {/* Theme Toggle Button */}
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors duration-200"
              aria-label="Toggle theme"
            >
              {isDarkMode ? (
                <Sun className="w-5 h-5 text-yellow-500" />
              ) : (
                <Moon className="w-5 h-5 text-gray-600" />
              )}
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-4">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors duration-200"
              aria-label="Toggle theme"
            >
              {isDarkMode ? (
                <Sun className="w-5 h-5 text-yellow-500" />
              ) : (
                <Moon className="w-5 h-5 text-gray-600" />
              )}
            </button>
            <button
              className="text-gray-600 focus:outline-none"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>      {/* Mobile Navigation */}
      <div
        className={`fixed inset-0 z-40 transition-all duration-300 ease-in-out transform ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        } md:hidden`}
        style={{ 
          top: '60px',
          backgroundColor: 'var(--background)',
          color: 'var(--foreground)'
        }}
      >
        <nav className="flex flex-col h-full p-8 space-y-6">          {navItems.map((item) => (
            <Link
              key={item.path}
              href={item.path}                  className={`text-lg relative group ${
                pathname === item.path
                  ? 'text-primary-500 font-medium dark:text-primary-400'
                  : 'text-secondary-600 dark:text-secondary-600 hover:text-primary-500 dark:hover:text-primary-400'
              }`}
            >
              {item.name}
              <span 
                className={`absolute bottom-0 left-0 w-full h-0.5 bg-primary-500 transform origin-left transition-transform duration-300 ease-out ${
                  pathname === item.path ? 'scale-x-100' : 'scale-x-0'
                } group-hover:scale-x-100`}
                style={{
                  backgroundColor: 'var(--primary-500)',
                }}
              />
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Navbar;