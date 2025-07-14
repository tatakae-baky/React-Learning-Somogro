import React from "react";
import { Link } from "react-router-dom";

const Books = ({ book }) => {
  const { bookId, bookName, author, image, rating, tags, category } = book;

  return (
    <Link to={`/book/${bookId}`}>
      <div className="card bg-base-100 w-full border-1 border-gray-600 p-2 cursor-pointer h-full">
        <figure className="flex justify-center">
          <img
            src={image}
            className="w-[100px] sm:w-[124px] h-[160px] sm:h-[190px] object-cover mt-6"
            alt={bookName}
          />
        </figure>
        <div className="flex gap-10 flex-wrap mt-4 justify-center">
          {tags.map((tag, index) => (
            index < 2 && (
              <div key={index} className="text-green-500 text-sm sm:text-base font-semibold">
                {tag}
              </div>
            )
          ))}
        </div>
        <div className="card-body p-2 sm:p-4">
          <h2 className="card-title text-lg sm:text-xl">{bookName}</h2>
          <p className="text-sm sm:text-base">By {author}</p>
          <div className="divider my-1 sm:my-2"></div>
          <div className="card-actions justify-between items-center">
            <div className="text-sm sm:text-base"> {category} </div>
            <div className="text-sm sm:text-base"> Rating : {rating} </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Books;
