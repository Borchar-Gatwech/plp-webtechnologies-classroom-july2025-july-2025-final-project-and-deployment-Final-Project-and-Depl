import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { MenuIcon, XIcon, MoonIcon, SunIcon } from 'lucide-react';
type HeaderProps = {
  darkMode: boolean;
  toggleDarkMode: () => void;
};
export function Header({
  darkMode,
  toggleDarkMode
}: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  // Close mobile menu when route changes
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);
  // Close mobile menu when screen resizes to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsMenuOpen(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  const navItems = [{
    name: 'Home',
    path: '/'
  }, {
    name: 'About',
    path: '/about'
  }, {
    name: 'Projects',
    path: '/projects'
  }, {
    name: 'Services',
    path: '/services'
  }, {
    name: 'Contact',
    path: '/contact'
  }];
  return <header className={`sticky top-0 z-50 ${darkMode ? 'bg-gray-800' : 'bg-white'} shadow-md transition-colors duration-300`}>
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold">
          Alex<span className="text-blue-600">Chen</span>
        </Link>
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {navItems.map(item => <Link key={item.path} to={item.path} className={`font-medium hover:text-blue-600 transition-colors ${location.pathname === item.path ? 'text-blue-600' : ''}`}>
              {item.name}
            </Link>)}
          <button onClick={toggleDarkMode} className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors" aria-label={darkMode ? 'Switch to light mode' : 'Switch to dark mode'}>
            {darkMode ? <SunIcon size={20} className="text-yellow-400" /> : <MoonIcon size={20} className="text-gray-600" />}
          </button>
        </nav>
        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center">
          <button onClick={toggleDarkMode} className="p-2 mr-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors" aria-label={darkMode ? 'Switch to light mode' : 'Switch to dark mode'}>
            {darkMode ? <SunIcon size={20} className="text-yellow-400" /> : <MoonIcon size={20} className="text-gray-600" />}
          </button>
          <button onClick={toggleMenu} className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors" aria-label="Toggle menu">
            {isMenuOpen ? <XIcon size={24} /> : <MenuIcon size={24} />}
          </button>
        </div>
      </div>
      {/* Mobile Navigation */}
      {isMenuOpen && <nav className={`md:hidden ${darkMode ? 'bg-gray-800' : 'bg-white'} px-4 py-4 shadow-lg`}>
          <ul className="flex flex-col space-y-4">
            {navItems.map(item => <li key={item.path}>
                <Link to={item.path} className={`block font-medium hover:text-blue-600 transition-colors ${location.pathname === item.path ? 'text-blue-600' : ''}`}>
                  {item.name}
                </Link>
              </li>)}
          </ul>
        </nav>}
    </header>;
}