import React from "react";
import ReactDOM from "react-dom/client";

const element = document.getElementById("root");
const App = () => {
    return (
        <div>
            <h1>Hello, World!</h1>
            <p>This is a simple React app.</p>
        </div>
    );
}
const root = ReactDOM.createRoot(element);
root.render(<App />);