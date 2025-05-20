import React from 'react'
import image from "./img1.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircle } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";  
import "./monthlyfinishPage.css";

export const MonthlyfinishPage = () => {
  return (
    <div className="monthlyfinishPage-container">
      <div className="monthlyfinishPage-contain">
        <div className="content">
          <img src={image} className="img" />
          <FontAwesomeIcon icon={faCircle} className="icon1-change1"/>
          <div className="icon1-content-change1">1</div>
          <span className="side-content1-change1">STEP 1</span>
          <span className="side-content2-change1">YOUR INFO</span>

          <FontAwesomeIcon icon={faCircle} className="icon2-change2"/>
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

          <div className="monthlyfinishPage-content">
            <h1 className="monthlyfinishPage-h1">Finishing up</h1>
            <p className="monthlyfinishPage-p">Double-check everthing looks OK before confirming.</p>
            <div className="monthlyfinishPage-box">
            <div className="monthlyfinishPage-box1">
              <div className="monthly-content">
              <p className='monthlycontent-p1'>Arcade(Monthly)</p>
              <a href='/change' className='monthlycontent-a'>Change</a>
              <hr className='hr'/>
              </div>
                <div className="monthly-charge1">
                <p className='monthlycharge1-p1'>$9/mo</p>
              </div>
            </div>
            <div className="monthlyfinishPage-box2">
              <div className="monthlyfinishPagebox2content1">
              <p className='monthlyfinishPagebox2-p1'>Online service</p>
              <p className='monthlycharge2-p1'>+$1/mo</p>
              </div>
              <div className="monthlyfinishPagebox2content2">
              <p className='monthlyfinishPagebox2-p2'>Larger storage</p>
              <p className='monthlycharge2-p2'>+$2/mo</p>
              </div>
            </div>
            <div className="monthlyfinishPage-box3">
                <p className='monthlyfinishPagebox3-p1'>Total(per month)</p>
                <p className='monthlycharge3-p2'>+$12/mo</p>
            </div>
            {/* <div className="monthly-charge3">
            </div> */}
        </div>
        <Link to="/Info3"><button className="previousPage">Go Back</button></Link>
        <Link to = "/last"><button className="nextPage">Confirm</button></Link>
        </div>
        </div>
      </div>
    </div>
  )
}
