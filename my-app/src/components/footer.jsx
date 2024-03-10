import React from 'react';
import "./footer.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faYoutube, faLinkedin, faFacebook } from '@fortawesome/free-brands-svg-icons';
import logo_footer from "../assets/img/logo-footer-02-01.svg";

function footer(props) {
  return (
    <div>
      <div id="container">
        <div className="footer-content">
          <a href="index.html"><img src={logo_footer} alt="logo"/></a>
          <div className="footer-icon">
            <ul>
                <li><a href="https://www.youtube.com/channel/UCs_nNQxTKiEJ8Li-gmeodKA" target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faYoutube} className="youtube-icon" />
                </a></li>
                <li><a href="https://www.linkedin.com/company/bao-minh-textile-jsc/?viewAsMember=true" target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faLinkedin} className="linkedin-icon" />
                </a></li>
                <li><a href="https://www.facebook.com/BaoMinhTextile" target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faFacebook} className="facebook-icon" />
                </a></li>
            </ul>
          </div>
        </div>
        <div class="footer-content">
          <h3>Contact Us</h3>
          <p>Email Văn phòng Tổng công ty:info@baominhtextile.com</p>
          <p>Email Nhà máy Bảo Minh:hai.pham@baominhtextile.com</p>
          <p>Phone Tổng công ty:(+84) 0228 625 3333</p>
          <p>Phone Nhà máy Bảo Minh:(+84) 0228 625 3333 / (+84) 0228 628 2555</p>

        </div>
        <div class="footer-content">
          <h3>Address</h3>
          <p>Văn phòng Tổng công ty: Lô CN4, Khu Công Nghiệp Bảo Minh, X.Liên Bảo, H.Vụ Bản, T.Nam Định, Việt Nam.</p>
          <p>Văn phòng Hà Nội:Căn 10 Tầng 12A Tòa Nhà Century Tower, Số 458 Đường Minh Khai, Quận Hai Bà Trưng, Thành Phố Hà Nội, Việt Nam.</p>
          <p>Nhà máy Bảo Minh:Lô CN4, Khu Công Nghiệp Bảo Minh, X.Liên Bảo, H.Vụ Bản, T.Nam Định, Việt Nam.</p>
        </div>
      </div>
      <div class="bottom-bar">
          <p>�� 2018 Bao Minh Textile JSC & All right reserved.</p>
        </div>
    </div>
  );
}

export default footer;