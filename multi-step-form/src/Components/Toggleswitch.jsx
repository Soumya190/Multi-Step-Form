import React, { useState } from "react";
import "./toggleswitch.css";
import Icon1 from "./Icon1.jsx";
import Icon2 from "./Icon2.jsx";
import Icon3 from './Icon3.jsx';
import { Link } from "react-router-dom";


export const Toggleswitch = () => {
  const [isMonthly, setIsMonthly] = useState(true);

  const [isHoveredContain2, setIsHoveredContain2] = useState(false);
  const [isHoveredContain3, setIsHoveredContain3] = useState(false);
  const [isHoveredYearlyItem2, setIsHoveredYearlyItem2] = useState(false);
  const [isHoveredYearlyItem3, setIsHoveredYearlyItem3] = useState(false);

  const [isHoverBackButton , setIsHoverBackButton] = useState(false);

  const handleHoverContain2=()=>{
    setIsHoveredContain2(!isHoveredContain2);
  }

  const handleHoverContain3=()=>{
    setIsHoveredContain3(!isHoveredContain3);
  }

  const handleHoverYearlyItem2 = () =>{
    setIsHoveredYearlyItem2(!isHoveredYearlyItem2);
  }

  const handleHoverYearlyItem3 = () =>{
    setIsHoveredYearlyItem3(!isHoveredYearlyItem3);
  }

  const handleHoverBackButtonEnter = ()  =>{
    setIsHoverBackButton(true);
  }

  const handleHoverBackButtonLeave = ()  =>{
    setIsHoverBackButton(false);
  }



  const style1={
    border:"0.1rem solid #7872AD",
  }

  const style2 ={
    color: "#082856",
    opacity:"0.7rem",
  }

  const handleToggle = () => {
    setIsMonthly(!isMonthly);
  };
  return (
    <div className="Monthly-content">
      <div className="block">
        <h1>Select your plan</h1>
        <p>You have the option of monthly or yearly billing.</p>
      </div>
      <div className="Content1-container">
        {isMonthly ? (
          <>
            <div className="contain1">
              <Icon1 className="Icon1"/>
              <h5>Arcade</h5>
              <p className="p1">$9/mo</p>
            </div>
            <div className="contain2" style={isHoveredContain2 ? style1 : {}} onMouseEnter={handleHoverContain2}
              onMouseLeave={handleHoverContain2}>
              <Icon2 className="Icon2"/>
              <h5>Advanced</h5>
              <p className="p2">$12/mo</p>
            </div>
            <div className="contain3" style={isHoveredContain3 ? style1 : {}} onMouseEnter={handleHoverContain3}
              onMouseLeave={handleHoverContain3}>
                <Icon3  className="Icon3"/>
              <h5>Pro</h5>
              <p className="p3">$15/mo</p>
            </div>
          </>
        ) : (
          <div className="Yearly-content">
            <>
            <div className="yearly-item1">
              <Icon1 className="Icon1"/>
              <h5>Arcade</h5>
              <p className="p1">$90/yr</p>
              <p className="yearly-p1" >2 months free</p>
            </div>
            <div className="yearly-item2" style={isHoveredYearlyItem2 ? style1 : {}} onMouseEnter={handleHoverYearlyItem2}
                onMouseLeave={handleHoverYearlyItem2}>
              <Icon2 className="Icon2"/>
              <h5>Advanced</h5>
              <p className="p2">$120/yr</p>
              <p className="yearly-p2">2 months free</p>
            </div>
            <div className="yearly-item3" style={isHoveredYearlyItem3 ? style1 : {}} onMouseEnter={handleHoverYearlyItem3}
                onMouseLeave={handleHoverYearlyItem3}>
                <Icon3 className="Icon3"/>
              <h5>Pro</h5>
              <p className="p3">$150/yr</p>
              <p className="yearly-p3">2 months free</p>
            </div>
          </>
          </div>
        )}
        </div>


        <div className="toggle-switch">
          <div className="toggle-container">
          </div>
          <span className={`toggle-option ${isMonthly ? "monthly-selected" : ""}`}>
            Monthly
          </span>
          <div className="toggle-button" onClick={handleToggle}>
            <div className={`toggle-circle ${isMonthly ? "left" : "right"}`}></div>
          </div>
          <span className={`toggle-option ${!isMonthly ? "yearly-selected" : ""}`}>
            Yearly
          </span>
        </div>


        <div className="buttons">
            <Link to="/"><button className="button1" style={isHoverBackButton ? style2 : {}} onMouseEnter={handleHoverBackButtonEnter} onMouseLeave={handleHoverBackButtonLeave}>Go Back</button></Link>
            <Link to ={isMonthly ? "/Info3" : "/Info4"}><button className="button2">Next Step</button></Link>
        </div>
    </div>
  );
};