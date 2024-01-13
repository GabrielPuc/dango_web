import './App.css';
import { Home } from './pages';
import { Navbar } from './components/Navbar';
import { Route, Routes } from 'react-router-dom';
import { Reference } from './pages/Reference';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/hiragana" element={<Reference />} />
        <Route path="/katakana" element={<Reference />} />
        <Route path="/dates" element={<Reference />} />
        <Route path="/numbers" element={<Reference />} />
      </Routes>
    </div>
  );
}

export default App;
