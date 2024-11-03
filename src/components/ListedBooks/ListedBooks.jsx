import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { getStoredReadList } from "../../utility/addToDB";
import ReadBook from "../ReadBook/ReadBook";

const ListedBooks = () => {
  const [readList, setReadList] = useState([]);
  const [sort, setSort] = useState("");
  const allBooks = useLoaderData();

  useEffect(() => {
    const storedReadList = getStoredReadList();

    const readBookList = allBooks.filter((book) =>
      storedReadList.includes(book.bookId)
    );
    setReadList(readBookList);
  }, []);

  const handleSort = (sortType) => {
    setSort(sortType);

    if (sortType === "No. of pages") {
      const sortedReadList = [...readList].sort(
        (a, b) => a.totalPages - b.totalPages
      );
      setReadList(sortedReadList);
    } else if (sortType === "Ratings") {
      const sortedReadList = [...readList].sort((a, b) => a.rating - b.rating);
      setReadList(sortedReadList);
    }
  };

  return (
    <div className="my-12">
      <div className="flex flex-col justify-center items-center text-center">
        <h3 className="text-5xl font-bold">Listed books</h3>
        <div className="navbar-center flex">
          <ul className="menu menu-horizontal px-1 ">
            <li>
              <details>
                <summary className="bg-[#23BE0A] text-white hover:text-[#23BE0A]">
                  {sort ? `Sort By: ${sort}` : "Sort By"}
                </summary>
                <ul className="p-4">
                  <li onClick={() => handleSort("Ratings")}>
                    <a>Rating</a>
                  </li>
                  <li>
                    <a>Publisher year</a>
                  </li>
                  <li onClick={() => handleSort("No. of pages")}>
                    <a>No. of pages</a>
                  </li>
                </ul>
              </details>
            </li>
          </ul>
        </div>
      </div>
      <Tabs>
        <TabList>
          <Tab>Read Books: {readList.length}</Tab>
          <Tab>Wishlist Books</Tab>
        </TabList>

        <TabPanel>
          <div className="grid grid-cols-1 gap-6">
            {readList.map((book) => (
              <ReadBook key={book.bookId} book={book}></ReadBook>
            ))}
          </div>
        </TabPanel>
        <TabPanel>
          <h2>Any content 2</h2>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default ListedBooks;
