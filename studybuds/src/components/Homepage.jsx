import React from "react";
import '../../src/App.css'
import Sidebar from "./Sidebar";
import MainDash from "./MainDash/MainDash";
import RightSide from "./RigtSide/RightSide";
const Home=()=>{
    return(
        <>
        <div className="AppGlass">
        <Sidebar/>
        <MainDash/>
        <RightSide/>
      </div>
        </>
    )
};

export default Home;