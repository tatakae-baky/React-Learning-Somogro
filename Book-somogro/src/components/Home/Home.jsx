import React, { useEffect, useState } from "react";
import heroImg from "../../assets/heroimage.png";
import Books from "../Books/Books";

const Home = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    fetch("booksData.json")
      .then((res) => res.json())
      .then((data) => setBooks(data));
  }, []);

  return (
    <div className="max-w-screen-xl mx-auto p-4 sm:p-6">
      {/* Hero Section */}
      <div className="hero bg-base-100 min-h-[50vh] sm:min-h-[60vh] md:min-h-[70vh] flex flex-col md:flex-row justify-center md:justify-between items-center gap-8 md:gap-4 mb-10 md:mb-16 border-b-2 border-gray-600 pb-8">
        <div className="text-center md:text-left order-2 md:order-1">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl mb-6 md:mb-10">
            Books To Freshen <br className="hidden sm:block" />
            Up Your Bookshelf
          </h1>
          <button className="btn btn-primary">Browse Books</button>
        </div>
        <div className="order-1 md:order-2 w-full sm:w-auto flex justify-center lg:w-[40%] h-[450px]">
          <img 
            src={heroImg} 
            alt="Hero image of books" 
          />
        </div>
      </div>

      {/* Books Section */}
      <h1 className="text-3xl md:text-4xl font-semibold mb-6 md:mb-10 text-center">
        Our Popular Books
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
        {books.map((book) => (
          <Books key={book.bookId} book={book} />
        ))}
      </div>
    </div>
  );
};

export default Home;
