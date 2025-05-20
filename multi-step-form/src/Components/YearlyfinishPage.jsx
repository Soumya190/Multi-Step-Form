import React from 'react'
import image from "./img1.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircle } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import "./yearlyfinishPage.css";

export const YearlyfinishPage = () => {
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

          <div className="yearlyfinishPage-content">
            <h1 className="yearlyfinishPage-h1">Finishing up</h1>
            <p className="yearlyfinishPage-p">Double-check everthing looks OK before confirming.</p>
            <div className="yearlyfinishPage-box">
            <div className="yearlyfinishPage-box1">
              <div className="yearly-content">
              <p className='yearlycontent-p1'>Arcade(Yearly)</p>
              <a href='/change' className='yearlycontent-a'>Change</a>
              <hr className='hr'/>
              </div>
                <div className="yearly-charge1">
                <p className='yearlycharge1-p1'>$90/yr</p>
              </div>
            </div>
            <div className="yearlyfinishPage-box2">
              <div className="yearlyfinishPagebox2content1">
              <p className='yearlyfinishPagebox2-p1'>Online service</p>
              <p className='yearlycharge2-p1'>+$10/yr</p>
              </div>
              <div className="yearlyfinishPagebox2content2">
              <p className='yearlyfinishPagebox2-p2'>Larger storage</p>
              <p className='yearlycharge2-p2'>+$20/yr</p>
              </div>
            </div>
            <div className="yearlyfinishPage-box3">
                <p className='yearlyfinishPagebox3-p1'>Total(per month)</p>
                <p className='yearlycharge3-p2'>+$120/yr</p>
            </div>
            {/* <div className="monthly-charge3">
            </div> */}
        </div>
        <Link to="/Info4"><button className="previousPage">Go Back</button></Link>
        <Link to = "/last"><button className="nextPage">Confirm</button></Link>
        </div>
        </div>
      </div>
    </div>
  )
}
