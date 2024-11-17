import React, { useEffect, useRef, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import 'remixicon/fonts/remixicon.css';
import usePageTitle from '../components/usePageTitle';
import '../styles/signup.scss'
import axios from 'axios';

const Signup = () => {
    usePageTitle('EduFlow - Đăng ký')

    const navigate = useNavigate();

    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const [formErrors, setFormErrors] = useState({});
    const [signUpData, setSignUpData] = useState({
        username: '',
        email: '',
        password: '',
        confirmPassword: '',
    });

    const usernameRef = useRef();
    const emailRef = useRef();
    const passwordRef = useRef();
    const confirmPasswordRef = useRef();

    const handleInputOnChange = (e) => {
        const { name, value } = e.target;
        setSignUpData({ ...signUpData, [name]: value });
    }

    const handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            handleInputOnChange(e);
        }
    }

    useEffect(() => {
        window.addEventListener('keydown', handleKeyDown);
        return () => {
            window.removeEventListener('keydown', handleKeyDown);
        }
    })

    const regexForm = () => {
        const errors = {};
        const usernameRegex = /^[a-zA-Z0-9_]{3,15}$/;
        const emailRegex = /^(?!.*\.\.)([a-zA-Z0-9._]+(?<!\.))@gmail\.com$/;

        if (!usernameRegex.test(signUpData.username)) {
            errors.username = `Tên người dùng phải từ 3-15 ký tự, chỉ bao gồm chữ, số, dấu "_" "."`;
        }

        if (!emailRegex.test(signUpData.email)) {
            errors.email = 'Email không hợp lệ';
        }

        if (signUpData.password.length < 6) {
            errors.password = 'Mật khẩu phải có tối thiểu 6 ký tự';
        }

        if (signUpData.confirmPassword !== signUpData.password) {
            errors.confirmPassword = 'Mật khẩu xác nhận không khớp';
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
            } else if (getErrors.email) {
                emailRef.current.focus();
            } else if (getErrors.password) {
                passwordRef.current.focus();
            } else {
                confirmPasswordRef.current.focus();
            }
            return;
        }

        try {
            const res = await axios.post('https://6739791fa3a36b5a62eeb829.mockapi.io/api/Account', {
                username: signUpData.username,
                email: signUpData.email,
                password: signUpData.password,
            })

            if (res.status === 201) {
                Swal.fire({
                    icon: 'success',
                    title: 'Đăng ký tài khoản thành công!',
                    text: 'Chúc mừng bạn đã tạo tài khoản thành công.',
                }).then(() => {
                    window.scrollTo(0, 0);
                    setShowPassword(false);
                    setShowConfirmPassword(false);
                })
                setSignUpData({
                    username: '',
                    email: '',
                    password: '',
                    confirmPassword: '',
                });
                setFormErrors({});
                navigate('/Login')
            } else {
                Swal.fire({
                    icon: 'error',
                    title: 'Đăng ký tài khoản thất bại',
                    text: 'Vui lòng thử lại.',
                });
            }
        } catch (error) {
            Swal.fire({
                icon: 'error',
                title: 'Đã xảy ra lỗi',
                text: 'Đã xảy ra lỗi khi kết nối đến server. Vui lòng thử lại.',
            });
        }
    }

    return (
        <div className='signup-body'>
            <div className='signup-container'>
                <div className='image-container'>
                    <img
                        src='https://images.unsplash.com/photo-1720048171419-b515a96a73b8?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
                        alt=''
                    ></img>
                </div>
                <div className='signup-info'>
                    <div className='signup-title'>Đăng Ký</div>
                    <div className='signup-title-sub'>
                        <h1>Chào mừng bạn đến website của chúng tôi</h1>
                        <h5>Hãy bắt đầu tạo tài khoản của riêng bạn nào!</h5>
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
                                value={signUpData.username}
                                onChange={handleInputOnChange}
                            ></input>
                            {formErrors.username && <h6 className='error'>! {formErrors.username}</h6>}
                        </div>
                        <div className='input-group'>
                            <h3>Email</h3>
                            <input
                                ref={emailRef}
                                name='email'
                                className='email'
                                type='email'
                                placeholder='Hãy nhập Email'
                                value={signUpData.email}
                                onChange={handleInputOnChange}
                            ></input>
                            {formErrors.email && <h6 className='error'>! {formErrors.email}</h6>}
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
                                    value={signUpData.password}
                                    onChange={handleInputOnChange}
                                ></input>
                                <button
                                    type='button'
                                    className='toggle'
                                    onClick={() => setShowPassword(!showPassword)}
                                >
                                    <i className={showPassword ? 'ri-eye-line' : 'ri-eye-off-line'}></i>
                                </button>
                            </div>
                            {formErrors.password && <h6 className='error'>! {formErrors.password}</h6>}
                        </div>
                        <div className='input-group'>
                            <h3>Xác nhận Mật khẩu</h3>
                            <div className='confirm-password-container'>
                                <input
                                    ref={confirmPasswordRef}
                                    name='confirmPassword'
                                    className='confirm-password'
                                    type={showConfirmPassword ? 'text' : 'password'}
                                    placeholder='Hãy nhập lại Mật Khẩu'
                                    value={signUpData.confirmPassword}
                                    onChange={handleInputOnChange}
                                >
                                </input>
                                <button
                                    type='button'
                                    className='toggle'
                                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                                >
                                    <i className={showConfirmPassword ? 'ri-eye-line' : 'ri-eye-off-line'}></i>
                                </button>
                            </div>
                            {formErrors.confirmPassword && <h6 className='error'>! {formErrors.confirmPassword}</h6>}
                        </div>
                        <div className='action-buttons'>
                            <button className='signup-button'>Đăng Ký</button>
                            <div className='google-signup-button-group'>
                                <button className='google-signup-button'>
                                    <h6>Đăng ký tài khoản với</h6>
                                    <i className="ri-google-line"></i>
                                </button>
                            </div>
                            <div className='login-prompt'>
                                <h6>Bạn đã có tài khoản?</h6>
                                <Link to='/Login'>Đăng Nhập</Link>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Signup;