import React from "react";

function Footer({toggle}) {
  return (
    <div
      className="position-fixed bg-success text-white align-items-center d-flex justify-content-center"
      style={{ width: "100%", height: 70, bottom: 0,paddingLeft:toggle?0:300 }}
    >
      <h2> SFECTORIA</h2>
    </div>
  );
}

export default Footer;
