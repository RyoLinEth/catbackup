import React from "react";
import { useState } from "react";
import { Tooltip } from "./Tooltip";
import { Link } from "react-scroll";
import WalletConnect from "./WallectConnector";

const ClassicHeader = ({ handleNavClick, defaultAccountChange, handleLanguage }) => {
  const [stickyHeader, setStickyHeader] = useState(false);
  const [isNavModalClose, setIsNavModalClose] = useState(true);
  const [language, setLanguage] = useState("EN")

  const changeLanguage = () => {
    if (language === "中") {
      setLanguage("EN");
      handleLanguage("EN")
      return;
    }
    setLanguage("中");
    handleLanguage("中")
    return;
  }
  const handleDefaultAccount = (value) => {
    defaultAccountChange(value)
  }

  const checkScrollTop = () => {
    let header = document.getElementsByClassName("primary-menu");

    if (header) {
      if (
        document.body.scrollTop > 180 ||
        document.documentElement.scrollTop > 180
      ) {
        setStickyHeader(true);
      } else {
        setStickyHeader(false);
      }
    }
  };

  if (typeof window !== "undefined") {
    window.addEventListener("scroll", checkScrollTop);
  }

  return (
    <header id="header" className="sticky-top-slide">
      {/* Navbar */}
      <nav
        className={
          "primary-menu navbar navbar-expand-lg navbar-dark bg-transparent border-bottom-0 sticky-top " +
          (stickyHeader ? "sticky-on" : "")
        }
      >
        <div className="container-fluid position-relative g-lg-4">
          <div className="col-auto col-lg-2">
            {/* Logo */}
            <Link
              smooth
              duration={500}
              style={{ cursor: "pointer" }}
              className="logo"
              to="home"
              title="Cat"
              onClick={(e) => {
                e.preventDefault();
                setIsNavModalClose(true);
              }}
            >
              {" "}
              <img src="images/catLogo2.jpg" alt="Cat" style={{height:"40px", marginLeft:"10px"}} />{" "}
            </Link>
            {/* Logo End */}
          </div>
          <div className="col col-lg-8 navbar-accordion">
            <button
              onClick={(e) => {
                setIsNavModalClose(!isNavModalClose);
              }}
              className={
                isNavModalClose
                  ? "navbar-toggler ms-auto"
                  : "navbar-toggler ms-auto show"
              }
              id="navbar-toggler"
              type="button"
            >
              <span />
              <span />
              <span />
            </button>
            <div
              id="header-nav"
              className={
                isNavModalClose
                  ? "collapse navbar-collapse justify-content-center "
                  : "show navbar-collapse justify-content-center"
              }
            >
              <ul className="navbar-nav">
                <li className="nav-item">
                  <Link
                    smooth
                    duration={500}
                    style={{ cursor: "pointer" }}
                    spy
                    activeClass="active"
                    className="nav-link"
                    to="home"
                    onClick={(e) => {
                      e.preventDefault();
                      setIsNavModalClose(true);
                    }}
                  >
                    {
                      language === "中" && <span>首頁</span>
                    }
                    {
                      language !== "中" && <span>Home</span>
                    }
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    smooth
                    duration={500}
                    style={{ cursor: "pointer" }}
                    spy
                    activeClass="active"
                    className="nav-link"
                    to="resume"
                    onClick={(e) => {
                      e.preventDefault();
                      setIsNavModalClose(true);
                    }}
                  >
                    {
                      language === "中" && <span>IDO</span>
                    }
                    {
                      language === "EN" && <span>IDO</span>
                    }
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    smooth
                    duration={500}
                    style={{ cursor: "pointer" }}
                    spy
                    activeClass="active"
                    className="nav-link"
                    to="services"
                    onClick={(e) => {
                      e.preventDefault();
                      setIsNavModalClose(true);
                    }}
                  >
                    {
                      language === "中" && <span>IDO 資訊</span>
                    }
                    {
                      language === "EN" && <span>IDO Information</span>
                    }
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    smooth
                    duration={500}
                    style={{ cursor: "pointer" }}
                    spy
                    activeClass="active"
                    className="nav-link"
                    to="about"
                    onClick={(e) => {
                      e.preventDefault();
                      setIsNavModalClose(true);
                    }}
                  >
                    {
                      language === "中" && <span>更加認識貓咪</span>
                    }
                    {
                      language === "EN" && <span>Know Cat More</span>
                    }
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-auto col-lg-2 d-flex justify-content-end">
            <ul className="social-icons">
              <li >
                <a
                  style={{ marginTop: '5px', fontWeight: 'bold', color: 'white' }}
                  onClick={changeLanguage}
                >
                  {language}
                </a>
              </li>
              <WalletConnect defaultAccountChange={handleDefaultAccount} language={language} />
            </ul>
          </div>
        </div>
      </nav>
      {/* Navbar End */}
    </header>
  );
};

export default ClassicHeader;
