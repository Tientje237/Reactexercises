import { useState } from "react";
import data from "../data";
import Book from "./Book";
const Booklist = () => {
  const [searchInput, setSearchInput] = useState(" ");
  const [books, setBooks] = useState(data);

  const handleChange = (e) => {
    e.preventDefault();
    setSearchInput(e.target.value);

    const filteredBooks = data.filter((book) =>
      book.title.toLowerCase().includes(searchInput.toLowerCase())
    );

    setBooks(filteredBooks);
  };

  return (
    <div className="search">
      <input
        type="text"
        placeholder="Zoek een titel op"
        onChange={handleChange}
        value={searchInput}
        name="search"
      />

      {books.map((book, index) => (
        <Book
          key={index}
          img={book.img}
          title={book.title}
          author={book.author}
        />
      ))}
    </div>
  );
};

export default Booklist;
