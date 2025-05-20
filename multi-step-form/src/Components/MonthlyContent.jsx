import React from "react";
import "./monthlycontent.css";
import image from "./img1.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircle } from "@fortawesome/free-solid-svg-icons";
import { faSquare } from "@fortawesome/free-solid-svg-icons";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { useState } from "react";

function MonthlyContent() {
  const [isFirstSquareClicked, setIsFirstSquareClicked] = useState(false);
  const [isSecondSquareClicked, setIsSecondSquareClicked] = useState(false);
  const [isThirdSquareClicked, setIsThirdSquareClicked] = useState(false);
  const [isCheckClicked , setIsCheckClicked] = useState(false);

  const style1 = {
    color: "#4940F0",
    border: "0.09rem solid #4940F0",
    borderRadius: "0.2rem",
    backgroundColor: "#4940F0",
  };

  const style2 = {
    border: "0.09rem solid #7872AB",
  };

  const style3 = {
    height: "0.6rem",
    width: "0.8rem",
    position:'relative',
    top:'0.9rem',
    color:"white",
  }

  const handleFirstSquareClick = () => {
    setIsFirstSquareClicked(!isFirstSquareClicked);
  };

  const handleSecondSquareClick = () => {
    setIsSecondSquareClicked(!isSecondSquareClicked);
  };

  const handleThirdSquareClick = () => {
    setIsThirdSquareClicked(!isThirdSquareClicked);
  };

  const handleCheckClick=()=>{
    setIsCheckClicked(!isCheckClicked);
  }

  return (
    <div className="monthly-container">
      <div className="monthly-contain">
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

          <FontAwesomeIcon icon={faCircle} className="icon3-change2" />
          <div className="icon3-content-change2">3</div>
          <span className="side-content5-change2">STEP 3</span>
          <span className="side-content6-change2">ADD-ONS</span>

          <FontAwesomeIcon icon={faCircle} className="icon4" />
          <div className="icon4-content">4</div>
          <span className="side-content7">STEP 4</span>
          <span className="side-content8">SUMMARY</span>
        </div>
        <div className="monthly-content">
          <h1 className="monthly-h1">Pick add-ons</h1>
          <p className="monthly-p">
            Add-ons help enhance your gaming experience.
          </p>
          <div className="monthly-box">
            <div
              className="monthly-box1"
              style={isFirstSquareClicked ? style2 : {}}
            >
              <div className="square-contain1">
                <FontAwesomeIcon
                  icon={faSquare}
                  className="square1"
                  style={isFirstSquareClicked ? style1 : {}}
                  onClick={handleFirstSquareClick}
                />
                {/* <div className="check"> */}
                {isFirstSquareClicked && (
                <FontAwesomeIcon
                    icon={faCheck}
                    className="check1"
                    style={
                        style3
                    }
                    onClick={handleFirstSquareClick}
                />
            )}
                {/* </div> */}
              </div>
              <h2>Online Service</h2>
              <p>Access to multplayer games</p>
              <p className="monthly-box1-p2">+$1/mo</p>
            </div>
            <div
              className="monthly-box2"
              style={isSecondSquareClicked ? style2 : {}}
            >
              <div className="square-contain2">
                <FontAwesomeIcon
                  icon={faSquare}
                  className="square2"
                  style={isSecondSquareClicked ? style1 : {}}
                  onClick={handleSecondSquareClick}
                />
                {/* <div className="check"> */}
                {isSecondSquareClicked && (
                <FontAwesomeIcon
                    icon={faCheck}
                    className="check2"
                    style={
                      style3
                    }
                    onClick={handleSecondSquareClick}
                />
            )}
                {/* </div> */}
              </div>
              <h2>Larger Storage</h2>
              <p>Extra 1TB of cloud save</p>
              <p className="monthly-box2-p2">+$2/mo</p>
            </div>
            <div
              className="monthly-box3"
              style={isThirdSquareClicked ? style2 : {}}
            >
              <div className="square-contain3">
                <FontAwesomeIcon
                  icon={faSquare}
                  className="square3"
                  style={isThirdSquareClicked ? style1 : {}}
                  onClick={handleThirdSquareClick}
                />
                {/* <div className="check"> */}
                {isThirdSquareClicked && (
                <FontAwesomeIcon
                    icon={faCheck}
                    className="check3"
                    style={
                      style3
                    }
                    onClick={handleThirdSquareClick}
                />
            )}
                {/* </div> */}
              </div>
              <h2>Customizable profile</h2>
              <p>Customize theme on your profile</p>
              <p className="monthly-box3-p2">+$2/mo</p>
            </div>
          </div>
          <Link to="/about">
            <button className="prev">Go Back</button>
          </Link>
          <Link to="/Info5">
            <button className="next">Next Step</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default MonthlyContent;
