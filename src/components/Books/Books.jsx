import { useEffect, useState } from "react";
import Book from "../Book/Book";

const Books = () => {
 const [books, setBooks] = useState([])
 useEffect(()=>{
  const loadBooks = async()=>{
   const res = await fetch('./booksData.json')
   const data = await res.json();
   setBooks(data);
  }
  loadBooks();
 },[])
  return (
    <div className="my-24 mx-auto px-12">
      <h2 className="text-[40px] text-black font-bold text-center">Books</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-9">
       {
        books.map(book=><Book book={book} key={book.bookId}></Book>)
       }
      </div>
    </div>
  );
};

export default Books;
