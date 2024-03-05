import React from "react";
import { Outlet } from "react-router-dom";

function Orders() {
  return (
    <div style={{ paddingTop: 70, paddingLeft: 300 }}>
      <Outlet />
    </div>
  );
}

export default Orders;
