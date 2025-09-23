import React, { useEffect, useState } from 'react';
import { Header } from './Header';
import { Footer } from './Footer';
type LayoutProps = {
  children: React.ReactNode;
};
export function Layout({
  children
}: LayoutProps) {
  const [darkMode, setDarkMode] = useState(false);
  // Check for user's preferred color scheme on initial load
  useEffect(() => {
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      setDarkMode(true);
    }
  }, []);
  // Toggle dark mode
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };
  return <div className={`min-h-screen flex flex-col ${darkMode ? 'dark bg-gray-900 text-white' : 'bg-white text-gray-800'}`}>
      <Header darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      <main className="flex-grow">{children}</main>
      <Footer darkMode={darkMode} />
    </div>;
}