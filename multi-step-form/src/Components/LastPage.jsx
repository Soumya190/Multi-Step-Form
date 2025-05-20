import React from "react";
import image from "./img1.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircle } from "@fortawesome/free-solid-svg-icons";
import Icon4 from "./icon4.jsx";
import "./lastPage.css";

export const LastPage = () => {
  return (
    <div className="LastPage-container">
      <div className="LastPage-contain">
        <div className="content">
          <img src={image} className="img" />
          <FontAwesomeIcon icon={faCircle} className="icon1-change1" />
          <div className="icon1-content-change1">1</div>
          <span className="side-content1-change1">STEP 1</span>
          <span className="side-content2-change1">YOUR INFO</span>

          <FontAwesomeIcon icon={faCircle} className="icon2-change2" />
          <div className="icon2-content-change2">2</div>
          <span className="side-content3-change2">STEP 2</span>
          <span className="side-content4-change2">SELECT PLAN</span>

          <FontAwesomeIcon icon={faCircle} className="icon3-change3" />
          <div className="icon3-content-change3">3</div>
          <span className="side-content5-change3">STEP 3</span>
          <span className="side-content6-change3">ADD-ONS</span>

          <FontAwesomeIcon icon={faCircle} className="icon4-change3" />
          <div className="icon4-content-change3">4</div>
          <span className="side-content7-change3">STEP 3</span>
          <span className="side-content8-change3">SUMMARY</span>
          <div className="LastPage-content">
            <Icon4/>
              <h2>Thank You!</h2>
              <p>
                Thank you for confirming your subscription! We hope you have fun
                using our platform . If you ever need support, please feel free
                to email us at support@loremgaming.com.
              </p>
          </div>
        </div>
      </div>
    </div>
  );
};
