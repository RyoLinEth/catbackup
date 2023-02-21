import React from "react";
import { Link } from "react-scroll";
import { Tooltip } from "./Tooltip";
// import resumeFile from "../documents/resume.pdf";
const AboutUs = ({ classicHeader, darkTheme, language }) => {
  const ENcontent =
    <p>
      Cat, the cutiest animal in the world, is around us in every corner.
      We create a meme with the name "Cat", which would attract all cat lovers.
      Not only attracting the attension of the cat lovers.We are devoted in
      constructing a cat lover community in crypto.
    </p >
  const CNcontent =
    <p>
      貓咪，一種世上最可愛的動物，在世界的各個角落都有它們的存在。
      我們創造一個名為"貓咪"的迷因代幣，這將會吸引到所有的貓咪愛好者。
      當然，不只是吸引貓咪愛好者的注意，我們將會致力於打造一個貓咪愛好者的加密社群。
    </p>
  return (
    <section id="about" className={"section " + (darkTheme ? "bg-dark-1" : "")}>
      <div className={"container " + (classicHeader ? "" : "px-lg-5")}>
        {/* Heading */}
        <div className="position-relative d-flex text-center mb-5">
          <h2
            className={
              "text-24  text-uppercase fw-600 w-100 mb-0 " +
              (darkTheme ? "text-muted opacity-1" : "text-light opacity-4")
            }
          >
            {
              language === "中" && <span>關於貓咪</span>
            }
            {
              language !== "中" && <span>About Cat</span>
            }
          </h2>
          <p
            className={
              "text-9 text-dark fw-600 position-absolute w-100 align-self-center lh-base mb-0 " +
              (darkTheme ? "text-white" : "text-dark")
            }
          >
            {
              language === "中" && <span>更加認識貓咪</span>
            }
            {
              language !== "中" && <span>Know Cat More</span>
            }
            <span className="heading-separator-line border-bottom border-3 border-primary d-block mx-auto" />
          </p>
        </div>
        {/* Heading end*/}
        <div className="row gy-5">
          {/* About me content start */}
          <div className="col-lg-7 col-xl-8 text-center text-lg-start">
            <h2
              className={
                "text-7 fw-600 mb-3 " + (darkTheme ? "text-white" : "")
              }
            >
              {
                language !== "中" && <div>It's <span className="text-primary"> Cat</span>, a 2023 new meme</div>
              }
              {
                language === "中" && <div>這是 <span className="text-primary"> 貓咪</span>, 2023 最新的 迷因</div>
              }
              {/* <div>It's <span className="text-primary"> Cat,</span> a 2023 new meme</div> */}
            </h2>
            <div className={darkTheme ? "text-white-50" : ""}>
              {language !== "中" && ENcontent}
              {language === "中" && CNcontent}
            </div>
            {/* <p className={darkTheme ? "text-white-50" : ""}>
              Delivering work within time and budget which meets client’s
              requirements is our moto. Lorem Ipsum has been the industry's
              standard dummy text ever when an unknown printer took a galley.
            </p> */}
          </div>
          {/* About me content end */}
          {/* about me personal detials start */}
          <div className="col-lg-5 col-xl-4">
            <div className="ps-lg-4">
              <ul
                className={
                  "list-style-2 " +
                  (darkTheme ? "list-style-light text-light" : "")
                }
              >
                <li style={{ display: 'flex' }}>
                  <div className="fw-600 me-2">
                    {language !== "中" && <span>Name:</span>}
                    {language === "中" && <span>名字:</span>}
                  </div>
                  {language !== "中" && <span>Cat</span>}
                  {language === "中" && <span>貓咪</span>}
                </li>
                <li style={{ display: 'flex' }}>
                  <div className="fw-600 me-2">
                    {language !== "中" && <span>Born:</span>}
                    {language === "中" && <span>出生:</span>}</div>2023
                </li>
                <li className="border-0" style={{ display: 'flex' }}>
                  <div className="fw-600 me-2">
                    {language !== "中" && <span>Breed:</span>}
                    {language === "中" && <span>品種:</span>}</div>
                  {language !== "中" && <span>Meme</span>}
                  {language === "中" && <span>迷因</span>}
                </li>
              </ul>

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
                {language !== "中" && <span>Join Us</span>}
                {language === "中" && <span>加入我們</span>}
              </Link>
            </div>
          </div>
          {/* about me personal details end */}
        </div>
        {/* projects rewards counting start */}
        {/* <div
          className={
            "brands-grid separator-border mt-5 " +
            (darkTheme ? "separator-border-light" : "")
          }
        >
          <div className="row">
            <div className="col-6 col-md-3">
              <div className="featured-box text-center">
                <h4
                  className={
                    "text-12  mb-0 " +
                    (darkTheme ? "text-white-50" : "text-muted")
                  }
                >
                  <span>2</span>%
                </h4>
                <p className={"mb-0 " + (darkTheme ? "text-light" : "")}>
                  {language !== "中" && <>Marketing Fee</>}
                  {language === "中" && <>營銷</>}
                </p>
              </div>
            </div>
            <div className="col-6 col-md-3">
              <div className="featured-box text-center">
                <h4
                  className={
                    "text-12  mb-0 " +
                    (darkTheme ? "text-white-50" : "text-muted")
                  }
                >
                  <span>2</span>%
                </h4>
                <p className={"mb-0 " + (darkTheme ? "text-light" : "")}>
                  {language !== "中" && <>Liquidity Fee</>}
                  {language === "中" && <>回流</>}
                </p>
              </div>
            </div>
            <div className="col-6 col-md-3">
              <div className="featured-box text-center">
                <h4
                  className={
                    "text-12  mb-0 " +
                    (darkTheme ? "text-white-50" : "text-muted")
                  }
                >
                  <span>2</span>%
                </h4>
                <p className={"mb-0 " + (darkTheme ? "text-light" : "")}>
                  {language !== "中" && <>Reward Fee</>}
                  {language === "中" && <>分紅</>}
                </p>
              </div>
            </div>
            <div className="col-6 col-md-3">
              <div className="featured-box text-center">
                <h4
                  className={
                    "text-12  mb-0 " +
                    (darkTheme ? "text-white-50" : "text-muted")
                  }
                >
                  <span>6</span>%
                </h4>
                <p className={"mb-0 " + (darkTheme ? "text-light" : "")}>
                  {language !== "中" && <>Total Fee</>}
                  {language === "中" && <>總稅率</>}
                </p>
              </div>
            </div>
          </div>
        </div> */}
        {/* projects rewards counting end */}
      </div>
    </section>
  );
};

export default AboutUs;
