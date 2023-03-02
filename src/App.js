import './App.css';
import Home from './screens/Home';
import {
  BrowserRouter as Router, Routes, Route
} from "react-router-dom";
import Login from './screens/Login';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Carousel from './components/Carousel';




function App() {
  return (
    <Router>
      <Navbar />
    <Carousel/>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/login" element={<Login />} />
      </Routes>

      <Footer />
    </Router>
  );
}

export default App;
