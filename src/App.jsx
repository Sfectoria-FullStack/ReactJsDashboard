import { useState } from "react";
import Footer from "./layout/Footer";
import Navbar from "./layout/Navbar";
import Sidebar from "./layout/Sidebar";
import TodoList from "./pages/TodoList";

import "bootstrap/dist/css/bootstrap.min.css";
import CustomRoutes from "./routes/CustomRoutes";
import { BrowserRouter } from "react-router-dom";

function App() {
  const [toggle, setToggle] = useState(false);
  return (
     <BrowserRouter>
    <div>
      {toggle !== true && <Sidebar setToggle={setToggle} />}
      <Navbar setToggle={setToggle}  toggle={toggle} />
      
      <Footer  toggle={toggle} />
      <CustomRoutes />
    </div>
      </BrowserRouter>
  );
}

export default App;
