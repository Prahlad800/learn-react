import { useState } from 'react'
import './App.css'
import Student_detaile from './Subscription/Student_detaile'
import Filter from './Subscription/filter'

function App() {
  return (
    <div className="app-container">
      <h1>Student detaile</h1>
      <Filter/>
      <Student_detaile/>
    </div>
  )
}

export default App
