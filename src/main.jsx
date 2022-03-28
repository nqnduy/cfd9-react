import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./assets/dest/style.min.css";
import "./assets/dest/fonts.css";
import "./assets/dest/stylelibs.min.css";
import { BrowserRouter } from "react-router-dom";

ReactDOM.render(
    <React.StrictMode>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </React.StrictMode>,
    document.getElementById("root")
);
