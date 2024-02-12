import React, { useState } from "react";

function Navbar({ setToggle, toggle }) {


  return (
    <div
      className={`position-fixed bg-dark ${
        toggle === true ? "justify-content-between" : "justify-content-end"
      }  d-flex`}
      style={{ width: "100%", height: 70 }}
    >
      {toggle === true && (
        <button className="btn btn-light" onClick={() => setToggle(false)}>{"->"}</button>
      )}
      <p className="text-white">navbar</p>
    </div>
  );
}

export default Navbar;
