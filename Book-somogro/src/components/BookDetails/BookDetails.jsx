import React from "react";
import { useParams, useLoaderData, useNavigate } from "react-router-dom";
import {
  addToStoredReadList,
  addToStoredWishList,
} from "../../utilities/addtoLs";

const BookDetails = () => {
  const { bookId } = useParams();
  const bookDetails = useLoaderData();
  const book = bookDetails.find((book) => book.bookId === parseInt(bookId));

  const {
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

  const navigate = useNavigate();

  const handleAddtoMarkRead = (id) => {
    addToStoredReadList(id);
  };

  const handleAddtoWishList = (id) => {
    addToStoredWishList(id);
  };

  return (
    <div className="max-w-screen-xl mx-auto p-4 md:p-6">
      <div className="mb-4">
        <button onClick={() => navigate(-1)} className="btn btn-primary">Back</button>
      </div>
      
      <div className="flex flex-col md:flex-row md:items-start md:justify-center md:gap-16 lg:gap-20">
        <div className="relative mx-auto md:mx-0 mb-6 md:mb-0">
          <img
            src={image}
            alt={bookName}
            className="w-full md:w-[350px] lg:w-[424px] h-auto md:h-[570px] lg:h-[690px] object-cover"
          />
        </div>
        
        <div className="flex flex-col gap-2 md:max-w-[60%]">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-semibold">{bookName}</h1>
          <div className="divider my-2"></div>
          <p className="text-xl md:text-2xl font-semibold">By {author}</p>
          <p className="text-xl md:text-2xl font-semibold">{category}</p>
          <p className="text-[16px] text-gray-300">
            <span className="font-bold">Review : </span> {review}
          </p>
          <div className="flex flex-wrap gap-4 mt-4 justify-start">
            <span className="font-bold">Tags : </span>
            {tags.map((tag, index) => (
              <div key={index} className="text-green-500 font-semibold">
                # {tag}
              </div>
            ))}
          </div>
          <div className="divider my-2"></div>
          <p className="text-[16px] text-gray-300">
            <span className="font-bold">Total Pages : </span> {totalPages}
          </p>
          <p className="text-[16px] text-gray-300">
            <span className="font-bold">Year of Publishing : </span>{" "}
            {yearOfPublishing}
          </p>
          <p className="text-[16px] text-gray-300">
            <span className="font-bold">Publisher : </span> {publisher}
          </p>
          <p className="text-[16px] text-gray-300">
            <span className="font-bold">Rating : </span> {rating}{" "}
            <span className="text-gray-300"> / 5</span>
          </p>
          <div className="flex flex-wrap gap-2 mt-6 md:mt-10">
            <button
              className="btn btn-outline btn-primary"
              onClick={() => handleAddtoMarkRead(bookId)}
            >
              Mark as Read
            </button>
            <button
              className="btn btn-primary"
              onClick={() => handleAddtoWishList(bookId)}
            >
              Add to Wishlist
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookDetails;
