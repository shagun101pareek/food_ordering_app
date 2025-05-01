import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import FoodMenu from './components/FoodMenu' ;
import Cart from './components/Cart';
import './App.css';

export default function App() {
  const [cart, setCart] = useState([]);

  return (
    <BrowserRouter>
      <Navbar cartCount={cart.length} />
      <div className="app-content">
        <Routes>
          <Route path="/" element={<FoodMenu cart={cart} setCart={setCart} />} />
          <Route path="/cart" element={<Cart cart={cart} setCart={setCart} />} />
          {/* Add other routes as needed */}
        </Routes>
      </div>
    </BrowserRouter>
  );
}