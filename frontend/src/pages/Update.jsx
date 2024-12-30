import axios from 'axios';
import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

function Update() {
  const [book, setBook] = useState({ title: '', descriptions: '', cover: '' });
  const navigate = useNavigate();
  const location = useLocation();
  const bookid = location.pathname.split('/')[2];
  console.log(location.pathname.split('/')[2]);

  const handleChange = (e) => {
    setBook((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleUpdateBook = async (e) => {
    e.preventDefault();
    try {
      await axios.put('http://localhost:8000/books/'+bookid, book);
      navigate('/');
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white shadow-md rounded-lg p-8 w-full max-w-md">
        <h1 className="text-2xl font-bold text-gray-800 mb-6 text-center">Update Book</h1>
        <form onSubmit={handleUpdateBook} className="space-y-4">
          <div>
            <label htmlFor="title" className="block text-sm font-medium text-gray-600 mb-2">
              Title
            </label>
            <input
              type="text"
              name="title"
              id="title"
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="Enter book title"
            />
          </div>

          <div>
            <label htmlFor="descriptions" className="block text-sm font-medium text-gray-600 mb-2">
              Description
            </label>
            <textarea
              name="descriptions"
              id="descriptions"
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="Enter book description"
              rows="2"
            ></textarea>
          </div>

          <div>
            <label htmlFor="cover" className="block text-sm font-medium text-gray-600 mb-2">
              Cover URL
            </label>
            <input
              type="text"
              name="cover"
              id="cover"
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="Enter cover URL"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-500 text-white font-semibold py-2 px-4 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          >
            Update Book
          </button>
        </form>
      </div>
    </div>
  );
}

export default Update;
