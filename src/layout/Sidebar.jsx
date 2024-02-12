import React, { useState } from "react";
import { sidebarItems } from "../constant/constant";
import { Link } from "react-router-dom";


function Sidebar({ toggle, setToggle }) {
 
  return (
    <div
      className="position-fixed bg-danger text-white d-flex justify-content-between flex-column"
      style={{ width: 300, height: "100%", zIndex: 3 }}
    >
      <div>
        <div className="d-flex justify-content-between">
          <p>logo</p>
          <button className="btn btn-light " onClick={() => setToggle(true)}>
            X
          </button>
        </div>
{sidebarItems.map((item,i)=>
  //  (<div key={i} onClick={()=>{ navigate(item.path)}}>{item.name}</div>)
  (
    <Link to={item.path} className="nav-link">{item.name}</Link>
  
  )
)}

        
      </div>

      <div>
        <p>settings</p>
      </div>
    </div>
  );
}

export default Sidebar;
