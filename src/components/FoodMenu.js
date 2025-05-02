import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './FoodMenu.css';
import MargheritaPizza from '../assets/MargheritaPizza.jpg';
import PepperoniPizza from '../assets/PepperoniPizza.jpg';
import VeggieSupremePizza from '../assets/VeggieSupremePizza.jpg';
import BBQChickenPizza from '../assets/BBQChickenPizza.jpg';
import HawaiianPizza from '../assets/HawaiianPizza.jpg';
import FourCheesePizza from '../assets/FourCheesePizza.jpg';
import MeatLoversPizza from '../assets/MeatLoversPizza.jpg';
import PestoPizza from '../assets/PestoPizza.jpg';
import JalapenoPizza from '../assets/JalapenoPizza.jpg';
import MushroomPizza from '../assets/MushroomPizza.jpg';
import MediterraneanPizza from '../assets/MediterranianPizza.jpg';
import PaneerTikkaPizza from '../assets/PaneerTikkaPizza.jpg';
import WhiteSaucePizza from '../assets/WhiteSaucePizza.jpg';
import BreakfastPizza from '../assets/BreakfastPizza.jpg';
import TacoPizza from '../assets/TacoPizza.jpg';
import BuffaloChickenPizza from '../assets/BuffaloChickenPizza.jpg';

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
    ,
    {
      id: 5,
      title: 'Hawaiian Pizza',
      price: 8.99,
      image: HawaiianPizza,
      description: 'A sweet and savory twist with juicy pineapple and savory ham.'
    }
    ,
    {
      id: 6,
      title: 'Four Cheese Pizza',
      price: 8.99,
      image: FourCheesePizza,
      description: 'Rich and creamy with a perfect blend of four gourmet cheeses.'
    }
    ,
    {
      id: 7,
      title: 'Meat Lovers Pizza',
      price: 8.99,
      image: MeatLoversPizza,
      description: 'A hearty pizza packed with multiple meats for a bold, savory flavor.'
    }
    ,
    {
      id: 9,
      title: 'Pesto Pizza',
      price: 8.99,
      image: PestoPizza,
      description: 'A fresh, aromatic alternative topped with pesto and creamy cheese.'
    }
    ,
    {
      id: 10,
      title: 'Spicy Jalapeño Pizza',
      price: 8.99,
      image: JalapenoPizza,
      description: 'A fiery twist for spice lovers, layered with jalapeños and zesty chili flakes.'
    }
    ,
    {
      id: 11,
      title: 'Mushroom Truffle Pizza',
      price: 8.99,
      image: MushroomPizza,
      description: 'Earthy and luxurious with wild mushrooms and a drizzle of aromatic truffle oil.'
    }
    ,
    {
      id: 12,
      title: 'Mediterranean Pizza',
      price: 8.99,
      image: MediterraneanPizza,
      description: 'A fresh Mediterranean mix featuring olives, feta, tomatoes, and herbs.'
    }
    ,
    {
      id: 12,
      title: 'Paneer Tikka Pizza',
      price: 8.99,
      image: PaneerTikkaPizza,
      description: 'A fusion delight with smoky paneer tikka cubes and spicy Indian flavors.'
    }
    ,
    {
      id: 13,
      title: 'White Sauce Pizza',
      price: 8.99,
      image: WhiteSaucePizza,
      description: 'A creamy delight with a rich white sauce base and subtle herbs.'
    }
    ,
    {
      id: 14,
      title: 'Breakfast Pizza',
      price: 8.99,
      image: BreakfastPizza,
      description: 'Morning-inspired pizza topped with eggs, bacon, and cheese.'
    }
    ,
    {
      id: 15,
      title: 'Taco Pizza',
      price: 8.99,
      image: TacoPizza,
      description: 'A fun mash-up with taco-seasoned beef, cheese, lettuce, and salsa-style toppings.'
    }
    ,
    {
      id: 16,
      title: 'Buffalo Chicken Pizza',
      price: 8.99,
      image: BuffaloChickenPizza,
      description: 'Bold and tangy with spicy buffalo chicken and ranch drizzle.'
    }
  ]);

  const [cart, setCart] = useState([]);

  const addToCart = (item) => {
    setCart([...cart, item]);
    localStorage.setItem('cart', JSON.stringify([...cart, item]));
  };
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <div className="food-menu">
      <h2>Life's Too Short for Bad Pizza!</h2>
      <div className="menu-scroller">
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
      </div>
      <Link to="/cart" className="view-cart">
        View Cart ({cart.length})
      </Link>
    </div>
  );
};

export default FoodMenu;