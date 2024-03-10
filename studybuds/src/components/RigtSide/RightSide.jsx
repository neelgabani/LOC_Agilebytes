import React from "react";
// import CustomerReview from "../CustomerReview/CustomerReview";
import Updates from "../Updates/Updates";
import "./RightSide.css";
import ToDoList from "../ToDoList";

const RightSide = () => {
  return (
    <div className="RightSide">
      <div>
        <h3>Profile</h3>
        <Updates />
      </div>
      <div className="RightSide2">
        
        <ToDoList />
      </div>
    </div>
  );
};

export default RightSide;
