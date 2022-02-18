import "./App.css";
import { Routes, Route, Navigate } from "react-router-dom";
//components
import Home from "./pages/Home/Home";
import Blog from "./pages/Blog/Blog";
import LoginPage from "./pages/Loginpage/LoginPage";
import PrivateRoute from "./components/PrivateRoute";
import Topbar from "./components/topbar/Topbar";
import { ToastContainer } from "react-toastify";
//Context
import AuthContextProvider from "./context/AuthContextProvider";

function App() {
  return (
    <div className="App">
      <AuthContextProvider>
        <Topbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/blog" element={<PrivateRoute component={<Blog />} />} />
          <Route path="/*" element={<Navigate to="/" />} />
        </Routes>
        <ToastContainer />
      </AuthContextProvider>
    </div>
  );
}

export default App;
