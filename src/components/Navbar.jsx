import React from "react";
import { FaShoppingCart, FaHeart } from 'react-icons/fa';
import { Link, useNavigate } from "react-router-dom";

const Navbar = ({ favoritesCount }) => {
  const user = JSON.parse(localStorage.getItem('user'));
  const navigate = useNavigate();

  const handleLogout = (e) => {
    e.preventDefault();
    localStorage.clear();
    navigate('/login');
  };

  return (
    <>
      <nav className="navbar navbar-expand-lg" style={{ backgroundColor: '#FF8C00', padding: '15px 30px', boxShadow: '0 4px 10px rgba(0, 0, 0, 0.2)' }}>
        <div className="container-fluid d-flex justify-content-between align-items-center">
          <div className="d-flex align-items-center">
            <Link className="navbar-brand" to="#">
              <img src="https://marketplace.canva.com/EAFJvC7BTsM/1/0/1600w/canva-cream-beige-modern-cake-and-bakery-logo-K80d7s9NfIg.jpg" alt="Bakery Shop" style={{ height: '80px', borderRadius: '10px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }} /> {/* Increased height, border radius, and box shadow */}
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon" style={{ color: '#000' }}></span>
            </button>
          </div>
          <div
            className="collapse navbar-collapse justify-content-center"
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-link active me-2 fw-bold" aria-current="page" to={"/home"} 
                style={{ fontFamily: 'Playfair Display, serif', color: 'black', fontSize: '20px' }}>
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link fw-bold" to={"/product"}
                style={{ fontFamily: 'Playfair Display, serif', color: 'black', fontSize: '20px' }}>
                  Birthday Cake
                </Link>
              </li>              
              <li className="nav-item dropdown">
                <Link
                  className="nav-link dropdown-toggle fw-bold"
                  to="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                  style={{ fontFamily: 'Playfair Display, serif', color: 'black', fontSize: '20px' }}
                >
                  Top Selling
                </Link>
                <ul className="dropdown-menu" style={{ backgroundColor: '#E6BBAD' }}>
                  <li>
                    <Link className="dropdown-item" to="#"
                    style={{ fontFamily: 'Playfair Display, serif', color: 'black' }}>
                      Chocolate Cake
                    </Link>
                  </li>
                  <li>
                    <hr className="dropdown-divider" style={{ borderColor: 'black' }}></hr>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="#"
                    style={{ fontFamily: 'Playfair Display, serif', color: 'black' }}>
                      Red Velvet Cake
                    </Link>
                  </li>
                  <li>
                    <hr className="dropdown-divider" style={{ borderColor: 'black' }}></hr>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="#"
                    style={{ fontFamily: 'Playfair Display, serif', color: 'black' }}>
                      Carrot Cake
                    </Link>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
          <div className="d-flex align-items-center">
            {/* Add to Cart Button */}
            <Link to="/cart" className="btn btn-outline-light me-2" style={{ borderColor: 'black', color: 'black' }}>
              <FaShoppingCart style={{ color: 'black' }} />
            </Link>

            {/* Favorites Icon */}
            <Link to="/favorites" className="btn btn-outline-light me-2" style={{ borderColor: 'black', color: 'black' }}>
              <FaHeart style={{ color: 'black' }} />
              <span className="badge bg-danger text-white ms-1">{favoritesCount}</span>
            </Link>
          
            {/* User Authentication Section */}
            {user ? (
              <div className="dropdown">
                <button className="btn btn-outline-light dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false" style={{ borderColor: 'black', color: 'black' }}>
                  Welcome, {user.firstName}!
                </button>
                <ul className="dropdown-menu dropdown-menu-end" style={{ backgroundColor: '#E6BBAD' }}>
                  <li><Link className="dropdown-item" to={"/profile"} style={{ color: 'black' }}>Profile</Link></li>
                  <li><Link className="dropdown-item" to={"/changepassword"} style={{ color: 'black' }}>Change Password</Link></li>
                  <li><button onClick={handleLogout} className="dropdown-item" to="/logout" style={{ color: 'black' }}>Log Out</button></li>
                </ul>
              </div>
            ) : (
              <div className="d-flex">
                <Link className="btn btn-outline-light me-2" to={'/login'} style={{ borderColor: 'black', color: 'black' }}>Login</Link>
                <Link className="btn btn-outline-light" to={'/register'} style={{ borderColor: 'black', color: 'black' }}>Register</Link>
              </div>
            )}
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
