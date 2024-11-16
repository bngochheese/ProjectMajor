import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/navbar.css';

const Navbar = () => {
    return (
        <nav>
            <ul>
                <li>
                    <Link to="/Home">Home</Link>
                </li>
                <li>
                    <Link to="/Products">Products</Link>
                </li>
                <li>
                    <Link to="/Productdetail">Product Detail</Link>
                </li>
            </ul>
        </nav>
    );
}

export default Navbar;