import { useState } from "react";
import Footer from "./layout/Footer";
import Navbar from "./layout/Navbar";
import Sidebar from "./layout/Sidebar";
import { Outlet } from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [toggle, setToggle] = useState(false);
  return (
    <div>
      {toggle !== true && <Sidebar setToggle={setToggle} />}
      <Navbar setToggle={setToggle} toggle={toggle} />
      <div  style={{ paddingTop: 70, paddingLeft: toggle?0:300 , color:"#43b4be"}}>
        <Outlet toggle={toggle} />
      </div>
      <Footer toggle={toggle} />
    </div>
  );
}

export default App;
