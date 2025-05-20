import React from 'react';
import image from "./img1.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircle } from "@fortawesome/free-solid-svg-icons";
import "./container2.css";
import Content1 from './Content1.jsx';
function Container2(){
    return(
        <>
        <div className='container'>
            <div className='contain'>
                <div className='content'>
                <img
                    src={image}
                    className="img"
                />
                <FontAwesomeIcon
                    icon={faCircle}
                    className="icon1-change1"
                />
                <div className="icon1-content-change1">
                1
                </div>
                <span className="side-content1-change1">
                STEP 1
                </span>
                <span className="side-content2-change1">
                YOUR INFO
                </span>

                <FontAwesomeIcon
                icon={faCircle}
                className="icon2-change1"
                />
                <div className="icon2-content-change1">
                2
                </div>
                <span className="side-content3-change1">
                STEP 2
                </span>
                <span className="side-content4-change1">
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
                <Content1/>
            </div>
        </div>
        </>
    )
}

export default Container2;