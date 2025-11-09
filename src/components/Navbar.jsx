import React from 'react';
import { Link } from 'react-router-dom';
import { useTheme } from '../context/ThemeContext';

const Navbar = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <nav className="bg-gray-800 text-white">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="text-xl font-bold">Task Manager</Link>
          </div>
          <div className="flex items-center space-x-4">
            <Link to="/" className="hover:text-gray-300">Home</Link>
            <Link to="/tasks" className="hover:text-gray-300">Tasks</Link>
            <Link to="/api-data" className="hover:text-gray-300">API Data</Link>
            <button
              onClick={toggleTheme}
              className="p-2 rounded-md hover:bg-gray-700"
            >
              {theme === 'dark' ? '🌞' : '🌙'}
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;