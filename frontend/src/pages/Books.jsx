import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

function Books() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const res = await axios.get("http://localhost:8000/books");
        setBooks(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchBooks();
  }, []);

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:8000/books/${id}`);
      window.location.reload();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="flex flex-col items-center bg-gray-100 min-h-screen py-8">
      <h1 className="text-3xl font-bold text-gray-800 mb-8">Books Store</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-5xl">
        {books.map((book) => (
          <div
            key={book.id}
            className="bg-white shadow-md rounded-lg p-4 flex flex-col items-center border border-gray-300"
          >
            <h1 className="text-xl font-semibold text-gray-700 mb-2 text-center">
              {book.title}
            </h1>
            <div className="h-48 w-full flex items-center justify-center overflow-hidden rounded-md mb-4 bg-gray-200 border border-gray-200">
              {book.cover && (
                <img
                  src={book.cover}
                  alt={book.title}
                  className="max-h-full max-w-full object-contain"
                />
              )}
            </div>
            <p className="text-gray-600 mb-4 text-center line-clamp-3">
              {book.description}
            </p>
            <div className="flex gap-2">
              <Link
                to={`/update/${book.id}`}
                className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
              >
                Update
              </Link>
              <button
                onClick={() => handleDelete(book.id)}
                className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Books;
