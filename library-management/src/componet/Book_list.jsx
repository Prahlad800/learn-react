import { useState } from "react";
import "./Book_list.css";

export default function Books_list(props) {
  return (
    <div className="books-list-container">
      <h2 className="books-list-title">📚 Books List</h2>
      <ul className="books-list">
        {props.books.length > 0 ? (
          props.books.map((book, index) => (
            <li key={index} className="books-list-item">
              <strong className="book-title">{book.title}</strong> -{" "}
              <span className="book-desc">{book.description}</span>
            </li>
          ))
        ) : (
          <p className="no-books">No books added yet!</p>
        )}
      </ul>
    </div>
  );
}


