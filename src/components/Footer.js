
import React from "react";
import imgLogo from '../assets/images/logoapp1.png';
import imgFacebook from '../assets/images/icon_facebook.png';
import imgTiktok from '../assets/images/icon_tiktok.png';
import '../styles/footer.scss'

const Footer = () =>{
    return(

        <div className="body_info_container">
                <div className="info_left">
                    <div className="logo">
                        <img src={imgLogo} alt="Logo" />
                        <p>Master Korean as You Go</p>
                    </div>
                    <div className="info">
                        <p>
                            Hotline: 0903.623.510<br />
                            Email: eduflowkorea@gmail.com<br />
                            Address: xxx - xxx- xxx
                        </p>
                    </div>

                </div>

                <div className="info_right">
                    <div>
                        <div className="icon_link">
                            <div className="links">
                                <img src={imgFacebook} alt='facebook' />
                                <a href="#">eduflow.facebook.com</a>
                            </div>
                            <div className="links">
                                <img src={imgTiktok} alt='tiktok' />
                                <a href="#">eduflow.tiktok.com</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    );
}

export default Footer;