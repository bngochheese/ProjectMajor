import React, { useRef, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import 'remixicon/fonts/remixicon.css';
import usePageTitle from '../components/usePageTitle';
import '../styles/signup.scss'
import axios from 'axios';
import Swal from 'sweetalert2';

const Login = () => {
    usePageTitle('EduFlow - Đăng nhập')

    const navigate = useNavigate();

    const [showPassword, setShowPassword] = useState(false);
    const [formErrors, setFormErrors] = useState({});
    const [loginData, setLoginData] = useState({
        username: '',
        password: '',
    });

    const usernameRef = useRef('');
    const passwordRef = useRef('');

    const handleInputOnChange = (e) => {
        const { name, value } = e.target;
        setLoginData({ ...loginData, [name]: value });
    }

    const regexForm = () => {
        const errors = {};
        const usernameRegex = /^[a-zA-Z0-9_]{3,15}$/;
        if (!usernameRegex.test(loginData.username)) {
            errors.username = 'Tên người dùng phải từ 3-15 ký tự, chỉ bao gồm chữ, số, dấu "_" và "."';
        }

        if (loginData.password.length < 6) {
            errors.password = 'Mật khẩu phải có tối thiểu 6 ký tự';
        }

        return errors;
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        const getErrors = regexForm();
        if (Object.keys(getErrors).length > 0) {
            setFormErrors(getErrors);
            if (getErrors.username) {
                usernameRef.current.focus();
            } else if (getErrors.password) {
                passwordRef.current.focus();
            }
            return;
        }

        try {
            const res = await axios.get('https://6739791fa3a36b5a62eeb829.mockapi.io/api/Account', {
                username: loginData.username,
                password: loginData.password,
            });

            if (res.status === 200) {
                Swal.fire({
                    icon: 'success',
                    title: 'Đăng nhập thành công!',
                    text: 'Chào mừng bạn quay lại!',
                });

                setLoginData({
                    username: '',
                    password: '',
                });
                setFormErrors({});
                navigate('/Home');
            } else {
                Swal.fire({
                    icon: 'error',
                    title: 'Đăng nhập thất bại',
                    text: 'Vui lòng kiểm tra lại tên người dùng hoặc mật khẩu.',
                });
            }
        } catch (error) {
            Swal.fire({
                icon: 'error',
                title: 'Lỗi kết nối',
                text: 'Đã xảy ra lỗi khi đăng nhập. Vui lòng thử lại.',
            });
        }
    }

    return (
        <div className='signup-body'>
            <div className='signup-container'>
                <div className='image-container'>
                    <img
                        src='https://images.unsplash.com/photo-1731347796193-eb4fd2c90504?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
                        alt=''
                    >
                    </img>
                </div>
                <div className='signup-info'>
                    <div className='signup-title'>Đăng Nhập</div>
                    <div className='signup-title-sub'>
                        <h1>Chào mừng bạn đến website của chúng tôi</h1>
                        <h5>Hãy đăng nhập tài khoản của bạn!</h5>
                    </div>
                    <form onSubmit={handleSubmit}>
                        <div className='input-group'>
                            <h3>Tên người dùng</h3>
                            <input
                                ref={usernameRef}
                                name='username'
                                className='username'
                                type='text'
                                placeholder='Hãy nhập Tên Người Dùng'
                                value={loginData.username}
                                onChange={handleInputOnChange}
                            ></input>
                            {formErrors.username && <h6 className='error'>! {formErrors.username}</h6>}
                        </div>
                        <div className='input-group'>
                            <h3>Mật khẩu</h3>
                            <div className='password-container'>
                                <input
                                    ref={passwordRef}
                                    name='password'
                                    className='password'
                                    type={showPassword ? 'text' : 'password'}
                                    placeholder='Hãy nhập Mật Khẩu'
                                    value={loginData.password}
                                    onChange={handleInputOnChange}
                                ></input>
                                <button
                                    type='button'
                                    className='toggle'
                                    onClick={() => setShowPassword(!showPassword)}
                                >
                                    <i class={showPassword ? 'ri-eye-line' : 'ri-eye-off-line'}></i>
                                </button>
                            </div>
                            {formErrors.password && <h6 className='error'>!{formErrors.password}</h6>}
                        </div>
                        <div className='action-buttons'>
                            <button className='signup-button'>Đăng Nhập</button>
                            <div className='google-signup-button-group'>
                                <button className='google-signup-button'>
                                    <h6>Đăng nhập tài khoản với</h6>
                                    <i class="ri-google-line"></i>
                                </button>
                            </div>
                            <div className='login-prompt'>
                                <h6>Bạn chưa có tài khoản?</h6>
                                <Link to='/Signup'>Đăng Ký</Link>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Login;