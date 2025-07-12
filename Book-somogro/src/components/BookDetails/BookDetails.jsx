import React from "react";
import { useParams, useLoaderData } from "react-router-dom";

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

  return (
    <div className="flex gap-10 items-center justify-center m-10 max-w-screen-xl mx-auto p-6">
      <img
        src={image}
        alt={bookName}
        className="w-[424px] h-[690px] object-cover"
      />
      <div className="flex flex-col gap-2">
        <h1 className="text-7xl font-semibold">{bookName}</h1>{" "}
        <div className="divider my-2"></div>
        <p className="text-2xl font-semibold">By {author}</p>
        <p className="text-2xl font-semibold">{category}</p>
        <p className="text-[16px] text-gray-300">
          <span className="font-bold">Review : </span> {review}
        </p>
        <div className="flex gap-4 mt-4 justify-start">
          <span className=" font-bold">Tags : </span>
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
          <span className="font-bold">Year of Publishing : </span> {yearOfPublishing}
        </p>
        <p className="text-[16px] text-gray-300">
          <span className="font-bold">Publisher : </span> {publisher}
        </p>
        <p className="text-[16px] text-gray-300">
          <span className="font-bold">Rating : </span> {rating} <span className="text-gray-300"> / 5</span>
        </p>
        <div className="flex gap-2 mt-14">
          <button className="btn btn-outline btn-primary">Mark as Read</button>
          <button className="btn btn-primary">Add to Wishlist</button>
        </div>
      </div>
    </div>
  );
};

export default BookDetails;
