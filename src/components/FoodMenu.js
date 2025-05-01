import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './FoodMenu.css';
import MargheritaPizza from '../assets/MargheritaPizza.jpg';
import PepperoniPizza from '../assets/PepperoniPizza.jpg';
import VeggieSupremePizza from '../assets/VeggieSupremePizza.jpg';
import BBQChickenPizza from '../assets/BBQChickenPizza.jpg';

const FoodMenu = () => {
  const [menuItems] = useState([
    {
      id: 1,
      title: 'Margherita Pizza',
      price: 12.99,
      image: MargheritaPizza,
      description: 'A timeless classic with rich tomato sauce, fresh mozzarella, and fragrant basil.'
    },
    {
      id: 2,
      title: 'Pepperoni Pizza',
      price: 8.99,
      image: PepperoniPizza,
      description: ' A crowd favorite topped generously with spicy pepperoni and gooey cheese.'
    },
    {
      id: 3,
      title: 'Veggie Supreme Pizza',
      price: 11.99,
      image: VeggieSupremePizza,
      description: 'Loaded with colorful veggies for a fresh and hearty bite every time.'
    }
    ,
    {
      id: 4,
      title: 'BBQ Chicken Pizza',
      price: 8.99,
      image: BBQChickenPizza,
      description: 'Smoky, tangy BBQ sauce meets tender grilled chicken and caramelized onions.'
    }
  ]);

  const [cart, setCart] = useState([]);

  const addToCart = (item) => {
    setCart([...cart, item]);
    localStorage.setItem('cart', JSON.stringify([...cart, item]));
  };

  return (
    <div className="food-menu">
      <h2>Our Menu</h2>
      <div className="menu-grid">
        {menuItems.map(item => (
          <div key={item.id} className="food-card">
            <img src={item.image} alt={item.title} />
            <div className="food-info">
              <h3>{item.title}</h3>
              <p className="description">{item.description}</p>
              <div className="price-cart">
                <span className="price">${item.price.toFixed(2)}</span>
                <button onClick={() => addToCart(item)}>Add to Cart</button>
              </div>
            </div>
          </div>
        ))}
      </div>
      <Link to="/cart" className="view-cart">
        View Cart ({cart.length})
      </Link>
    </div>
  );
};

export default FoodMenu;