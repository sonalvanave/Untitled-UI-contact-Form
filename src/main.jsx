// html element usko target
// with the help react-dom hme createRoot import karna hai
// createRoot mein jo html element target kiya tha uski help se root
// create karna hai

// and then we can render anything using JSX
import React from "react";
import { createRoot } from "react-dom/client";
import "@/index.css";
import Home from "@/pages/Home";

const rootEl = document.querySelector("#root");
const root = createRoot(rootEl);
root.render(
  <React.StrictMode>
    <Home />
  </React.StrictMode>
);