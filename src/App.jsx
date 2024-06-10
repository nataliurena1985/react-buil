import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./pages/Home";
import AddEdit from "./pages/AddEdit";
const App = () => {
  return (
    <BrowserRouter>
      <div className="text-center">
        {/* <ToastContainer position="top-center" /> */}

        <Routes>
          <Route path="/" element={<Home />} />

          <Route path="/addContact" element={<AddEdit />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
