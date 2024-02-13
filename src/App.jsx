import { useState } from "react";
import Footer from "./layout/Footer";
import Navbar from "./layout/Navbar";
import Sidebar from "./layout/Sidebar";
import { Outlet } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [toggle, setToggle] = useState(false);
  return (
    <div>
      {toggle !== true && <Sidebar setToggle={setToggle} />}
      <Navbar setToggle={setToggle} toggle={toggle} />
      <Outlet />
      <Footer toggle={toggle} />
    </div>
  );
}

export default App;
