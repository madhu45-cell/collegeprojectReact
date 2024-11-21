import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";

// Create a root element using createRoot
const root = ReactDOM.createRoot(document.getElementById('root'));

// Use root.render instead of ReactDOM.render
root.render(<App />);