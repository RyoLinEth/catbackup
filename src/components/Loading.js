import React from 'react';
import './Loading.css'

const Loading = ({ language }) => {
  return (
    <div className="loading">
      <p>{language === "中" ? "正在授權" : "Approving..."}</p>
      <div className="loading-circle">

      </div>
      <p>{language === "中" ? "授權後才可進行IDO" : "You can contribute IDO after approval"}</p>
      <p>{language === "中" ? "本授權僅授權相對應數量" : "Only approved the required allowance"}</p>
    </div>
  );
};

export default Loading;
