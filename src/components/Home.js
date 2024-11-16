import React, { useEffect, useState } from 'react';
import background1 from '../assets/images/background1.jpg';
import '../styles/home.css'

const Home = () => {
    const [title, setTitle] = useState('');

    useEffect(() => {
        document.title = title;
    })

    return (
        <div className='homepage-container'>
            <div className='background-img'>
                <img src={background1} alt=""></img>
            </div>
            <input
                placeholder='Enter here!'
                value={title}
                onChange={e => setTitle(e.target.value)}
            >
            </input>
        </div>
    );
}

export default Home;