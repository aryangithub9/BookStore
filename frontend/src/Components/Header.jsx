import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header className="bg-gray-900 text-white shadow-md">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <Link 
          to="/" 
          className="text-4xl font-bold text-blue-500 hover:text-blue-400 transition duration-300"
        >
          BookStore
        </Link>
        <nav className="flex items-center space-x-8">
          <Link 
            to="/" 
            className="text-lg font-medium hover:text-blue-400 transition duration-300"
          >
            Books
          </Link>
          <Link 
            to="/addbook" 
            className="text-lg font-medium hover:text-blue-400 transition duration-300"
          >
            Add Book
          </Link>
        </nav>
      </div>
    </header>
  );
}

export default Header;
