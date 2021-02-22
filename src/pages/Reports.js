
import React from 'react';
import * as AiIcons from "react-icons/ai";
import './Reports.css';


export const Reports = () => {
    return(


		<div className="userprofile">
      <h3
        style={{
          position: "absolute",
          top: "89px",
          fontSize: "38px",
          left: "78px",
        }}
      >
        UserProfile
        <AiIcons.AiFillProfile
          style={{ fontSize: "20px", color: "#fff", marginLeft: "10px" }}
        />
      </h3>
      <div className="profile">
        <div class="card card-profile text-center">
          <img
            alt=""
            class="card-img-top"
            src="https://unsplash.it/340/160?image=354"
          ></img>
          <div class="card-block">
            <img
              alt=""
              class="card-img-profile"
              src="https://cdn2.vectorstock.com/i/1000x1000/20/76/man-avatar-profile-vector-21372076.jpg?size=140"
            ></img>
            <h4 class="card-title">
              Mike andrew<br />
              <small>Full stack developer</small>
            </h4>
            <h5>A professional front end developer<br />
            working on different live projects</h5>
            <div class="">
              <a><AiIcons.AiFillFacebook style={{fontSize:'25px'}}/></a>
              <a><AiIcons.AiFillTwitterCircle style={{fontSize:'25px'}}/></a>
              <a><AiIcons.AiFillInstagram style={{fontSize:'25px'}}/></a>
            </div>
          </div>
        </div>
      </div>
    </div>
        
    )
}

export default Reports;
