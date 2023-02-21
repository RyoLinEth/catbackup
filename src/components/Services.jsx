import React, { useState, useEffect } from "react";
import swal from 'sweetalert'
import { CopyToClipboard } from 'react-copy-to-clipboard';

const Services = ({ classicHeader, darkTheme, language, defaultAccount }) => {
  const [personalLink, setPersonalLink] = useState(null);
  const [copied, setCopied] = useState(false);


  const setLink = (value) => {
    if (value === null) {
      return;
    }
    let tempLink = window.location.origin + "/?inviter=" + value
    setPersonalLink(tempLink);
  }

  const getLink = () => {
    if (personalLink !== null) return;
    if (defaultAccount === null) return;
    // swal("Error", "You need to connect wallet to get invite link","error"); 
    setLink(defaultAccount)
  }

  getLink()

  useEffect(() => {
    console.log("Change Account to : " + defaultAccount)
    setLink(defaultAccount)
  }, [defaultAccount])

  const copyLink = () => {
    if (defaultAccount === null) {
        if (language === "中") {
            swal("錯誤", "請先連結錢包來獲得邀請連結", "error");
            return;
        }
        swal("Error", "Connect wallet first to get your invitation link", "error");
        return;
    }
    try {
        setCopied(true)
        if (language === "中") {
            swal("成功", `成功複製連結 ${personalLink}`, "success")
            return;
        }
        swal("Success", `You invitaion link ${personalLink} has been successfully copied`, "success")
    } catch (err) {
        alert(err)
    }
}


  // services details
  const services = [
    {
      name: language !== "中" ? "Three Level of Contribution" : "三個IDO額度",
      desc: "50 / 100 / 200 USDT",
      icon: "fas fa-coins",
    },
    {
      name: language !== "中" ? "Invitation Reward" : "邀請返傭",
      desc: language !== "中" ? "5% USDT Reward" : "5% USDT 返傭獎勵",
      icon: "fas fa-rotate",
    },
    {
      name: language !== "中" ? "Invitation Rule" : "邀請規則",
      desc: language !== "中" ? "If someone use your invitation link to make the contribution, you'll get 5% USDT reward from him" : "如果有人使用你的邀請連結參與IDO, 你將會收到他參與金額的 5% USDT 作為獎勵",
      icon: "fas fa-circle-dollar-to-slot",
    },
    {
      name: language !== "中" ? "Invitation Link" : "邀請連結",
      desc: personalLink !== null ? personalLink :
        <>{
          language !== "中" ? "Please Connect Your Wallet" : "請連接錢包"
        }</>,
      icon: "fas fa-sack-xmark",
    },
  ];

  return (
    <section
      id="services"
      className={"section " + (darkTheme ? "bg-dark-2" : "bg-light")}
    >
      <div className={"container " + (classicHeader ? "" : "px-lg-5")}>

        {/* Heading */}
        <div className="position-relative d-flex text-center mb-5">
          <h2
            className={
              "text-24  text-uppercase fw-600 w-100 mb-0 " +
              (darkTheme ? "text-white-50  opacity-1" : "text-light  opacity-4")
            }
          >
            IDO
          </h2>
          <p
            className={
              "text-9  fw-600 position-absolute w-100 align-self-center lh-base mb-0 " +
              (darkTheme ? "text-white" : "text-dark")
            }
          >
            {language !== "中" ? <>IDO Information</> : <>IDO資訊</>}

            <span className="heading-separator-line border-bottom border-3 border-primary d-block mx-auto" />
          </p>
        </div>
        {/* Heading end*/}

        {/* content start */}
        <div className="row">
          <div className="col-lg-11 mx-auto">
            <div className="row">
              {services.length > 0 &&
                services.map((service, index) => (
                  <div className="col-md-6" key={index}>
                    <div className="featured-box style-3 mb-5">
                      <div
                        className={
                          "featured-box-icon text-primary  shadow-sm rounded " +
                          (darkTheme ? "bg-dark-1" : "bg-white")
                        }
                      >
                        <i className={service.icon} />
                      </div>
                      <h3 className={darkTheme ? "text-white" : ""}>
                        {service.name}
                      </h3>
                      <p
                        className={"mb-0 " + (darkTheme ? "text-white-50" : "")}
                        style={{ wordBreak: 'break-word' }}
                      >
                        {service.desc}
                        {
                          index === 3 &&
                          <>
                            <br />
                            <br />
                            {/* <button
                              style={{ cursor: "pointer" }}
                              className="btn btn-primary rounded-pill"
                              onClick={copyLink}
                            >
                              {language !== "中" ? <>Copy</> : <>複製</>}
                            </button> */}

                            <CopyToClipboard
                              text={personalLink}
                              onCopy={copyLink}
                            >
                              <button
                                className="btn btn-primary rounded-pill"
                                style={{ maxWidth: '120px', display: 'flex', justifyContent: 'center', alignItems: 'center', wordBreak: 'normal' }}
                              >
                                {language === "中" ? <>複製</> : <>Copy</>}
                              </button>
                            </CopyToClipboard>
                          </>
                        }
                      </p>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </div>
        {/* content end */}
      </div>
    </section>
  );
};

export default Services;


// import React from "react";

// const Services = ({ classicHeader, darkTheme,language }) => {
//   // services details
//   const services = [
//     {
//       name: language !== "中" ? "Total Supply" : "總供應量",
//       desc: "10000000000",
//       icon: "fas fa-coins",
//     },
//     {
//       name: language !== "中" ? "Total Circulation" : "總循環供應量",
//       desc: "10000000000",
//       icon: "fas fa-rotate",
//     },
//     {
//       name: language !== "中" ? "Buy Slippage" : "購買滑點",
//       desc: language !== "中" ? "2% Marketing, 2% Liquidity Pool, 2% Reward" : "2% 營銷, 2% 回流, 2% 分紅",
//       icon: "fas fa-circle-dollar-to-slot",
//     },
//     {
//       name: language !== "中" ? "Sell Slippage" : "賣出滑點",
//       desc: language !== "中" ? "2% Marketing, 2% Liquidity Pool, 2% Reward" : "2% 營銷, 2% 回流, 2% 分紅",
//       icon: "fas fa-sack-xmark",
//     },
//   ];

//   return (
//     <section
//       id="services"
//       className={"section " + (darkTheme ? "bg-dark-2" : "bg-light")}
//     >
//       <div className={"container " + (classicHeader ? "" : "px-lg-5")}>

{/* Heading */ }
{/* <div className="position-relative d-flex text-center mb-5">
          <h2
            className={
              "text-24  text-uppercase fw-600 w-100 mb-0 " +
              (darkTheme ? "text-white-50  opacity-1" : "text-light  opacity-4")
            }
          >
            IDO
          </h2>
          <p
            className={
              "text-9  fw-600 position-absolute w-100 align-self-center lh-base mb-0 " +
              (darkTheme ? "text-white" : "text-dark")
            }
          >
            {language !== "中" ? <>Token Information</> :<>代幣資訊</> }

            <span className="heading-separator-line border-bottom border-3 border-primary d-block mx-auto" />
          </p>
        </div> */}
{/* Heading end*/ }

{/* content start */ }
{/* <div className="row">
          <div className="col-lg-11 mx-auto">
            <div className="row">
              {services.length > 0 &&
                services.map((service, index) => (
                  <div className="col-md-6" key={index}>
                    <div className="featured-box style-3 mb-5">
                      <div
                        className={
                          "featured-box-icon text-primary  shadow-sm rounded " +
                          (darkTheme ? "bg-dark-1" : "bg-white")
                        }
                      >
                        <i className={service.icon} />
                      </div>
                      <h3 className={darkTheme ? "text-white" : ""}>
                        {service.name}
                      </h3>
                      <p
                        className={"mb-0 " + (darkTheme ? "text-white-50" : "")}
                      >
                        {service.desc}
                      </p>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </div> */}
{/* content end */ }
{/* </div>
    </section>
  );
};

export default Services; */}
