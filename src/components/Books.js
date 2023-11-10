import React, { useEffect } from "react";
import {useRecoilValue, useSetRecoilState } from "recoil";
import FilterBooks from "./FilterBooks";
import AddBook from "./AddBook";
import { bookSelector} from "../recoil/selectors/bookSelector";
import { deleteBook, getAllBooks } from "../api/server";
import { bookListAtom } from "../recoil/atoms/bookAtom";
import { filteredBookSelector } from "../recoil/selectors/FilterBooksSelector";


function Books() {
  const books = useRecoilValue(bookSelector);

  const filteredBooks = useRecoilValue(filteredBookSelector);
  console.log(filteredBooks,"filteredBooks");


  const setBookList = useSetRecoilState(bookListAtom);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getAllBooks(); 
        setBookList(response);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [setBookList]);

  const handleDeleteBook = async (bookId) => {
    try {
      await deleteBook(bookId);
      const updatedBooks = await getAllBooks();
      setBookList(updatedBooks);
    } catch (error) {
      console.error("Error deleting book:", error);
    }
  };

  return (
    <div>
    <AddBook/>
    <FilterBooks />
      <h1>Books</h1>
      <table>
        <thead>
          <tr>
            <th>Title</th>
            <th>Author</th>
            <th>Published</th>
          </tr>
        </thead>
        <tbody>
          {filteredBooks.map((book) => (
            <tr key={book.id}>
              <td>{book.title}</td>
              <td>{book.author}</td>
              <td>{book.isPublished ? "Yes" : "No"}</td>
              <td>
                  <button onClick={() => handleDeleteBook(book.id)}>
                    Delete
                  </button>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
}

export default Books;
