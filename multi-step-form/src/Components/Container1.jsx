import React from "react";
import image from "./img1.svg";
import Form from "./Form.jsx";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircle } from "@fortawesome/free-solid-svg-icons";
import './container1.css';
function Container1() {
  return (
    <>
      <div className="container">
        <div className="contain">
          <div className="content">
            <img
              src={image}
              className="img"
            />
            <FontAwesomeIcon
              icon={faCircle}
              className="icon1"
            />
            <div className="icon1-content">
              1
            </div>
            <span className="side-content1">
              STEP 1
            </span>
            <span className="side-content2">
              YOUR INFO
            </span>

            <FontAwesomeIcon
              icon={faCircle}
              className="icon2"
            />
            <div className="icon2-content">
              2
            </div>
            <span className="side-content3">
              STEP 2
            </span>
            <span className="side-content4">
              SELECT PLAN
            </span>

            <FontAwesomeIcon
              icon={faCircle}
              className="icon3"
            />
            <div className="icon3-content">
              3
            </div>
            <span className="side-content5">
              STEP 3
            </span>
            <span className="side-content6">
              ADD-ONS
            </span>

            <FontAwesomeIcon
              icon={faCircle}
              className="icon4"
            />
            <div className="icon4-content">
              4
            </div>
            <span className="side-content7">
              STEP 3
            </span>
            <span className="side-content8">
              SUMMARY
            </span>
          </div>
          <div className="content1">
            <h1 className="content1-h1">
              Personal info
            </h1>
            <p className="content1-p">
              Please provide your name, email address, and phone number.
            </p>
            <Form/>
          </div>
        </div>
      </div>
    </>
  );
}
export default Container1;
