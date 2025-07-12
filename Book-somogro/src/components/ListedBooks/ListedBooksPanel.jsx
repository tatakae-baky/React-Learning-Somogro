import React from "react";
import { Link, useNavigate } from "react-router-dom";

const ListedBooksPanel = ({ book }) => {
  let navigate = useNavigate();

  const handleNavigation = () => {
    navigate(`/book/${bookId}`);
  };

  const {
    bookId,
    bookName,
    author,
    image,
    rating,
    tags,
    category,
    review,
    totalPages,
    yearOfPublishing,
    publisher,
  } = book;

  return (
    <div className="card card-side bg-base-100 my-4">
      <figure className="w-[200px] h-[280px] p-4">
        <img
          src={image}
          alt={bookName}
          className="w-full h-full object-cover"
        />
      </figure>
      <div className="card-body p-8">
        <h2 className="card-title text-2xl">{bookName}</h2>
        <p className="text-lg">By : {author}</p>

        <div className="flex flex-wrap gap-2 my-1">
          {tags &&
            tags.map(
              (tag, index) =>
                index < 2 && (
                  <div
                    key={index}
                    className="badge badge-success badge-outline"
                  >
                    #{tag}
                  </div>
                )
            )}
        </div>

        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <span>Year of Publishing: {yearOfPublishing}</span>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
              />
            </svg>
            <span>Publisher: {publisher}</span>
          </div>
          <div className="flex items-center gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
              />
            </svg>
            <span>Page {totalPages}</span>
          </div>
        </div>

        <div className="flex items-center mt-2 gap-4">
          <div className="badge badge-warning">Rating: {rating}</div>
          <div className="badge badge-primary">Category: {category}</div>
          <button className="btn btn-success btn-sm" onClick={handleNavigation}>
            View Details
          </button>
        </div>
      </div>
      <div className="divider divider-horizontal my-5 mx-[-10px]"></div>
    </div>
  );
};

export default ListedBooksPanel;
