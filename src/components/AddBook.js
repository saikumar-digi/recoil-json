import React, { useState } from 'react';
import { useSetRecoilState } from 'recoil';
import { bookListAtom } from '../recoil/atoms/bookAtom';
import { createBook } from '../api/server';

function AddBook() {
  const setBookList = useSetRecoilState(bookListAtom);
  const [newBook, setNewBook] = useState({
    title: '',
    author: '',
    isPublished: false,
  });

  const handleAddBook = async () => {
    try {
      const createdBook = await createBook(newBook);
      setBookList((existingBooks) => [...existingBooks, createdBook]);
      setNewBook({
        title: '',
        author: '',
        isPublished: false,
      });
    } catch (error) {
      console.error('Error adding book:', error);
    }
  };

  const handleChangeInput = (e) => {
    setNewBook((prevNewBook) => ({
      ...prevNewBook,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <div>
      <h2>Add a Book</h2>
      <input
        type="text"
        name="title"
        placeholder="Title"
        value={newBook.title}
        onChange={handleChangeInput}
      />
      <input
        type="text"
        name="author"
        placeholder="Author"
        value={newBook.author}
        onChange={handleChangeInput}
      />
      <label>
        Is Published:
        <input
          type="checkbox"
          name="isPublished"
          checked={newBook.isPublished}
          onChange={handleChangeInput}
        />
      </label>
      <button onClick={handleAddBook}>Add Book</button>
    </div>
  );
}

export default AddBook;
