import React from "react";
import ReactDOM from "react-dom/client";
import { Slide, ToastContainer } from "react-toastify";
import { AuthProvider } from "./context/AuthContext";
import "./index.css";
import "react-toastify/dist/ReactToastify.min.css";
import Routes from "./Routes";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ToastContainer
      autoClose={1000}
      hideProgressBar={true}
      newestOnTop={true}
      transition={Slide}
      theme="colored"
      position={"bottom-right"}
    />
    <AuthProvider>
      <Routes />
    </AuthProvider>
  </React.StrictMode>
);
