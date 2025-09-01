import { useState } from "react";
import "./Book_details_form.css";

export default function Book_details_form(props) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title || !description) return alert("Fill all fields!");
    props.addBook({ title, description });
    setTitle("");
    setDescription("");
  };

  return (
    <form className="book-form" onSubmit={handleSubmit}>
      <h2 className="form-title">Add a New Book</h2>
      <input
        className="form-input"
        type="text"
        placeholder="Book Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <br />
      <input
        className="form-input"
        type="text"
        placeholder="Book Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <br />
      <button className="form-button" type="submit">Submit</button>
    </form>
  );
}


