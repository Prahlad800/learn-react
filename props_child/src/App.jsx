import { useState } from 'react'
import Card2 from './componet/Card2'
import Card from './componet/Card'
import './App.css'

function App() {
  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    setCount(count + 1);
  };

  return (
    <div className="app-container">
      <header className="app-header">
        <h1>Welcome to Props Child Demo</h1>
      </header>
      <main className="app-main">
        <section className="card-section">
          <Card name="Prahlad">
            <h2>Hello 👋</h2>
            <h3>This is a Card component</h3>
            <p>Card me children props ka use kiya gaya hai.</p>
          </Card>
        </section>
        <section className="card-section">
          <Card2 increment={handleIncrement} text="Click Me">
            <h2>Counter: {count}</h2>
            <p>Button dabane par counter badhega.</p>
          </Card2>
        </section>
      </main>
      <footer className="app-footer">
        <small>&copy; 2025 Props Child Example</small>
      </footer>
    </div>
  );
}

export default App;
