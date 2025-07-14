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
    <div className="card flex flex-col sm:card-side bg-base-100 my-4 overflow-hidden">
      <figure className="w-full sm:w-[150px] md:w-[200px] h-[280px] p-4 mx-auto sm:mx-0">
        <img
          src={image}
          alt={bookName}
          className="w-full h-full object-cover"
        />
      </figure>
      <div className="card-body p-4 sm:p-6 md:p-8">
        <h2 className="card-title text-xl md:text-2xl">{bookName}</h2>
        <p className="text-base md:text-lg">By : {author}</p>

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

        <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 mt-2">
          <div className="flex items-center gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4 sm:h-5 sm:w-5"
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
            <span className="text-sm sm:text-base">Year: {yearOfPublishing}</span>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 mt-2">
          <div className="flex items-center gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4 sm:h-5 sm:w-5"
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
            <span className="text-sm sm:text-base">Publisher: {publisher}</span>
          </div>
          <div className="flex items-center gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4 sm:h-5 sm:w-5"
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
            <span className="text-sm sm:text-base">Page {totalPages}</span>
          </div>
        </div>

        <div className="flex flex-wrap items-center mt-3 gap-2 sm:gap-4">
          <div className="badge badge-warning">Rating: {rating}</div>
          <div className="badge badge-primary">Category: {category}</div>
          <button className="btn btn-success btn-sm mt-2 sm:mt-0" onClick={handleNavigation}>
            View Details
          </button>
        </div>
      </div>
      <div className="divider my-0 sm:divider-horizontal sm:my-5 sm:mx-[-10px]"></div>
    </div>
  );
};

export default ListedBooksPanel;
