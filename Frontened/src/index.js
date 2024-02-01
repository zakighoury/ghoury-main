// index.js or App.js
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import App from "./App";
import { AuthProvider } from "../src/Auth/AuthContext";

ReactDOM.render(
  <React.StrictMode>
    {/* <Router> Keep only one Router here */}
      <AuthProvider>
        <App />
      </AuthProvider>
    {/* </Router> */}
  </React.StrictMode>,
  document.getElementById("root")
);
