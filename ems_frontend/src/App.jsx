import React from "react";
import "./App.css";
import AppRoutes from "./routes/AppRoutes";
import "./UI/MyLeaves.css";
import { Toaster } from "react-hot-toast";
import { Provider } from "react-redux";
import { store } from "./redux/store";

const App = () => {
  return (
    <Provider store={store}>
      <div
        className="min-h-screen bg-cover bg-center"
        style={{ backgroundImage: 'url("/otw_bg.png")' }}
      >
        <Toaster />
        <AppRoutes />
      </div>
    </Provider>
  );
};

export default App;
