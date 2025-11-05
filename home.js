import React from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();

  const goToDashboard = () => {
    // programmatic navigation on button or logo click
    navigate("/dashboard");
  };

  return (
    <div style={{ padding: 20 }}>
      {/* Option A: use Link (simple, SEO-friendly) */}
      <Link to="/dashboard" style={{ textDecoration: "none" }}>
        <img
          src="/assets/abiii_logo.JPEG"
          alt="logo"
          style={{ width: 120, cursor: "pointer" }}
        />
      </Link>

      <h2>Home Page</h2>

      {/* Option B: programmatic navigation with onClick */}
      <div style={{ marginTop: 20 }}>
        <button onClick={goToDashboard}>Go to Dashboard</button>
      </div>

      {/* Another clickable element using onClick on the image */}
      <div style={{ marginTop: 20 }}>
        <img
          src="/assets/abiii_logo.JPEG"
          alt="logo-click"
          style={{ width: 80, cursor: "pointer", border: "1px solid #ddd" }}
          onClick={goToDashboard} // same as Link but programmatic
        />
        <p>Click the logo above to open Dashboard</p>
      </div>
    </div>
  );
}
