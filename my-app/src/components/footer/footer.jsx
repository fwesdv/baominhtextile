import React from 'react';
import style from  "./footer.module.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faYoutube, faLinkedin, faFacebook } from '@fortawesome/free-brands-svg-icons';
import logo_footer from "../../assets/img/logo-footer-02-01.svg";
import img1 from "../../assets/logo";

function footer(props) {
  return (
    <div className={style.main_footer}>
      <div className={style.logo_icon}>
        <div className={style.logo_wrap}>
          <div className={style.logo_main}>
              <h1 class={style.logo}>
                  <div className={style.logo_container}><img src={img1.final} alt="" /></div>
                  <span class={style.logo_text}>the premier fabric company</span>
              </h1>
                <span> CÔNG TY CỔ PHẦN DỆT BẢO MINH</span>
            </div>  
        </div>
    
          <div className={style.footer_icon}>
            <div className={style.icon_wrap}>
              <span> SOCIAL MEDIA</span>
              <ul>
              <li><a href="https://www.facebook.com/BaoMinhTextile" target="_blank" rel="noopener noreferrer">
                      <FontAwesomeIcon icon={faFacebook} className="" />
                  </a></li>
                  <li><a href="https://www.youtube.com/channel/UCs_nNQxTKiEJ8Li-gmeodKA" target="_blank" rel="noopener noreferrer">
                      <FontAwesomeIcon icon={faYoutube} className={style.youtube_icon} />
                  </a></li>

                  <li><a href="https://www.facebook.com/BaoMinhTextile" target="_blank" rel="noopener noreferrer">
                      <FontAwesomeIcon icon={faLinkedin} className="" />
                  </a></li>
              </ul>
            </div>
          </div>
      </div>
      <div id={style.container}>
        <div className={style.footer_content}>
          <div className={`${style.row} ${style.flex} ${style.flex_Wrap}`}>
                <div className={`$${style.col_6} ${style.col_lg_3}`}>
                    <div className={style.footercol}>
                        <div className={style.ftitle}>Giới thiệu</div>
                        <nav className={style.footerlink}>
                            <ul>
                                <li><a href="">về chúng tôi</a></li>
                                <li><a href="">Sản phẩm</a></li>
                                <li><a href="">Nhà máy</a></li>
                                <li><a href="">Phát triển bền vững</a></li>
                            </ul>
                        </nav>
                    </div>
                </div>
                <div className={`$${style.col_6} ${style.col_lg_3}`}>
                    <div className={style.footercol}>
                        <div className={style.ftitle}>Hệ Thống</div>
                        <nav className={style.footerlink}>
                            <ul>
                                <li><a href="">Nhà máy dệt</a></li>
                                <li><a href="">Nhà máy nhuộm</a></li>
                                <li><a href="">Nhà máy hoàn tất</a></li>
                            </ul>
                        </nav>
                    </div>
                </div>
                <div className={`$${style.col_6} ${style.col_lg_3}`}>
                    <div className={style.footercol}>
                        <div className={style.ftitle}>Tin Tức</div>
                        <nav className={style.footerlink}>
                            <ul>
                                <li><a href="">Tin tức nội bộ</a></li>
                                <li><a href="">Tin tức ngành</a></li>
                                <li><a href="">Sự kiện</a></li>
                            </ul>
                        </nav>
                    </div>
                </div>
                <div className={`$${style.col_6} ${style.col_lg_3}`}>
                    <div className={style.footercol}>
                        <div className={style.ftitle}>Liên Hệ</div>
                        <nav className={style.footerlink}>
                            <ul>
                                <li><a href="">CN4, bao Minh IP, Vu Ban, Nam dinh, vietnam</a></li>
                                <li><a href="">info@baominhtextile.com</a></li>
                                <li><a href="">0228 6282 555</a></li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </div>
        </div>
      </div>
        {/* <div className="bottom_bar">
          <p>�� 2018 Bao Minh Textile JSC & All right reserved.</p>
        </div> */}
    </div>
  );
}

export default footer;