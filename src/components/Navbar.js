import { Link } from 'react-router-dom';
import { FiShoppingCart, FiUser, FiHelpCircle, FiTag, FiSearch } from 'react-icons/fi';
import './Navbar.css';

const Navbar = ({ cartCount }) => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        {/* Left-aligned brand */}
        <Link to="/" className="brand">
          <h1>PizzaExpress</h1>
        </Link>
        
        {/* Extended search bar in center */}
        <div className="search-box extended-search">
          <FiSearch className="search-icon" />
          <input type="text" placeholder="Search for pizzas, pastas, drinks..." />
        </div>
        
        {/* Right-aligned navigation */}
        <div className="nav-links">
          <Link to="/offers" className="nav-link">
            <FiTag className="nav-icon" />
            <span>Offers</span>
          </Link>
          <Link to="/help" className="nav-link">
            <FiHelpCircle className="nav-icon" />
            <span>Help</span>
          </Link>
          <Link to="/cart" className="nav-link cart-link">
            <FiShoppingCart className="nav-icon" />
            <span>Cart</span>
            {cartCount > 0 && <span className="cart-count">{cartCount}</span>}
          </Link>
          <Link to="/login" className="nav-link">
            <FiUser className="nav-icon" />
            <span>Login</span>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;