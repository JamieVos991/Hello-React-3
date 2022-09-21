
// Importeren React 
import React from "react";

// Importeren React DOM
import ReactDOM from "react-dom/client";

// Importeert App
import App from "./App/App";

// Variable aan die we koppelen aan het html element root 
const root = ReactDOM.createRoot(document.getElementById('root'))

// Render de variable
root.render (
    <React.StrictMode>
        <App />
    </React.StrictMode>
);