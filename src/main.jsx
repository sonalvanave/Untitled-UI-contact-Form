import React from "react";  
import {createRoot} from "react-dom/client";
const rootE1=document.querySelector("#root");
const root =createRoot(rootE1);
root.render(
    <React.StrictMode>
        <h1>Hello </h1>
    </React.StrictMode>
);