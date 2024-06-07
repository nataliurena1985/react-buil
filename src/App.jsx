

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { BrowserRouter } from "react-router-dom";
const App = () => {
  return (
    <BrowserRouter>
      <div className="App">
        <ToastContainer position="top-center" />
        <h2>App</h2>
      </div>
    </BrowserRouter>
  );
};

export default App;
