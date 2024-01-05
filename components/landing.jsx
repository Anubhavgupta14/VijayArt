import React from "react";
import Topnav from "../components/topnav";

const landing = () => {
  return (
    <div className="home">
      <Topnav />
      <div className="flex-all head-div">
        <div className="main-head">
          <h2>
            Vijay<span style={{ color: "rgb(133 168 255)" }}>Arts</span>
          </h2>
          <p>Customize your design in cheap price</p>
        </div>
      </div>
    </div>
  );
};

export default landing;
