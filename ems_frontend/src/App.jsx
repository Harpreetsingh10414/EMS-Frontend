import React from "react";
import "./App.css";
import AppRoutes from "./routes/AppRoutes";
import "./UI/MyLeaves.css";

const App = () => {
  return (
    <div
      className="min-h-screen bg-cover bg-center"
      style={{ backgroundImage: 'url("/otw_bg.png")' }}
    >
      <AppRoutes />
    </div>
  );
}

export default App;
