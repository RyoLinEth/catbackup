import React from "react";
import { Tooltip } from "./Tooltip";

const Footer = ({ classicHeader, darkTheme, handleNavClick }) => {
  return (
    <footer
      id="footer"
      className={"section " + (darkTheme ? "footer-dark bg-dark-1" : "")}
    >
      <div className={"container " + (classicHeader ? "" : "px-lg-5")}>
        <div className="row">
          <div className="col-lg-6 text-center text-lg-start">
            <p className="mb-3 mb-lg-0">
              Copyright © 2023{" "}
              <a
                href="#home"
                className="fw-500"
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick("home");
                }}
              >
                Cat
              </a>
              . All Rights Reserved.
            </p>
            <div style={{display:"flex", justifyContent:"center",alignItems:"center"}}>
              <ul className="social-icons social-icons-muted social-icons-sm mt-lg-auto">
                <li className="social-icons-twitter">
                  <Tooltip text="Twitter" placement="top">
                    <a
                      href="https://twitter.com/CAT_ENGROUP"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i className="fab fa-twitter" />
                    </a>
                  </Tooltip>
                </li>
                <li className="social-icons-twitter">
                  <Tooltip text="Telegram" placement="top">
                    <a
                      href="https://t.me/CatEnGroup"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i className="fab fa-telegram" />
                    </a>
                  </Tooltip>
                </li>
                <li className="social-icons-twitter">
                  <Tooltip text="Telegram" placement="top">
                    <a
                      href="https://t.me/CatChinese"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i className="fab fa-telegram" />
                    </a>
                  </Tooltip>
                </li>
              </ul>
            </div>
          </div>

          {/* <div className="col-lg-6">
            <ul className="nav nav-separator justify-content-center justify-content-lg-end">
              <li className="nav-item">
                <a
                  className="nav-link"
                  data-bs-toggle="modal"
                  data-bs-target="#terms-policy"
                  href="#terms-policy"
                >
                  Terms &amp; Policy
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  data-bs-toggle="modal"
                  data-bs-target="#disclaimer"
                  href="#disclaimer"
                >
                  Disclaimer
                </a>
              </li>
            </ul>
          </div> */}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
