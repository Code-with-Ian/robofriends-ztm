import React from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./containers/App";
import "tachyons";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);
root.render(
  <div>
    <App />
  </div>
);
