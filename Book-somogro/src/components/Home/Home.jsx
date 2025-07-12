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
    <div className="max-w-screen-xl mx-auto p-6">
      {/* Hero Section */}
      <div className="hero bg-base-100 min-h-[70vh] flex justify-between items-center mb-16">
        <div>
          <h1 className="text-7xl mb-10 text-center lg:text-left lg:text-7xl lg:mb-10">
            Books to freshen up <br />
            your bookshelf
          </h1>
          <button className="btn btn-primary">Browse Books</button>
        </div>
        <img src={heroImg} className="max-w-sm drop-shadow-2xl shadow-white" />
      </div>

      {/* Books Section */}
      <h1 className="text-4xl font-semibold mb-10 text-center">
        Our Popular Books
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {books.map((book) => (
          <Books key={book.bookId} book={book} />
        ))}
      </div>
    </div>
  );
};

export default Home;
