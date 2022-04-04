import "./App.css";

import "react-toastify/dist/ReactToastify.css";
import Auth from "./screens/Auth";
import { ToastContainer } from "react-toastify";
import { useLocation } from "react-router";

import Jobs from "./screens/Jobs";
function App() {
  var location = useLocation();
  return (
    <>
      <div className="flex w-full h-full gap-4">
        <Auth />
      </div>
      <ToastContainer />
    </>
  );
}

export default App;
