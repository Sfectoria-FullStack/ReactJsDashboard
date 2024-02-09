import React from "react";

function Sidebar() {
  return (
    <div
      className="position-fixed bg-danger text-white d-flex justify-content-between flex-column"
      style={{ width: 300, height: "100%", zIndex: 3 }}
    >
      <div>
        <p>logo</p>
     
        <p>go to page</p>
        <p>go to page</p>
        <p>go to page</p>
        <p>go to page</p>
        <p>go to page</p>
      </div>

      <div>
        <p>settings</p>
      </div>
    </div>
  );
}

export default Sidebar;
