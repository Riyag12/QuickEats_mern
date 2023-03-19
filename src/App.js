import './App.css';
import Home from './screens/Home';
import {
  BrowserRouter as Router, Routes, Route
} from "react-router-dom";
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import { CartProvider } from './components/ContextReducer';
import MyOrders from './screens/MyOrders';





function App() {
  return (
    <CartProvider>
      <Router>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/myOrder" element={<MyOrders />} />
        </Routes>

        <Footer />
      </Router>
    </CartProvider>
  );
}

export default App;
