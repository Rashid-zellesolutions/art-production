import './App.css';
import Footer from './GlobalComponents/Footer/Footer';
import Hero from './GlobalComponents/Hero/Hero';
import Home from './Pages/Home/Home';
import Portfolio from './Pages/Portfolio/Portfolio';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div>
      <Hero />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/our-projects' element={<Portfolio />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
