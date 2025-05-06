import React, { useState, useRef, useEffect } from 'react';
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
      description: 'A timeless classic with rich tomato sauce, fresh mozzarella, and fragrant basil.',
      tags: ['CLASSIC', 'VEGETARIAN']
    },
    {
      id: 2,
      title: 'Pepperoni Pizza',
      price: 8.99,
      image: PepperoniPizza,
      description: 'A crowd favorite topped generously with spicy pepperoni and gooey cheese.',
      tags: ['SPICY', 'MEAT']
    },
    {
      id: 3,
      title: 'Veggie Supreme Pizza',
      price: 11.99,
      image: VeggieSupremePizza,
      description: 'Loaded with colorful veggies for a fresh and hearty bite every time.',
      tags: ['VEGETARIAN', 'HEALTHY']
    },
    {
      id: 4,
      title: 'BBQ Chicken Pizza',
      price: 8.99,
      image: BBQChickenPizza,
      description: 'Smoky, tangy BBQ sauce meets tender grilled chicken and caramelized onions.',
      tags: ['CHICKEN', 'BBQ']
    },
    {
      id: 5,
      title: 'Hawaiian Pizza',
      price: 8.99,
      image: HawaiianPizza,
      description: 'A sweet and savory twist with juicy pineapple and savory ham.',
      tags: ['SWEET', 'MEAT']
    },
    {
      id: 6,
      title: 'Four Cheese Pizza',
      price: 8.99,
      image: FourCheesePizza,
      description: 'Rich and creamy with a perfect blend of four gourmet cheeses.',
      tags: ['CHEESY', 'VEGETARIAN']
    },
    {
      id: 7,
      title: 'Meat Lovers Pizza',
      price: 8.99,
      image: MeatLoversPizza,
      description: 'A hearty pizza packed with multiple meats for a bold, savory flavor.',
      tags: ['MEAT', 'SAVORY']
    },
    {
      id: 8,
      title: 'Pesto Pizza',
      price: 8.99,
      image: PestoPizza,
      description: 'A fresh, aromatic alternative topped with pesto and creamy cheese.',
      tags: ['VEGETARIAN', 'AROMATIC']
    },
    {
      id: 9,
      title: 'Spicy Jalapeño Pizza',
      price: 8.99,
      image: JalapenoPizza,
      description: 'A fiery twist for spice lovers, layered with jalapeños and zesty chili flakes.',
      tags: ['SPICY', 'HOT']
    },
    {
      id: 10,
      title: 'Mushroom Truffle Pizza',
      price: 8.99,
      image: MushroomPizza,
      description: 'Earthy and luxurious with wild mushrooms and a drizzle of aromatic truffle oil.',
      tags: ['GOURMET', 'VEGETARIAN']
    },
    {
      id: 11,
      title: 'Mediterranean Pizza',
      price: 8.99,
      image: MediterraneanPizza,
      description: 'A fresh Mediterranean mix featuring olives, feta, tomatoes, and herbs.',
      tags: ['MEDITERRANEAN', 'VEGETARIAN']
    },
    {
      id: 12,
      title: 'Paneer Tikka Pizza',
      price: 8.99,
      image: PaneerTikkaPizza,
      description: 'A fusion delight with smoky paneer tikka cubes and spicy Indian flavors.',
      tags: ['INDIAN', 'VEGETARIAN']
    },
    {
      id: 13,
      title: 'White Sauce Pizza',
      price: 8.99,
      image: WhiteSaucePizza,
      description: 'A creamy delight with a rich white sauce base and subtle herbs.',
      tags: ['CREAMY', 'VEGETARIAN']
    },
    {
      id: 14,
      title: 'Breakfast Pizza',
      price: 8.99,
      image: BreakfastPizza,
      description: 'Morning-inspired pizza topped with eggs, bacon, and cheese.',
      tags: ['BREAKFAST', 'MEAT']
    },
    {
      id: 15,
      title: 'Taco Pizza',
      price: 8.99,
      image: TacoPizza,
      description: 'A fun mash-up with taco-seasoned beef, cheese, lettuce, and salsa-style toppings.',
      tags: ['TEX-MEX', 'MEAT']
    },
    {
      id: 16,
      title: 'Buffalo Chicken Pizza',
      price: 8.99,
      image: BuffaloChickenPizza,
      description: 'Bold and tangy with spicy buffalo chicken and ranch drizzle.',
      tags: ['SPICY', 'CHICKEN']
    }
  ]);

  const [cart, setCart] = useState([]);
  const sliderRef = useRef(null);
  const carouselRef = useRef(null); // New ref for carousel container

  const addToCart = (item) => {
    const newCart = [...cart, item];
    setCart(newCart);
    localStorage.setItem('cart', JSON.stringify(newCart));
  };

  const handleWheel = (e) => {
    // Check if carouselRef exists and contains the event target
    if (carouselRef.current && carouselRef.current.contains(e.target)) {
      e.preventDefault();
      if (e.deltaY < 0) {
        sliderRef.current.slickPrev();
      } else {
        sliderRef.current.slickNext();
      }
    }
  };

  useEffect(() => {
    const currentCarousel = carouselRef.current;
    if (currentCarousel) {
      currentCarousel.addEventListener('wheel', handleWheel, { passive: false });
    }
    return () => {
      if (currentCarousel) {
        currentCarousel.removeEventListener('wheel', handleWheel);
      }
    };
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: '0',
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          centerPadding: '60px'
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          centerMode: false
        }
      }
    ]
  };

  return (
    <div className="food-menu">
      {/* ... keep your header section ... */}

      <div 
        className="pizza-carousel-container" 
        ref={carouselRef} // Attach the ref here
      >
        <Slider {...settings} ref={sliderRef}>
          {menuItems.map((item) => (
            <div key={item.id} className="pizza-slide">
              <div className="pizza-card">
                {item.tags && (
                  <div className="pizza-tags">
                    {item.tags.map((tag, i) => (
                      <span key={i} className="tag">{tag}</span>
                    ))}
                  </div>
                )}
                <img src={item.image} alt={item.title} className="pizza-img" />
                <div className="pizza-info">
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                  <div className="price-cart">
                    <span className="price">${item.price.toFixed(2)}</span>
                    <button onClick={() => addToCart(item)}>Add to Cart</button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>

      <Link to="/cart" className="view-cart">
        View Cart ({cart.length})
      </Link>
    </div>
  );
};

export default FoodMenu;