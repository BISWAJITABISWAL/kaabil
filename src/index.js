import React from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Jobs from "./screens/Jobs";
import Header from "./components/header";

const container = document.getElementById("root");
const root = createRoot(container);

root.render(
  <BrowserRouter>
    <div id="main" className="w-full h-full p-4 mb-4 lg:fixed">
      <Header />
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="jobs" element={<Jobs />} />
      </Routes>
    </div>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
