// BUI NGOC - CÒN STYLE PHẦN 5

import React, { useEffect, useState } from 'react';
import '../styles/home.scss'
import imgBanner from '../assets/images/img_banner_index.png';
import iconPr1 from '../assets/images/icon_pr_1.png';
import iconPr2 from '../assets/images/icon_pr_2.png';
import iconPr3 from '../assets/images/icon_pr_3.png';
import imgTearcher1 from "../assets/images/ka.jpg";
import imgTearcher2 from "../assets/images/win.jpeg";
import imgTearcher3 from '../assets/images/jisoo.jpeg';
import imgAva from '../assets/images/icon_facebook.png';
import iconSub2 from '../assets/images/icon_sub_2.png';
import Footer from '../components/Footer';
import imgBanner2 from '../assets/images/banner2.png'
const Home = () => {
    const [title, setTitle] = useState('');

    useEffect(() => {
        document.title = title;
    })

    // JSX = JavaSript XML
    return (
        <div className='homepage-container'>
            {/* 1 */}
            <div className="banner">
                <div className="slogan">
                    <p className="text1">
                        Học <span className="highlighted">Tiếng Hàn <br /></span> Chưa Bao Giờ<br />
                        <span className="highlighted">Dễ Dàng</span> Đến Thế!
                    </p>
                    <p className="text2">
                        Cung cấp cho bạn hệ thống học trực tuyến mới nhất và tài liệu giúp kiến thức của bạn ngày càng phát triển.
                    </p>
                </div>
                <img className="img_banner2" src={imgBanner} alt="Banner" />
            </div>

            {/* 2 */}
            <div className="pr_container">
                <div className="pr_container_1">
                    <div className="item" id="card_pr">
                        <img src={iconPr1} alt="10.000" className="mb-3" />
                        <div className="content">
                            <h2 className="blog_title mb-2">1000</h2>
                            <p>Sinh viên đã tham gia Edu Flow</p>
                        </div>
                    </div>

                    <div className="item ">
                        <img src={iconPr2} alt="10.000" className="mb-3" />
                        <div className="content">
                            <h3 className="blog_title mb-2">90%</h3>
                            <p>Sinh viên đã đạt TOPIK 3+</p>
                        </div>
                    </div>

                    <div className="item">
                        <img src={iconPr3} alt="10.000" className="mb-3" />
                        <div className="content">
                            <h3 className="blog_title mb-2">100%</h3>
                            <p>Đội ngũ giảng viên chất lượng cao</p>
                        </div>
                    </div>

                </div>
            </div>

            {/* 3 */}
            <div className="body_teacher_container">
                <div className="box_container">
                    <div className="teacher_container">
                        <div className="card_teacher" id="teacher1">
                            <img src={imgTearcher1} alt="KARINA" />
                            <div className="container">
                                <h4><b>KARINA</b></h4>
                                <p>TOPIK 1</p>
                            </div>
                        </div>
                        <div className="card_teacher" id="teacher2"  >
                            <img src={imgTearcher2} alt="WINTER" />
                            <div className="container">
                                <h4><b>WINTER</b></h4>
                                <p>TOPIK 2</p>
                            </div>
                        </div>
                        <div className="card_teacher" id="teacher3" >
                            <img src={imgTearcher3} alt="JISOO" />
                            <div className="container">
                                <h4><b>JISOO</b></h4>
                                <p>TOPIK 3</p>
                            </div>
                        </div>
                    </div>
                    <div className="box">
                        <div className="text_box">
                            <h2>Đội ngũ giảng viên</h2>
                            <div className="text_box_1">
                                <p>Đội ngũ giảng viên tại Trung tâm Ngôn ngữ Hi Korean bao gồm các chuyên gia giàu kinh nghiệm, đam mê giảng dạy và sở hữu kiến thức sâu rộng về ngôn ngữ và văn hóa Hàn Quốc.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* 4 */}
            <div className="body_feedback_container">
                <div className="body_feedback">
                    <div className="feedback_text1">
                        <h2>Cảm nhận từ học viên!</h2>
                        <p>Giáo dục là chìa khóa mở ra cánh cửa thành công. "Học hôm nay, dẫn đầu ngày mai" chính là phương châm của chúng tôi. Học tiếng Hàn chưa bao giờ dễ dàng hơn thế khi bạn đồng hành cùng chúng tôi. Hãy xem những học viên của chúng tôi đã trải nghiệm và chia sẻ điều gì.</p>
                    </div>

                    <div className="card_feedback_container">
                        <div className="card_feedback">
                            <div className="avatar">
                                <img src={imgAva} />
                                <p>Bui Ngoc</p>
                            </div>
                            <div className="comment">
                                "Khóa học giúp tôi xây dựng nền tảng ngữ pháp và từ vựng vững chắc. Giảng viên vô cùng tận tâm, luôn sẵn sàng giải đáp mọi thắc mắc và hướng dẫn chi tiết."
                            </div>
                        </div>
                        <div className="card_feedback">
                            <div className="avatar">
                                <img src={imgAva} />
                                <p>Tien Trung</p>
                            </div>
                            <div className="comment">
                                "Tôi vừa hoàn thành khóa học TOPIK 1 do cô Karina giảng dạy. Phong cách giảng dạy chuyên nghiệp, dễ hiểu và đầy nhiệt huyết của cô đã giúp tôi tự tin hơn rất nhiều."
                            </div>
                        </div>
                        <div className="card_feedback">
                            <div className="avatar">
                                <img src={imgAva} />
                                <p>Dang Khoa</p>
                            </div>
                            <div className="comment">
                                "Không chỉ học kiến thức, tôi còn được hướng dẫn phương pháp học hiệu quả. Giảng viên rất thân thiện và luôn khuyến khích chúng tôi phát triển khả năng ngôn ngữ."

                            </div>
                        </div>
                        <div className="card_feedback">
                            <div className="avatar">
                                <img src={imgAva} />
                                <p>Trung Ngoc Khoa</p>
                            </div>
                            <div className="comment">
                                "Cảm ơn cô Karina đã mang đến một khóa học tuyệt vời! Cách cô truyền đạt thật dễ hiểu, cùng sự tận tâm trong từng bài giảng đã khiến việc học tiếng Hàn trở nên thú vị hơn bao giờ hết."
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* 5 chinh lai*/}
            <div className="banner">
                <div className="slogan">
                    <p className="text1"> 
                    Thúc đẩy <span className="highlighted">sự nghiệp<br />của bạn & mở rộng <br /></span> <span className="highlighted">kiến thức </span> ở bất kỳ cấp độ nào.<br />
                    </p>
                    <p className="text2">
                        Cung cấp cho bạn hệ thống học trực tuyến mới nhất và tài liệu giúp kiến thức của bạn ngày càng phát triển.
                    </p>
                </div>
                <img className="img_banner3" src={imgBanner2} alt="Banner" />
               
            </div>

            {/* 6 */}
            <Footer/>
        </div>
    );
}

export default Home;