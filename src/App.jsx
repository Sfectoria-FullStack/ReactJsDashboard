import Footer from "./layout/Footer";
import Navbar from "./layout/Navbar";
import Sidebar from "./layout/Sidebar";
import TodoList from "./pages/TodoList";

import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div>
      <Sidebar />
      <Navbar />
      <Footer />
      <TodoList />
    </div>
  );
}

export default App;
