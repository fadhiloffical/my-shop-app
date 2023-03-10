import { useState } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { RootState } from '../../store';
import './index.css';

const Header = ({ onLogout }: { onLogout: () => void }) => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  const products = useSelector((state: RootState) => state.cart.items);
  
  return (
    <header className="header-container">
      <div className="header-logo">
        <Link to="/">
          <img src="https://dummyimage.com/150x50/b9b9b9/000000.png" alt="logo" />
        </Link>
      </div>

      <nav className="header-nav">
        <ul className="header-menu">
          <li className="header-menu-item">
            <Link to="/">Home</Link>
          </li>
          <li className="header-menu-item">
            <Link to="/products">Products</Link>
          </li>
          <li className="header-menu-item">
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </nav>

      <div className="header-right">

        <Link to="/cart" className="header-cart">
          <div className='cartNumber'>{products?.length}</div>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M10 20.5c0 .829-.672 1.5-1.5 1.5s-1.5-.671-1.5-1.5c0-.828.672-1.5 1.5-1.5s1.5.672 1.5 1.5zm3.5-1.5c-.828 0-1.5.671-1.5 1.5s.672 1.5 1.5 1.5 1.5-.671 1.5-1.5c0-.828-.672-1.5-1.5-1.5zm6.304-17l-3.431 14h-2.102l2.541-11h-16.812l4.615 13h13.239l3.474-14h2.178l.494-2h-4.196z"/></svg>
        </Link>

        <div className="header-profile" onClick={toggleMenu}>
        <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      fillRule="evenodd"
      clipRule="evenodd"
    >
      <path d="M12 0C6.917 0 3.535 4.949 8.267 13.678c1.596 2.945-1.725 3.641-5.09 4.418C.104 18.805-.01 20.331 0 23l.004 1h23.99l.004-.969c.012-2.688-.093-4.223-3.177-4.935-3.438-.794-6.639-1.49-5.09-4.418C20.45 4.766 16.982 0 12 0m0 1c1.89 0 3.39.764 4.225 2.15 1.354 2.251.866 5.824-1.377 10.06-.577 1.092-.673 2.078-.283 2.932.937 2.049 4.758 2.632 6.032 2.928 2.303.534 2.412 1.313 2.401 3.93H1c-.01-2.615.09-3.396 2.401-3.93 1.157-.266 5.138-.919 6.049-2.94.387-.858.284-1.843-.304-2.929C6.915 9.086 6.402 5.437 7.741 3.189 8.581 1.777 10.094 1 12 1"></path>
    </svg>
    {showMenu && (
            <div className="header-profile-menu">
              <ul>
                <li onClick={onLogout}>
                  Logout
                </li>
                <li>
                  <Link to="/profile">Profile</Link>
                </li>
                <li>
                  <Link to="/challenge">Code Challenge</Link>
                </li>
              </ul>
            </div>
          )}
        </div>

      </div>
    </header>
  );
};

export default Header;
