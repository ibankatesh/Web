import React, { useEffect, useState, useCallback } from 'react';
import '../Assets/styles/carousel.css'; // Import CSS for the slider styles
import img1 from '../Assets/images/img1.jpg';
import img2 from '../Assets/images/img2.jpg';
import img4 from '../Assets/images/img4.jpg';
import img5 from '../Assets/images/img5.jpg';
import img9 from '../Assets/images/img9.jpg';

const Slider = () => {
    const [items, setItems] = useState([]);
    const [countItem, setCountItem] = useState(0);
    const [itemActive, setItemActive] = useState(0);

    useEffect(() => {
        const itemList = document.querySelectorAll('.slider .list .item');
        setItems(itemList);
        setCountItem(itemList.length);
    }, []);

    const showSlider = useCallback(() => {
        items.forEach((item, index) => {
            if (index === itemActive) {
                item.classList.add('active');
            } else {
                item.classList.remove('active');
            }
        });
    }, [itemActive, items]);

    useEffect(() => {
        const interval = setInterval(() => {
            setItemActive(prevActive => (prevActive + 1) % countItem);
        }, 8000);

        return () => clearInterval(interval);
    }, [countItem]);

    useEffect(() => {
        showSlider();
    }, [showSlider]);

    return (
        <div>
        <div className="slider">
            {/* list Items */}
            <div className="list">
                {/* Slider items */}
                <div className="item active">
                    <img src={img1} alt="Slider" />
                    <div className="content">
                        <p>design</p>
                        <h2>Slider 01</h2>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore, neque?
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum, ex.
                        </p>
                    </div>
                </div>
                <div className="item">
                    <img src={img2} alt="Slider" />
                    <div className="content">
                        <p>design</p>
                        <h2>Slider 02</h2>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore, neque?
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum, ex.
                        </p>
                    </div>
                </div>
                <div className="item">
                    <img src={img9} alt="Slider " />
                    <div className="content">
                        <p>design</p>
                        <h2>Slider 03</h2>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore, neque?
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum, ex.
                        </p>
                    </div>
                </div>
                
               
            </div>
            
            {/* button arrows */}
            <div className="arrows">
                <button id="prev">&lt;</button>
                <button id="next">&gt;</button>
                
            </div>
            <div className="processing-line1" id="processing-line-1"></div> {/* Processing line */}
        </div>
        

     {/* wht we do section*/}
        <div>
        <div className="left-aligned"  style={{textAlign:'center',paddingTop:'80px'}}>
      <h3 style={{textAlign:'center'}}><b>WHAT WE DO</b></h3>
      <p>Real transformation demands hard work, persistence, and the right tools for the job. 
        <br/>For over 20 years, we've redefined craftsmanship and shared our expertise to help our clients succeed.</p>
    </div>
        <div>
            
            <div id="formList">
                
                <div id="list">
                    <div className="item1">
                        <img src={img4} alt="Chopper" className="avatar" />
                        <div className="content">
                            <table width="100%" cellSpacing="0">
                                
                                <tr>
                                    <td colSpan="2" className="nameGroup">Thành viên băng Mũ Rơm</td>
                                </tr>
                            </table>
                        </div>
                    </div>
                    <div className="item1">
                        <img src={img5} alt="Brook" className="avatar" />
                        <div className="content">
                            <table width="100%" cellSpacing="0">
                                <tr>
                                    <td>Tên</td>
                                    <td>Brook</td>
                                </tr>
                                <tr>
                                    <td>Nghề nghiệp</td>
                                    <td>Hải tặc</td>
                                </tr>
                                <tr>
                                    <td>Sức mạnh</td>
                                    <td>Bất tử</td>
                                </tr>
                                <tr>
                                    <td colSpan="2" className="nameGroup">Thành viên băng Mũ Rơm</td>
                                </tr>
                            </table>
                        </div>
                    </div>
                    <div className="item1">
                        <img src={img5} alt="Sanji" className="avatar" />
                        <div className="content">
                            <table width="100%" cellSpacing="0">
                                <tr>
                                    <td>Tên</td>
                                    <td>Sanji</td>
                                </tr>
                                <tr>
                                    <td>Nghề nghiệp</td>
                                    <td>Đầu bếp</td>
                                </tr>
                                <tr>
                                    <td>Sức mạnh</td>
                                    <td>Chân lửa</td>
                                </tr>
                                <tr>
                                    <td colSpan="2" className="nameGroup">Thành viên băng Mũ Rơm</td>
                                </tr>
                            </table>
                        </div>
                    </div>
                    <div className="item1">
                        <img src={img5} alt="Usopp" className="avatar" />
                        <div className="content">
                            <table width="100%" cellSpacing="0">
                                <tr>
                                    <td>Tên</td>
                                    <td>Usopp</td>
                                </tr>
                                <tr>
                                    <td>Nghề nghiệp</td>
                                    <td>Xạ thủ</td>
                                </tr>
                                <tr>
                                    <td>Sức mạnh</td>
                                    <td>Chém gió</td>
                                </tr>
                                <tr>
                                    <td colSpan="2" className="nameGroup">Thành viên băng Mũ Rơm</td>
                                </tr>
                            </table>
                        </div>
                    </div>
                    <div className="item1">
                        <img src={img5} alt="Nami" className="avatar" />
                        <div className="content">
                            <table width="100%" cellSpacing="0">
                                <tr>
                                    <td>Tên</td>
                                    <td>Nami</td>
                                </tr>
                                <tr>
                                    <td>Nghề nghiệp</td>
                                    <td>Hoa tiêu</td>
                                </tr>
                                <tr>
                                    <td>Sức mạnh</td>
                                    <td>Ăn hiếp đồng đội</td>
                                </tr>
                                <tr>
                                    <td colSpan="2" className="nameGroup">Thành viên băng Mũ Rơm</td>
                                </tr>
                            </table>
                        </div>
                    </div>
                    <div className="item1">
                        <img src={img5} alt="Robin" className="avatar" />
                        <div className="content">
                            <table width="100%" cellSpacing="0">
                                <tr>
                                    <td>Tên</td>
                                    <td>Robin</td>
                                </tr>
                                <tr>
                                    <td>Nghề nghiệp</td>
                                    <td>Hải tặc</td>
                                </tr>
                                <tr>
                                    <td>Sức mạnh</td>
                                    <td>Nghìn tay</td>
                                </tr>
                                <tr>
                                    <td colSpan="2" className="nameGroup">Thành viên băng Mũ Rơm</td>
                                </tr>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        
          
        </div>
        </div>


        
      </div> 
       
    );
};

export default Slider;
