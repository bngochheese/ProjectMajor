import React, { useEffect, useState } from 'react';
import background1 from '../assets/images/background1.jpg';
import '../styles/home.scss'
import imgBanner from '../assets/images/img_banner_index.png';
const Home = () => {
    const [title, setTitle] = useState('');

    useEffect(() => {
        document.title = title;
    })

    // JSX = JavaSript XML
    return (
        <div className='homepage-container'>
            <div className="banner">
                <div className="slogan">
                    <p className="text1">
                        Learning <span className="highlighted">Korean <br /></span> Has Never Been<br />
                        <span className="highlighted">Easier</span>!
                    </p>
                    <p className="text2">
                        Provides you with the latest online learning<br />system and material that help your<br />knowledge
                        growing
                    </p>
                </div>
                <img className="img_banner2" src={imgBanner} alt="Banner" />
            </div>
            
        </div>
    );
}

export default Home;