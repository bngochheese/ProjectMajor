import React from 'react';
import 'remixicon/fonts/remixicon.css';
import '../styles/signup.scss'

const Signup = () => {
    return (
        <div className='signup-body'>
            <div className='signup-container'>
                <div className='image-container'>
                    <img src='https://images.unsplash.com/photo-1720048171419-b515a96a73b8?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' alt=''></img>
                </div>
                <div className='signup-info'>
                    <div className='signup-title'>Đăng Ký</div>
                    <div className='signup-title-sub'>
                        <h1>Chào mừng bạn đến website của chúng tôi</h1>
                        <h5>Hãy bắt đầu hành trình của bạn nào!</h5>
                    </div>
                    <div className='input-group'>
                        <h3>Tên người dùng</h3>
                        <input className='username' type='text' placeholder='Hãy nhập Tên Người Dùng'></input>
                    </div>
                    <div className='input-group'>
                        <h3>Email</h3>
                        <input className='email' type='email' placeholder='Hãy nhập Email'></input>
                    </div>
                    <div className='input-group'>
                        <h3>Mật khẩu</h3>
                        <div className='password-container'>
                            <input className='password' type='password' placeholder='Hãy nhập Mật Khẩu'></input>
                            <button type='button'>
                                <i class="ri-eye-off-line"></i>
                            </button>
                        </div>

                    </div>
                    <div className='input-group'>
                        <h3>Xác nhận Mật khẩu</h3>
                        <div className='confirm-password-container'>
                            <input className='confirm-password' type='password' placeholder='Hãy nhập lại Mật Khẩu'></input>
                            <button type='button'>
                                <i class="ri-eye-off-line"></i>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Signup;