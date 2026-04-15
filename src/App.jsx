import { useState } from 'react';
import './App.css';
import Info from './components/info';
import AboutInterests from './components/about-interests';
import Footer from './components/footer';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="container">
      <Info />
      <AboutInterests />
      <Footer />
    </div>
  );
}

export default App

