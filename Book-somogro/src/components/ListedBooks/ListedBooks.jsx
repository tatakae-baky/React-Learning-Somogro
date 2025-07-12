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
    <div className="max-w-screen-xl mx-auto p-6">
      <Tabs>
        <TabList>
          <Tab>
            Read List{" "}
            <span className="text-sm font-bold text-blue-800">
              ({readList.length})
            </span>
          </Tab>
          <Tab>
            Wish List{" "}
            <span className="text-sm font-bold text-blue-800">
              ({wishList.length})
            </span>
          </Tab>
        </TabList>

        <TabPanel>
          {readList.map((book) => (
            <ListedBooksPanel key={book.bookId} book={book}></ListedBooksPanel>
          ))}
        </TabPanel>
        <TabPanel>
          {wishList.map((book) => (
            <ListedBooksPanel key={book.bookId} book={book}></ListedBooksPanel>
          ))}
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default ListedBooks;
