import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import Madlibs from "./Madlibs.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Madlibs />
  </StrictMode>
);
