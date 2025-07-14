import React from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { useLoaderData } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import { getStoredReadList, getStoredWishList } from "../../utilities/addtoLs";
import ListedBooksPanel from "./ListedBooksPanel";

const ListedBooks = () => {
  const books = useLoaderData();
  const [readList, setReadList] = useState([]);
  const [wishList, setWishList] = useState([]);

  useEffect(() => {
    const storedReadList = getStoredReadList();
    const storedReadListInt = storedReadList.map((id) => parseInt(id));
    const readBooksList = books.filter((book) =>
      storedReadListInt.includes(book.bookId)
    );
    setReadList(readBooksList);
    const storedWishList = getStoredWishList();
    const storedWishListInt = storedWishList.map((id) => parseInt(id));
    const wishBooksList = books.filter((book) =>
      storedWishListInt.includes(book.bookId)
    );
    setWishList(wishBooksList);
  }, []);

  return (
    <div className="max-w-screen-xl mx-auto p-4 sm:p-6">
      <Tabs>
        <TabList className="flex mb-4 border-b overflow-x-auto cursor-pointer">
          <Tab className="px-3 py-2 text-sm sm:text-base sm:px-4 sm:py-2 focus:outline-none">
            Read List{" "}
            <span className="text-xs sm:text-sm font-bold text-blue-800">
              ({readList.length})
            </span>
          </Tab>
          <Tab className="px-3 py-2 text-sm sm:text-base sm:px-4 sm:py-2 focus:outline-none">
            Wish List{" "}
            <span className="text-xs sm:text-sm font-bold text-blue-800">
              ({wishList.length})
            </span>
          </Tab>
        </TabList>

        <TabPanel>
          {readList.length > 0 ? (
            readList.map((book) => (
              <ListedBooksPanel key={book.bookId} book={book} />
            ))
          ) : (
            <div className="text-center py-8">
              <p className="text-lg">No books in your read list yet.</p>
            </div>
          )}
        </TabPanel>
        <TabPanel>
          {wishList.length > 0 ? (
            wishList.map((book) => (
              <ListedBooksPanel key={book.bookId} book={book} />
            ))
          ) : (
            <div className="text-center py-8">
              <p className="text-lg">No books in your wish list yet.</p>
            </div>
          )}
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default ListedBooks;
