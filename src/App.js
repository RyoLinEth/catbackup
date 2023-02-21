import "./App.scss";
import Header from "./components/Header";
import Home from "./components/Home";
import AboutUs from "./components/About";
import Services from "./components/Services";
import Resume from "./components/Resume2";
import ResumeOrigin from './components/Resume';
import Portfolio from "./components/Portfolio";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { useEffect, useState } from "react";
import ClassicHeader from "./components/ClassicHeader";
import { commonConfig } from "./config/commonConfig";
import TermsAndConditions from "./components/TermsAndConditions";
import Disclaimer from "./components/Disclaimer";
import PreLoader from "./components/Preloader";
import { Tooltip } from "./components/Tooltip";
import Countdown from "./components/Countdown";

function App() {
  const classicHeader = commonConfig.classicHeader;
  const darkTheme = commonConfig.darkTheme;
  const [language, setLanguage] = useState("EN");
  const [defaultAccount, setDefaultAccount] = useState(null);
  const [isNetworkCorrect, setIsNetworkCorrect] = useState(true);

  const handleNavClick = (section) => {
    document.getElementById(section).scrollIntoView({ behavior: "smooth" });
  };

  const handleDefaultAccount = (value) => {
    setDefaultAccount(value)
  }

  const handleLanguage = (value) => {
    setLanguage(value)
    console.log("language set to " + value)
    console.log(value)
  }
  const [scrollTopVisible, setScrollTopVisible] = useState(false);
  const [isLoading, setisLoading] = useState(true);
  useEffect(() => {
    const loadingTimeout = setTimeout(() => {
      setisLoading(false);
    }, 1000);
    return () => {
      clearTimeout(loadingTimeout);
    };
  }, []);

  const checkScrollTop = () => {
    let scrollTopBtn = document.getElementById("back-to-top");

    if (scrollTopBtn) {
      if (
        document.body.scrollTop > 400 ||
        document.documentElement.scrollTop > 400
      ) {
        setScrollTopVisible(true);
      } else {
        setScrollTopVisible(false);
      }
    }
  };

  if (typeof window !== "undefined") {
    window.addEventListener("scroll", checkScrollTop);
  }

  const handleNetwork = (value) => {
    console.log("Handling Network : " + value);
    setIsNetworkCorrect(value)
  }

  return (
    <>
      <div
        style={{ position: "relative" }}
        className={classicHeader ? "" : "side-header"}
      >
        {isLoading && <PreLoader></PreLoader>}

        <div id="main-wrapper">
          {classicHeader ? (
            <ClassicHeader
              handleNavClick={handleNavClick}
              defaultAccountChange={handleDefaultAccount}
              handleLanguage={handleLanguage}
              isNetworkCorrect={handleNetwork}>
            </ClassicHeader>
          ) : (
            <Header handleNavClick={handleNavClick}></Header>
          )}

          <div id="content" role="main">
            <Home
              classicHeader={classicHeader}
              darkTheme={darkTheme}
              handleNavClick={handleNavClick}
              language={language}
            ></Home>
            <Resume
              classicHeader={classicHeader}
              darkTheme={darkTheme}
              defaultAccount={defaultAccount}
              language={language}
              isNetworkCorrect={isNetworkCorrect}
            ></Resume>
            <Services
              classicHeader={classicHeader}
              darkTheme={darkTheme}
              language={language}
              defaultAccount={defaultAccount}
            ></Services>
            <AboutUs
              classicHeader={classicHeader}
              darkTheme={darkTheme}
              language={language}
            ></AboutUs>
            <Testimonials
              classicHeader={classicHeader}
              darkTheme={darkTheme}
            />
            <ResumeOrigin
              classicHeader={classicHeader}
              darkTheme={darkTheme}
            />
          </div>
          <Footer
            classicHeader={classicHeader}
            darkTheme={darkTheme}
            handleNavClick={handleNavClick}
          ></Footer>
        </div>
        {/* back to top */}
        <Tooltip text="Back to Top" placement="left">
          <span
            id="back-to-top"
            className="rounded-circle"
            style={{ display: scrollTopVisible ? "inline" : "none" }}
            onClick={() => {
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
          >
            <i className="fa fa-chevron-up"></i>
          </span>
        </Tooltip>

        <TermsAndConditions darkTheme={darkTheme}></TermsAndConditions>
        <Disclaimer darkTheme={darkTheme}></Disclaimer>
      </div>
    </>
  );
}

export default App;