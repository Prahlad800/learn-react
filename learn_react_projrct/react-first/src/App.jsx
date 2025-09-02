import { useState } from 'react'
import './App.css'
import Student_detaile from './Subscription/Student_detaile'
import Filter from './Subscription/filter'

function App() {
  const [selectedAge, setSelectedAge] = useState('')

  return (
    <div className="app-container">
      <h1>Student detaile</h1>
      <Filter selectedAge={selectedAge} onAgeChange={setSelectedAge} />
      <Student_detaile selectedAge={selectedAge} onAgeChange={setSelectedAge} />
    </div>
  )
}

export default App
