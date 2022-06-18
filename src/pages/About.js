import React, { Component } from "react";
import "./About.css";
import profile_pic from "../assets/profile_pic.jpg";

export default class About extends Component {
  render() {
    return (
      <div>
        {/* <p>Design your About me page </p> */}
        <div class="split left">
          <div className="centered">
            <img
              className="profile_image"
              src={profile_pic}
              alt="Profile Pic"
            ></img>
          </div>
        </div>
        <div className="split right">
          <div className="centered">
            <div className="name_title">Shreeya Patel</div>
            <div className="brief_description">
            Hello, I am a rising sophomore studying Computer Science at 
            Columbia University. I am from Northern Canada and my interests 
            include hiking, reading, and watching Star Wars.
            </div>
          </div>
        </div>
      </div>
    );
  }
}
