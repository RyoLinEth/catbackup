import React from "react";
import Typewriter from "typewriter-effect";
import { Link } from "react-scroll";

const Home = ({ classicHeader, darkTheme, handleNavClick, language }) => {
  return (
    <section id="home">
      <div className="hero-wrap">
        <div className="hero-mask opacity-8 bg-dark" />

        {/* ---------------image background------------------ */}
        <div
          className="hero-bg parallax"
          style={{ backgroundImage: 'url("images/catLogo2.jpg")' }}
        ></div>

        {/* -------------------video background---------------------- */}

        {/* <div className="player hero-bg parallax">
          <video
            src={videobg}
            autoPlay
            muted
            loop
            style={{ width: "100%", height: "100vh", objectFit: "cover" }}
          ></video>
        </div> */}

        <div className="hero-content section d-flex min-vh-100">
          <div className="container my-auto">
            <div className="row">
              <div className="col-12 text-center">
                <p className="text-7 fw-500 text-white mb-2 mb-md-3">
                  {
                    language === "中" && <span>歡迎</span>
                  }
                  {
                    language !== "中" && <span>Welcome</span>
                  }
                </p>
                <h2 className="text-16 fw-600 text-white mb-2 mb-md-3">
                  <Typewriter
                    options={{
                      strings:
                        language !== "中" ? [
                          "It's Cat",
                          "The Best Meme In 2023",
                        ] : [
                          "這是貓咪",
                          "2023最好的謎因"
                        ],
                      autoStart: true,
                      loop: true,
                    }}
                  />
                </h2>
                <p className="text-5 text-light mb-4">
                  {
                    language === "中" && <span>貓咪 - 最好的謎因</span>
                  }
                  {
                    language !== "中" && <span>Cat - The Best Meme</span>
                  }
                </p>

                <Link
                  smooth
                  duration={500}
                  style={{ cursor: "pointer" }}
                  spy
                  activeClass="active"
                  className="btn btn-primary rounded-pill"
                  to="resume"
                  onClick={(e) => {
                    e.preventDefault();
                  }}
                >
                  {
                    language === "中" && <span>加入我們</span>
                  }
                  {
                    language !== "中" && <span>Join Us</span>
                  }
                </Link>
              </div>
            </div>
          </div>
          <a
            href="#about"
            className="scroll-down-arrow text-white smooth-scroll"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick("about");
            }}
          >
            <span className="animated">
              <i className="fa fa-chevron-down" />
            </span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Home;
