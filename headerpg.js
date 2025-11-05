import React, { useState } from "react";
import "./App.css";
import logo from "./assets/abiii_logo.jpeg"; // make sure this file exists

function App() {
  const [count, setCount] = useState(0);

  return (
    <div style={{ textAlign: "center", backgroundColor: "#f3f3f3", minHeight: "100vh" }}>
      <header style={{ 
        backgroundColor: "purple", 
        color: "white", 
        padding: "15px", 
        fontSize: "24px", 
        borderBottom: "4px solid violet",
        borderRadius: "8px"
      }}>
        My Header
      </header>

      <img src={logo} alt="Abiii Logo" style={{ width: "120px", borderRadius: "10px", marginTop: "10px" }} />

      <main style={{ margin: "30px" }}>
        <h1 style={{ color: "#333" }}>Welcome Abiii!</h1>
        <p style={{ color: "#555" }}>This is my first UI</p>
        <button 
          onClick={() => setCount(count + 1)} 
          style={{
            padding: "10px 20px",
            fontSize: "16px",
            borderRadius: "8px",
            backgroundColor: "purple",
            color: "white",
            border: "none",
            cursor: "pointer"
          }}
        >
          Click Me! Count: {count}
        </button>
      </main>

      <footer style={{ 
        backgroundColor: "black", 
        color: "white", 
        padding: "12px", 
        fontSize: "14px",
        borderTop: "4px solid violet",
        borderRadius: "8px"
      }}>
        Footer
      </footer>
    </div>
  );
}

export default App;
