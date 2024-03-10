import React, { useState } from 'react';
import "./navbar.css";
function Navbar() {
    const [active,setActive]= useState("nav_menu");
    const [toggleIcon,setToggleIcon] =useState("nav_toggler");
    const [isPopupVisible, setPopupVisibility] = useState(false);
    const navToggle = () => {
        setPopupVisibility(!isPopupVisible);
        setActive(active === "nav_menu" ? "nav_menu nav_active" : "nav_menu");
        setToggleIcon(
          toggleIcon === "nav_toggler"
            ? "nav_toggler toggle nav-block"
            : "nav_toggler"
        );
      
        // Add or remove the 'overflow-hidden' class to the body
        document.body.classList.toggle("overflow-hidden");
      };      
    return (
        <>
        <div className="main">
            <div class="nav_overlay"></div>
            <nav className="nav"> 
                <a href="#" className='nav_brand'>logo</a>
                <ul className={active}>
                    <li className="nav_item"> <a href="/" className="nav_link">Trang chủ</a></li>
                    <li className="nav_item"> <a href="/" className="nav_link">Trang chủ</a></li>
                    <li className="nav_item"> <a href="/" className="nav_link">Trang chủ</a></li>
                    <li className="nav_item"> <a href="/" className="nav_link">Trang chủ</a></li>
                    
                </ul>  
                <div onClick={navToggle} className={toggleIcon}>
                    <div className="line1"></div>
                    <div className="line2"></div>
                    <div className="line3"></div>
                </div>    
            </nav>
        </div>

        </>


    );
}

export default Navbar;