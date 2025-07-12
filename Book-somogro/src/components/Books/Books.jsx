import React from "react";
import { Link} from "react-router-dom";

const Books = ({ book }) => {
  const { bookId, bookName, author, image, rating, tags, category } = book;

  return (
    <Link to={`/book/${bookId}`}>
      <div className="card bg-base-100 w-96 shadow-sm  p-4 cursor-pointer">
        <figure>
          <img
            src={image}
            className="w-[124px] h-[190px] object-cover"
            alt={bookName}
          />
        </figure>
        <div className="flex gap-15 mt-4 justify-center">
          {tags.map((tag, index) => (
            <div key={index} className="text-green-500 font-semibold">
              {tag}
            </div>
          ))}
        </div>
        <div className="card-body">
          <h2 className="card-title">{bookName}</h2>
          <p>By {author}</p>
          <div className="divider my-2"></div>
          <div className="card-actions justify-between items-center">
            <div> {category} </div>
            <div> Rating : {rating} </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Books;
