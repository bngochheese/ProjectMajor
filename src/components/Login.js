// import '../styles/signup.scss'

const Login = () => {
    return (
        <div className='signup-container'>
            <div className='image-container'>
                <svg width={100} height={100} xmlns='https://image-0.uhdpaper.com/wallpaper/anime-boy-chill-digital-art-phone-wallpaper-4k-uhdpaper.com-284@0@j.jpg'></svg>
            </div>
            <div className='signup-info'>
                <h1>Chào mừng bạn đến website của chúng tôi</h1>
                <h5>Hãy bắt đầu hành trình của bạn nào!</h5>
                <div className='input-group'>
                    <label>Tên người dùng</label>
                    <input className='username' type='text' placeholder='Hãy nhập Tên Người Dùng'></input>
                </div>
                <div className='input-group'>
                    <label>Email</label>
                    <input className='email' type='email' placeholder='Hãy nhập Email'></input>
                </div>
                <div className='input-group'>
                    <label>Mật khẩu</label>
                    <input className='password' type='text' placeholder='Hãy nhập Mật Khẩu'></input>
                </div>
                <div className='input-group'>
                    <label>Xác nhận Mật khẩu</label>
                    <input className='confirm-password' type='text' placeholder='Hãy nhập lại Mật Khẩu'></input>
                </div>
            </div>
        </div>
    );
}

export default Login;