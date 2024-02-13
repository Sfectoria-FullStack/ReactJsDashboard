import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "../pages/Dashboard";
import Login from "../pages/Login";
import Orders from "../pages/orders/Orders";
import App from "../App";
import OrderList from "../pages/orders/views/OrderList";
import AddOrder from "../pages/orders/views/AddOrder";
import OrderDetails from "../pages/orders/views/OrderDetails";

function Router() {
  const [user, setUser] = useState(true);
  return (
    <BrowserRouter>
      <Routes>
        {user ? (
          <Route path="/" element={<App />}>
            <Route index element={<Dashboard />} />
            <Route path="orders" element={<Orders />}>
              <Route index element={<OrderList />} />
              <Route path="add" element={<AddOrder />} />
              <Route path="one/:orderId" element={<OrderDetails />} />
            </Route>
          </Route>
        ) : (
          <Route path="/" element={<Login />} />
        )}
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
