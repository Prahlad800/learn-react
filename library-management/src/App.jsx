import { useState } from 'react'
import './App.css'
import Student_list from './componet/Student_list'
import Book_list from './componet/Book_list'
import Book_details_form from './componet/Book_details_form'

function App() {
   const [books, setBooks] = useState([]);

  const addBook = (book) => {
    setBooks([...books, book]);
  }

  return (
    <div id="root">
      <h1 className="header">Library Management</h1>
      <div className="card">
        <Book_details_form addBook={addBook}/>
      </div>
      <div className="card">
        <Book_list books={books}/>
      </div>
      <div className="card">
        <Student_list/>
      </div>
    </div>
  )
}

export default App
