import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import 'remixicon/fonts/remixicon.css';
import '../styles/navbar.scss';
import logoWebsite from '../assets/images/logoapp1.png'

const Navbar = () => {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const accountRef = useRef();
    const subMenuAccountRef = useRef();

    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    }

    const handleSubMenuAccount = () => {
        setIsDropdownOpen(false);
    }

    useEffect(() => {
        const handleClickOutside = (e) => {
            if (subMenuAccountRef.current && !subMenuAccountRef.current.contains(e.target)
                && accountRef.current && !accountRef.current.contains(e.target)) {
                setIsDropdownOpen(false);
            }
        }
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        }
    })

    return (
        <nav>
            <ul>
                <Link to="/Home" className='logo'>
                    <img src={logoWebsite} alt=''></img>
                </Link>
                <li>
                    <div className='search-group'>
                        <input className='search-box' placeholder='Tìm kiếm'></input>
                        <i className="ri-search-line"></i>
                    </div>
                </li>
                <li>
                    <Link to="/Home">Trang chủ</Link>
                </li>
                <li>
                    <Link to="/Products">Khoá học</Link>
                </li>
                <div className="account">
                    <div
                        className="account-trigger"
                        onClick={toggleDropdown}
                        ref={accountRef}
                    >
                        <i className="ri-user-line"></i> Tài khoản
                    </div>
                    {isDropdownOpen && (
                        <div className="dropdown-menu" ref={subMenuAccountRef}>
                            <Link to="/Login" onClick={handleSubMenuAccount}>Đăng Nhập</Link>
                            <Link to="/Signup" onClick={handleSubMenuAccount}>Đăng Ký</Link>
                        </div>
                    )}
                </div>
            </ul>
        </nav>
    );
}

export default Navbar;