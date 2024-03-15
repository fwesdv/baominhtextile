import React, { useState, useEffect } from 'react';
import "./Home.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import img from '../../assets/img';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import Slider from 'react-slick';
const slides = [
    {
      id: 0,
      img: img.product01,
    },
    {
      id: 1,
      img: img.product02,
    },
    {
        id: 2,
        img: img.product03,
    },
  ];
  const slides1 = [
    {
      id: 0,
      img: img.certificates_02,
    },
    {
      id: 1,
      img: img.certificates_03,
    }
  ];
function Home(props) {
  const [index, setIndex] = useState(0);
  const [index1, setIndex1] = useState(0);
  const [active, setActive] = useState("nav_menu");
  const [toggleIcon, setToggleIcon] = useState("nav_toggler");
  const [isPopupVisible, setPopupVisibility] = useState(false);
  const [currentId, setCurrentId] = useState(null);
  const [currentTab, setCurrentTab] = useState(null);
  const tabContainerHeight = 70;
      const nextSlide = () => {
        setIndex((index + 1) % slides.length);
      };
    
      const prevSlide = () => {
        setIndex(index === 0 ? slides.length - 1 : index - 1);
      };
      const nextSlide1 = () => {
        setIndex1((index1 + 1) % slides1.length);
      };
    
      const prevSlide1 = () => {
        setIndex1(index1 === 0 ? slides1.length - 1 : index - 1);
      };

    
    const navToggle = () => {
      const overlay = document.getElementById('overlay');
      overlay.style.display = "block";
      setPopupVisibility(!isPopupVisible);
      setActive(active === "nav_menu" ? "nav_menu nav_active" : "nav_menu");
      setToggleIcon(toggleIcon === "nav_toggler" ? "nav_toggler toggle" : "nav_toggler");
    }; 
    
    useEffect(() => {
      const overlay = document.getElementById('overlay');
  
      const closePopup = (event) => {
        if (event.target === overlay) {
          overlay.style.display = "none";
          setPopupVisibility(false);
          setActive("nav_menu");
          setToggleIcon("nav_toggler");
        }
      };
  
      window.addEventListener('click', closePopup);
  
      return () => {
        window.removeEventListener('click', closePopup);
      };
    }, [isPopupVisible]);
    useEffect(() => {
      const handleTabClick = (event, element) => {
        event.preventDefault();
        const scrollTop = document.querySelector(element.getAttribute('href')).offsetTop - tabContainerHeight + 1;
        window.scrollTo({ top: scrollTop, behavior: 'smooth' });
      };
  
      const handleScroll = () => {
        checkTabContainerPosition();
        findCurrentTabSelector();
      };
  
      const handleResize = () => {
        if (currentId) {
          setSliderCss();
        }
      };
      const checkTabContainerPosition = () => {
        const tabContainer = document.querySelector('.et-hero-tabs');
        const offset = tabContainer.offsetTop + tabContainer.offsetHeight - tabContainerHeight;
        if (window.scrollY > offset) {
          document.querySelector('.et-hero-tabs-container').classList.add('et-hero-tabs-container--top');
        } else {
          document.querySelector('.et-hero-tabs-container').classList.remove('et-hero-tabs-container--top');
        }
      };
      const findCurrentTabSelector = () => {
        const tabs = document.querySelectorAll('.et-hero-tab');
        let newCurrentId;
        let newCurrentTab;
  
        tabs.forEach((tab) => {
          const id = tab.getAttribute('href');
          const offsetTop = document.querySelector(id).offsetTop - tabContainerHeight;
          const offsetBottom = document.querySelector(id).offsetTop + document.querySelector(id).offsetHeight - tabContainerHeight;
  
          if (window.scrollY > offsetTop && window.scrollY < offsetBottom) {
            newCurrentId = id;
            newCurrentTab = tab;
          }
        });
  
        if (currentId !== newCurrentId || currentId === null) {
          setCurrentId(newCurrentId);
          setCurrentTab(newCurrentTab);
          setSliderCss();
        }
      };
  
      const setSliderCss = () => {
        let width = 0;
        let left = 0;
  
        if (currentTab) {
          width = getComputedStyle(currentTab).width;
          left = currentTab.offsetLeft;
        }
  
        document.querySelector('.et-hero-tab-slider').style.width = width;
        document.querySelector('.et-hero-tab-slider').style.left = `${left}px`;
      };
  
      document.querySelectorAll('.et-hero-tab').forEach((tab) => {
        tab.addEventListener('click', (event) => handleTabClick(event, tab));
      });
  
      window.addEventListener('scroll', handleScroll);
      window.addEventListener('resize', handleResize);
  
      return () => {
        window.removeEventListener('scroll', handleScroll);
        window.removeEventListener('resize', handleResize);
      };
    }, [currentId]);
  
    return (
        <>
      <section className="et-hero-tabs">
        <img src={img.logo_header_03} alt=""/>
        <div className="et-hero-tabs-container">
          <a className="et-hero-tab" href="#tab-01">
            Giới Thiệu
          </a>
          <a className="et-hero-tab" href="#tab-02">
            Sản Phẩm
          </a>
          <a className="et-hero-tab" href="#tab-03">
            Nhà Máy
          </a>
          <a className="et-hero-tab" href="#tab-04">
            Chứng Chỉ
          </a>
          <span className="et-hero-tab-slider"></span>
        </div>
      </section>

      {/* Main */}
      <main className="et-main">
        {/* <!-- gioi thieu --> */}
        <section className="et-slide" id="tab-01">
          <div className="">
          <section class="about-part1">
          <div class="container-intro">
            <div class="row flex flex-wrap flex-content-center">
                <div class="col-12">
                    <h2 class="title"></h2>
                <div class="content">
                    <h1 class="pagetitle">Chúng tôi là ai</h1>
                    <p>Công ty Dệt Bảo Minh là một trong những nhà sản xuất vải dệt thoi hàng đầu Việt Nam, có nhà máy được đặt tại Tỉnh Nam Định.</p>
                    <p>Các hoạt động của Bảo Minh bao gồm dệt, nhuộm (nhuộm yarn dye và piece dye), và các công nghệ hoàn tất vải sợi. Các công đoạn tạo mẫu handloom, phòng thí nghiệm, …và tất cả các&nbsp; trang thiết bị đều được tập trung tại khu công nghiệp Bảo Minh, thuộc huyện Vụ Bản, tỉnh Nam Định, là một trong những khu vực đặc thù dành riêng cho lĩnh vực sản xuất dệt may.&nbsp;</p>
                    <p>Mọi nhu cầu của khách hàng sẽ được đáp ứng tại Bảo Minh, từ thiết kế phát triển đến sản xuất ra thành phẩm vải dệt thoi.</p>
                    <p>Bên cạnh những nỗ lực không ngừng để làm hài lòng đối tác thông qua việc luôn chú trọng đổi mới cải tiến, đặt chất lượng là mục tiêu hàng đầu, tận tụy chăm sóc khách hàng, và quan trọng hơn nữa chúng tôi còn có những cam kết&nbsp; kinh doanh theo tiêu chí phát triển bền vững – bảo vệ môi trường.&nbsp;</p>
                    <p>Chúng tôi hoạt động theo phương châm:</p>
                    <p>&nbsp; <strong><span class="content-end">"ĐẢM BẢO CHẤT LƯỢNG, BỀN VỮNG TƯƠNG LAI".</span></strong></p></div>
                </div>
            </div>
        </div>
        </section>
        .
        <div class="about-part2-wrap">
          <div class="container">
              <div class="row flex flex-wrap flex-content-center">
                  <div class="col-12 col-xl-10">
                      <section class="about-part2">
                          <div class="row flex flex-wrap flex-end">
                              <div class="col-12 col-lg-5 item-ab">
                              <figure>
                              <div class="img">
                                  <img src={img.mission} alt="Sứ mệnh"/>
                              </div>
                                  <figcaption>
                                  <h3>Sứ mệnh</h3>
                                  <div class="brief"><div className="center">Trở thành nhà cung cấp vải dệt thoi uy tín và kinh doanh theo định hướng phát triển bền vững, Bảo Minh sẽ là một trong những sự lựa chọn hàng đầu của phân khúc khách hàng mục tiêu.</div></div>
                                  </figcaption>
                              </figure>
                          </div>
                          <div class="col-12 col-lg-5 item-ab">
                              <figure>
                              <div class="img">
                                  <img src={img.vision} alt="Tầm nhìn"/>
                              </div>
                              <figcaption>
                                  <h3>Tầm nhìn</h3>
                                  <div class="brief"><div className="center">Mang đến những lợi ích to lớn cho các đối tác kinh doanh song song với việc bảo vệ môi trường sống, chắp cánh cho những thế hệ mai sau.</div></div>
                              </figcaption>
                              </figure>
                          </div>
                          </div>
                      </section>
                      <section class="about-part3">
                      <div class="banner-img">
                        <img src={img.png1} alt="Giá trị cốt lõi"/>
                      <h3>Giá trị cốt lõi</h3>
                      </div>
                      <div class="row flex flex-wrap flex-content-center abPart3Wrap">
                      <div class="col-12 col-xl-11">
                          <div class="row flex flex-wrap flex-content-center">
                              <div class="col-12 col-md-6 col-lg-4 item-ab3">
                                  <figure>
                                      <div class="img">
                                          <img src={img.value1} alt="Tăng trưởng bền vững"/>
                                      </div>
                                      <figcaption>
                                      <h3>Tăng trưởng bền vững</h3>
                                      <div class="brief"><p className="justify">Sáng tạo và cải tiến không ngừng để phát triển doanh nghiệp đi đôi với giảm thiểu tác động tiêu cực của sản xuất đến môi trường và con người.</p>
                                      <p className="justify">&nbsp;</p></div>
                                      </figcaption>
                                  </figure>
                              </div>
                              <div class="col-12 col-md-6 col-lg-4 item-ab3">
                              <figure>
                                  <div class="img">
                                  <img src={img.value2} alt="Phát triển con người"/>
                                  </div>
                                  <figcaption>
                                  <h3>Phát triển con người</h3>
                                  <div class="brief"><p className="justify">Tạo dựng môi trường làm việc an toàn, “hạnh phúc”. Tạo điều kiện bồi dưỡng kỹ năng và phát triển năng lực của từng cá nhân.</p>
                              <p className="justify">&nbsp;</p></div>
                                  </figcaption>
                              </figure>
                              </div>
                              <div class="col-12 col-md-6 col-lg-4 item-ab3">
                              <figure>
                                  <div class="img">
                                  <img src={img.value3} alt="Sự hài lòng của khách hàng"/>
                                  </div>
                                  <figcaption>
                                  <h3>Sự hài lòng của khách hàng</h3>
                                  <div class="brief"><div className="justify">Cam kết cung cấp đúng hạn cho khách hàng những sản phẩm đạt chất lượng theo yêu cầu, kèm theo các dịch vụ hậu mãi chu đáo nhất.</div></div>
                                  </figcaption>
                              </figure>
                              </div>
                              </div>
                          </div>
                      </div>
                  </section>
                  </div>
              </div>
          </div>
      </div><section class="about-part4">
            <div class="container">
                <h2 class="pagetitle">Năng lực cốt lõi</h2>
                <div class="row flex flex-wrap flex-content-center">
                    <div class="col-12 col-md-6 col-lg-3 item-ab4">
                        <figure>
                            <a class="img" href="#!" title="Tập trung vào các công nghệ mới và cải tiến quy trình liên tục">
                            <img src={img.dsc_4239_01} alt="Tập trung vào các công nghệ mới và cải tiến quy trình liên tục"/>
                            </a>
                            <figcaption>
                            <h3>
                            <a href="#!" title="Tập trung vào các công nghệ mới và cải tiến quy trình liên tục">Tập trung vào các công nghệ mới và cải tiến quy trình liên tục</a></h3>
                            </figcaption>
                        </figure>
                    </div>
                    <div class="col-12 col-md-6 col-lg-3 item-ab4">
                    <figure>
                    <a class="img" href="#!" title="Xây dựng một mô hình kinh doanh tích hợp">
                    <img src={img.dsc5} alt="Xây dựng một mô hình kinh doanh tích hợp"/>
                    </a>
                    <figcaption>
                    <h3>
                    <a href="#!" title="Xây dựng một mô hình kinh doanh tích hợp">Xây dựng một mô hình kinh doanh tích hợp</a></h3>
                    </figcaption>
                    </figure>
                    </div>
                    <div class="col-12 col-md-6 col-lg-3 item-ab4">
                    <figure>
                    <a class="img" href="#!" title="Tạo dựng doanh nghiệp quy mô lớn và hoạt động hiệu quả">
                    <img src={img.dsc_4480_01}alt="Tạo dựng doanh nghiệp quy mô lớn và hoạt động hiệu quả"/>
                    </a>
                    <figcaption>
                    <h3>
                    <a href="#!" title="Tạo dựng doanh nghiệp quy mô lớn và hoạt động hiệu quả">Tạo dựng doanh nghiệp quy mô lớn và hoạt động hiệu quả</a></h3>
                    </figcaption>
                    </figure>
                    </div>
                    <div class="col-12 col-md-6 col-lg-3 item-ab4">
                    <figure>
                    <a class="img" href="#!" title="Tập trung đa dạng hóa sản phẩm và gia tăng giá trị">
                    <img src={img.dsc_5222_01} alt="Tập trung đa dạng hóa sản phẩm và gia tăng giá trị"/>
                    </a>
                    <figcaption>
                    <h3>
                    <a href="#!" title="Tập trung đa dạng hóa sản phẩm và gia tăng giá trị">Tập trung đa dạng hóa sản phẩm và gia tăng giá trị</a></h3>
                    </figcaption>
                    </figure>
                    </div>
                </div>
            </div>
        </section>
          </div>
          
        </section>
        {/* -------San Pham--------- */}
        <section className="et-slide" id="tab-02">
        <div class="product-detail">
          <div class="container">
            <div class="row">
              <div class="col-12 col-lg-6">
                <div className="slider-container">
                <div className="slider">
                <img className="slider-image" src={slides[index].img} alt={"#"} />
              </div>
                <button className="prev-button" onClick={prevSlide}>
                    
                </button>
                <button className="next-button" onClick={nextSlide}>
                  
                </button>
                </div>
              </div>
              <div class="col-12 col-lg-6">
              <div className="content" style={{ textAlign: 'justify', color: '#333333', backgroundColor: '#ffffff' }}>
              <p>
                <span style={{ fontSize: '14px' }}></span>
              </p>
              <p className='justify'>
                <strong>Bảo Minh Textile JSC tập trung sản xuất vải dệt thoi chất lượng cao ở các hình thức “vải nhuộm sợi” (yarn-dyed fabrics) và “vải nhuộm tấm” (piece-dyed fabrics). Chúng tôi cũng cung cấp sợi nhuộm (sợi ring-spun và sợi filament) và chỉ may Polyester Spun (
                  <meta charset="utf-8" />
                  <span style={{ fontSize: '14px', boxSizing: 'border-box', fontStyle: 'normal', textAlign: 'justify' }}>với các chi số Ne 40/2, 50/2, 60/2, 80/2, 20/2, 20/3...).&nbsp;</span>
                </strong>
              </p>
              <p className='justify'>
                <span style={{ fontStyle: 'inherit', textAlign: 'left' }}>Các mặt hàng cốt lõi của Bảo Minh Textile JSC bao gồm: 100% Cotton, Cotton / Polyester, Cotton / Linen, Cotton Spandex, từ 120 gsm đến 330 gsm với chi số từ 30/1 đến 100/2, cùng đa dạng các kiểu dệt như Dobby, Poplin, Oxford, Twill và Jacquard.&nbsp;</span>
                <span style={{ fontStyle: 'inherit', textAlign: 'left' }}>Các mặt hàng khác như Rayon, Rayon / Polyester, Bamboo / Polyester, Cotton / Filament / Spandex, ... cũng có có thể được phát triển theo yêu cầu của khách hàng.&nbsp;</span>
              </p>
              <p className='justify'>
                <span style={{ fontStyle: 'inherit', textAlign: 'left' }}>Đối với quy trình hoàn tất, chúng tôi tự hào có thể cung ứng đa dạng các kiểu hoàn tất khác nhau. Đối với các quy trình hoàn thiện chuyên biệt khác, Bảo Minh cũng có thể phát triển theo từng yêu cầu riêng của khách hàng.&nbsp;</span>
              </p>
              <p className='justify'>
                <span style={{ fontStyle: 'inherit', textAlign: 'left' }}>Chúng tôi ưu tiên sử dụng những nguồn nguyên liệu phù hợp với tiêu chí phát triển bền vững như cotton Organic, Supima, BCI và recycled polyester.&nbsp;</span>
              </p>
              <p style={{ margin: '0px', padding: '0px', border: '0px', font: 'inherit', verticalAlign: 'baseline', textAlign: 'justify' }}>&nbsp;</p>
              <div style={{ margin: '0px', padding: '0px', border: '0px', font: 'inherit', verticalAlign: 'baseline' }}>
                <br style={{ fontFamily: 'Segoe UI Web (Vietnamese)', fontSize: '15px', fontStyle: 'normal' }} />
              </div>
              <p>&nbsp;</p>
            </div>
                </div>
            </div>
          </div>
        </div>
        </section>
        {/* -------------nha may----------- */}
        <section className="et-slide" id="tab-03">
  <div class="container">
    <div class="listfactory">
      <div class="row flex flex-wrap">
        <div class="col-12 col-md-4 item-factory">
          <figure>
            <Popup
            trigger={
                <a href="#!" className="factoryimg">
                <img src={img.dsc_4677} alt="Nhà máy dệt" />
                </a>
            }
            modal
            nested
            >
            {(close) => (
                <div className="popup">
                    <span
                    className="popup-close-button"
                    onClick={close}
                    style={{
                        position: 'absolute',
                        top: '10px',
                        right: '10px',
                        cursor: 'pointer',
                    }}
                    >
                    &times;
                    </span>
                    <div class="popup-content">
                <div class="row">
                  <div class="col-12 col-lg-5">
                    <div class="factoryimg">
                      <img src={img.dsc_4677} alt="Nhà máy dệt"/>
                    </div>
                  </div>
                  <div class="col-12 col-lg-7">
                    <div class="factoryinfo">
                        <h2 class="pagetitle">Nhà máy dệt</h2>
                        <div class="factorydesc">
                        <p></p>
                        <p>
                            <strong>Nhà máy dệt sản xuất vải dệt thoi cao cấp cho áo sơmi với sản lượng 3 triệu mét vải một tháng,&nbsp;</strong>
                            <span>chi số từ 30/1 đến 100/2 với đa dạng kiểu dệt như: Trơn, Dobby, Poplin, Oxford, Twill, Satin, Chambray và Fil-a-Fil.&nbsp;</span>
                        </p>
                        <p>&nbsp;</p>
                        <p>Hiện tại Bảo Minh JSC đã trang bị 207 máy Toyota T810 Airjet gồm các loại dệt đôi 6 màu 16 khung, dệt đơn 6 màu 16 khung, 6 màu 6 khung và 6 màu 4 khung (với khổ vải lên đến 2.3m), 40 máy Rapiers và 2 máy Jacquards, sử dụng chủ yếu sợi CM compact, CVC compact và TC compact.&nbsp;</p>
                        <p>&nbsp;</p>
                        <p>Ngoài ra, chúng tôi cũng có khả năng dệt các loại vải làm từ Cotton/Linen, Cotton/Bamboo và Cotton co dãn (Cotton/Spandex).</p>
                        <p>&nbsp;</p>
                        </div>
                    </div>
                    </div>
                    </div>
                    </div>
                </div>
            )}
            </Popup>
            <figcaption>
            <h3 className="factoryname">
                <a href="#!" data-popup-open="popup-1">
                Nhà máy dệt
                </a>
            </h3>
            </figcaption>
        </figure>
        </div> 

        <div class="col-12 col-md-4 item-factory">
            <figure>
            <Popup
            trigger={
                <a href="#!" className="factoryimg">
                <img src={img.dsc_4227} alt="Nhuộm Yarn Dye" />
                </a>
            }
            modal
            nested
            >
            {(close) => (
                <div className="popup">
                    <span
                    className="popup-close-button"
                    onClick={close}
                    style={{
                        position: 'absolute',
                        top: '10px',
                        right: '10px',
                        cursor: 'pointer',
                    }}
                    >
                    &times;
                    </span>
                    <div class="popup-content">
                <div class="row">
                  <div class="col-12 col-lg-5">
                    <div class="factoryimg">
                      <img src={img.dsc_4227} alt="Nhuộm Yarn Dye"/>
                    </div>
                  </div>
                  <div class="col-12 col-lg-7">
                    <div class="factoryinfo">
                    <h2 class="pagetitle">Nhuộm Yarn Dye</h2>
                    <div class="factorydesc"></div>
                    <p></p>
                    <p>
                        <strong>Nhà máy nhuộm được đầu tư với công nghệ và trang thiết bị, máy móc mới nhất từ Châu Âu, với công nghệ nhuộm sợi “Yarn dye” chúng tôi có thể nhuộm các loại sợi khác nhau nhau: Cotton, Polyester, Bamboo, Viscose, Linen,...&nbsp;</strong>
                        </p>
                        <p>&nbsp;</p>
                        <p>Nhà máy nhuộm Bảo Minh là một trong những nhà máy nhuộm lớn nhất khu vực miền bắc Việt Nam với năng lực sản xuất của Bảo Minh đạt 600 tấn/tháng đối với nhuộm sợi (với máy nhuộm có công suất từ 3kg đến 680kg).</p>
                        <p>&nbsp;</p>
                        <p>Hệ thống nhuộm hiện đại với trang thiết bị từ Fongs' International Co. Ltd và hệ thống cung cấp thuốc nhuộm và hoá chất tự động của Color Services S.R.L. Bên cạnh đó, <span>uy trình xử lý thải được kiểm soát chặt chẽ nhằm đảm bảo định hướng phát triển bền vững và thân thiện với môi trường.</span></p>
                        <div></div>
                        <p>&nbsp;</p>
                        
                    </div>
                    </div>
                    </div>
                    </div>
                </div>
            )}
            </Popup>
            <figcaption>
            <h3 className="factoryname">
                <a href="#!" data-popup-open="popup-1">
                Nhuộm Yarn Dye
                </a>
            </h3>
            </figcaption>
        </figure>
        </div>

        <div class="col-12 col-md-4 item-factory">
            <figure>
            <Popup
            trigger={
                <a href="#!" className="factoryimg">
                <img src={img.dsc_3761} alt="Nhà máy hoàn tất" />
                </a>
            }
            modal
            nested
            >
            {(close) => (
                <div className="popup">
                    <span
                    className="popup-close-button"
                    onClick={close}
                    style={{
                        position: 'absolute',
                        top: '10px',
                        right: '10px',
                        cursor: 'pointer',
                    }}
                    >
                    &times;
                    </span>
                    <div class="popup-content">
                <div class="row">
                  <div class="col-12 col-lg-5">
                    <div class="factoryimg">
                      <img src={img.dsc_3761} alt="Nhà máy hoàn tất"/>
                    </div>
                  </div>
                  <div class="col-12 col-lg-7">
                    <div class="factoryinfo">
                    <h2 class="pagetitle">Nhà máy hoàn tất</h2>
                    <div class="factorydesc"></div>
                    <p></p>
                    <p>
                        <strong>Nhà máy hoàn tất của Bảo Minh JSC được trang bị hệ thống máy móc hiện đại nhất.</strong>
                        <span><br /></span>
                    </p>
                    <p>
                        <span>Chúng tôi có hệ thống nhuộm liên tục của Monfong/Benninger với hệ thống Thermosolling, hệ thống Tiền xử lý liên tục để tẩy trắng vải của Goller, máy Osthoff để làm mịn&nbsp; vải, máy Goller để<span> </span>làm bóng và sạch vải, máy Stenters và máy xử lý độ co giãn của vải.&nbsp;</span>
                        <span>Tất cả hoạt động sản xuất của nhà máy được xử lý bởi hệ thống Datatex ERP, cùng hệ thống phối màu trên vi tính của Data Color.&nbsp;</span>
                    </p>
                    <p>&nbsp;</p>
                    <p>Nhà máy hoàn tất của Bảo Minh có khả năng sản xuất được 3.500.000m/tháng.</p>
                    <div></div>
                    <p>&nbsp;</p>
                        
                    </div>
                    </div>
                    </div>
                    </div>
                </div>
            )}
            </Popup>
            <figcaption>
            <h3 className="factoryname">
                <a href="#!" data-popup-open="popup-1">
                Nhà máy hoàn tất
                </a>
            </h3>
            </figcaption>
        </figure>
        </div>
        <div class="col-12 col-md-4 item-factory">
            <figure>
            <Popup
            trigger={
                <a href="#!" className="factoryimg">
                <img src={img.lab_01} alt="Phòng thí nghiệm" />
                </a>
            }
            modal
            nested
            >
            {(close) => (
                <div className="popup">
                    <span
                    className="popup-close-button"
                    onClick={close}
                    style={{
                        position: 'absolute',
                        top: '10px',
                        right: '10px',
                        cursor: 'pointer',
                    }}
                    >
                    &times;
                    </span>
                    <div class="popup-content">
                <div class="row">
                  <div class="col-12 col-lg-5">
                    <div class="factoryimg">
                      <img src={img.lab_01} alt="Phòng thí nghiệm"/>
                    </div>
                  </div>
                  <div class="col-12 col-lg-7">
                    <div class="factoryinfo">
                    <h2 class="pagetitle">Phòng thí nghiệm</h2>
                    <div class="factorydesc"></div>
                    <p></p>
                    <p>
                        <strong>Chất lượng là mối quan tâm hàng đầu của chúng tôi, đó là lý do tại sao phòng nghiên cứu là một phần không thể thiếu đối với các nhà máy của Bảo Minh.&nbsp;</strong>
                    </p>
                    <p>&nbsp;</p>
                    <p>Phòng Lab kiểm tra chất lượng đã được xây dựng để đáp ứng tiêu chuẩn ISO IEC 17025. Bảo Minh có thể thực hiện các phương pháp thử nghiệm theo yêu cầu của khách hàng (AATCC, ISO, JIS ...).&nbsp;</p>
                    <p>&nbsp;</p>
                    <p>Tại các phòng máy, để pha chế, Bảo Minh sử dụng hai hệ thống Auto Color Service và Spectrophometer của DatarColor. Với thư viện vải nhuộm với hơn 500 mẫu khác nhau và có thể đáp ứng các yêu cầu phát triển màu theo nhu cầu của khách hàng, Bảo Minh JSC tự tin có thể đem đến chất lượng tốt nhất đến cho khách hàng.&nbsp;</p>
                    <div></div>
                    <p>&nbsp;</p>
                        
                    </div>
                    </div>
                    </div>
                    </div>
                </div>
            )}
            </Popup>
            <figcaption>
            <h3 className="factoryname">
                <a href="#!" data-popup-open="popup-1">
                Phòng thí nghiệm
                </a>
            </h3>
            </figcaption>
        </figure>
        </div>
        <div class="col-12 col-md-4 item-factory">
            <figure>
            <Popup
            trigger={
                <a href="#!" className="factoryimg">
                <img src={img.dsc_3800} alt="Phòng dệt mẫu" />
                </a>
            }
            modal
            nested
            >
            {(close) => (
                <div className="popup">
                    <span
                    className="popup-close-button"
                    onClick={close}
                    style={{
                        position: 'absolute',
                        top: '10px',
                        right: '10px',
                        cursor: 'pointer',
                    }}
                    >
                    &times;
                    </span>
                    <div class="popup-content">
                <div class="row">
                  <div class="col-12 col-lg-5">
                    <div class="factoryimg">
                      <img src={img.dsc_3800} alt="Phòng dệt mẫu"/>
                    </div>
                  </div>
                  <div class="col-12 col-lg-7">
                    <div class="factoryinfo">
                    <h2 className="pagetitle">Phòng dệt mẫu</h2>
                        <p>
                            <strong>Trong phòng dệt mẫu, chúng tôi đầy đủ máy móc, bao gồm: 4 máy handlooms CCI, 1 máy mắc sợi và 1 máy hồ để phục vụ cho việc sản xuất handlooms cho khách. Bên cạnh đó chúng tôi còn sở hữu hệ thống Digital Designing & CAD của Penelope Spain.&nbsp;</strong>
                        </p>
                        <p>&nbsp;</p>
                        <p>Đối với mẫu làm từ Handlooms (CCI) khoảng rộng của mẫu là 30cm.&nbsp;</p>
                        <p>&nbsp;</p>
                        <p>Nếu khách hàng yêu cầu mẫu phải nguyên khổ 1m6, chúng tôi cũng thực hiện yêu cầu này với các máy móc làm mẫu, nguyên khổ ở trong xưởng dệt, với các đơn hàng nhỏ chỉ từ 10m vải trở lên.&nbsp;</p>
                        <p>&nbsp;</p>
                        <p>Bảo Minh cung cấp mẫu cho khách hàng trong khoảng thời gian chỉ từ 4 đến 7 ngày.</p>
                        <div></div>
                        <p>&nbsp;</p>
                        </div>
   
                    </div>
                    </div>
                    </div>
                </div>
            )}
            </Popup>
            <figcaption>
            <h3 className="factoryname">
                <a href="#!" data-popup-open="popup-1">
                Phòng dệt mẫu
                </a>
            </h3>
            </figcaption>
        </figure>
        </div>
        <div class="col-12 col-md-4 item-factory">
        
            <figure>
            <Popup
            trigger={
                <a href="#!" className="factoryimg">
                <img src={img.dsc_5238} alt="Kiểu hoàn tất đặc biệt" />
                </a>
            }
            modal
            nested
            >
            {(close) => (
                <div className="popup">
                    <span
                    className="popup-close-button"
                    onClick={close}
                    style={{
                        position: 'absolute',
                        top: '10px',
                        right: '10px',
                        cursor: 'pointer',
                    }}
                    >
                    &times;
                    </span>
                    <div class="popup-content">
                <div class="row">
                  <div class="col-12 col-lg-5">
                    <div class="factoryimg">
                      <img src={img.dsc_5238} alt="Kiểu hoàn tất đặc biệt"/>
                    </div>
                  </div>
                  <div class="col-12 col-lg-7">
                    <div class="factoryinfo">
                    <h2 class="pagetitle">Kiểu hoàn tất đặc biệt</h2>
                        <div class="factorydesc"></div>
                        <p></p>
                        <div class="special-finish-description">
                        <strong>
                            <span class="finish-text">
                            Bảo Minh JSC tự hào có thể cung cấp kiểu hoàn tất đặc biệt đến cho khách hàng.<br /><br />
                            </span>
                            </strong>
                        </div>
                        <p>Nhà máy hoàn tất của chúng tôi có máy Liquid Ammonia lỏng của Lafer để cung cấp kiểu hoàn thiện non-iron. Bên cạnh đó, máy Peaching Diamond Emery của Lafer để đem lại cảm giác mềm mịn như lông vũ cho vải. Một số kiểu hoàn thiện khác bao gồm: Raising Machine để phục vụ cho các loại vải Flannels, Moist Cure Stenter dành riêng cho việc xử lý độ ẩm (moist cure finishing), máy Airo 24 Continous Tumbler để xử lý độ mềm mịn và máy Calender để xử lý độ bóng của bề mặt vải.</p>
                    </div>
                    </div>
                    </div>
                    </div>
                </div>
            )}
            </Popup>
            <figcaption>
            <h3 className="factoryname">
                <a href="#!" data-popup-open="popup-1">
                Kiểu hoàn tất đặc biệt
                </a>
            </h3>
            </figcaption>
        </figure>
        </div>
      </div>
    </div>
  </div>
        </section>
        {/* ------------------chung chi----------------- */}
        <section className="et-slide" id="tab-04">
  
          <div class="product-detail">
          <div class="container">
            <div class="row">
              <div class="col-12 col-lg-6">
                <div className="slider-container">
                <div className="slider">
                <img className="slider-image" src={slides1[index1].img} alt={"#"} />
              </div>
                <button className="prev-button" onClick={prevSlide1}>
                    
                </button>
                <button className="next-button" onClick={nextSlide1}>
                  
                </button>
                </div>
              </div>
              <div class="col-12 col-lg-6">
              <div className="content" style={{ textAlign: 'justify', color: '#333333', backgroundColor: '#ffffff' }}>
              <div>
              <p className="content_cc">
                <strong>Với phương châm đặt phát triển bền vững lên hàng đầu, Công ty Cổ phần Dệt Bảo Minh đã không ngừng cải thiện quy trình sản xuất để bảo vệ môi trường và tạo ra những sản phẩm an toàn, đồng thời thân thiện với sức khỏe của con người.&nbsp;</strong>
              </p>
              <p className="content_cc">&nbsp;</p>
              <p className="content_cc">
                <span style={{ fontStyle: 'inherit' }}>Bảo Minh đã đạt được những chứng chỉ như:&nbsp;</span>Higg Index,&nbsp;Global Recycled Standard (GRS), Organic Content Standard (OCS), Recycled Claim Standard (RCS), Global Organic Textile (GOTS), Standard 100 by Oeko-Tex®, STeP by Oeko-Tex®, Better Cotton Initiative (BCI), ISO 14001:2015, ISO 9001:2015.
              </p>
              <div className="content_cc"><br /></div>
            </div>
            </div>
                </div>
            </div>
          </div>
        </div>
        </section>
      </main>    
  

  
    </>
    );
}

export default Home;