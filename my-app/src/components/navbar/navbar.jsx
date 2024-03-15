import React, { useState } from 'react';
import style from "./navbar.module.css";
import img1 from "../../assets/logo";
function Navbar() {
    const [active,setActive]= useState(style.nav_menu);
    const [toggleIcon,setToggleIcon] =useState(style.nav_toggler);
    const [isPopupVisible, setPopupVisibility] = useState(false);
    const navToggle = () => {
        setPopupVisibility(!isPopupVisible);
        setActive(active === style.nav_menu ? `${style.nav_menu} ${style.nav_active}` : style.nav_menu);
        setToggleIcon(
          toggleIcon === style.nav_toggler
            ? `${style.nav_toggler} ${style.toggle} ${style.overflow_hidden}`
            : style.nav_toggler
        );
      };      
    return (
        <>
        <header>
            <div class={style.container}>
            <h1 class={style.logo}>
                <div className={style.logo_container}><img src={img1.final} alt="" /></div>
                <span class={style.logo_text}>the premier fabric company</span>
            </h1>
            <nav className={style.nav_menu_wrap}>
                <ul className={active}>
                <li><a href="#">TRANG CHỦ</a></li>
                <li><a href="#">VỀ CHÚNG TÔI</a></li>
                <li><a href="#">SẢN PHẨM</a></li>
                <li><a href="#">NHÀ MÁY</a></li>
                <li><a href="#">PHÁT TRIỂN BỀN VỮNG</a></li>
                <li><a href="#">TIN TỨC</a></li>
                <li><a href="#">TUYỂN DỤNG</a></li>
                <li><a href="#">LIÊN HỆ</a></li>
                </ul>
                <div onClick={navToggle} className={toggleIcon}>
                    <div className={style.line1}></div>
                    <div className={style.line2}></div>
                    <div className={style.line3}></div>
                </div> 
            </nav>
            </div>
        </header>

        </>


    );
}

export default Navbar;