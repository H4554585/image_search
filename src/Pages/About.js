import React from "react";

const About = () => {
  return (
    <div className="about-page" style={{ minHeight: "100vh" }}>
      <div className="about-info">
        <h1 style={{ paddingTop: "0" }}>關於我們</h1>
        <div className="info">
          <h1 style={{ paddingTop: "0" }}>製作人員</h1>
          <p>Dong-Han Lee</p>
          <hr />
          <h1>圖片參考網站</h1>
          <p>Pexels</p>
          <hr />
          <h1>最後更新時間</h1>
          <p style={{ paddingBottom: "0" }}>2024 / 09</p>
        </div>
        <h1>關於這個網站</h1>
        <p>
          這個項目是一個使用 React
          開發的圖片搜尋網站，主要功能包括圖片搜尋、展示、分頁，以及基本的頁面導覽。
        </p>
      </div>
    </div>
  );
};

export default About;
