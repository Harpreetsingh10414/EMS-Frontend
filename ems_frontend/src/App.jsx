//import logo from './logo.svg';
import * as React from 'react';

import './App.css'; 
import { Route, Routes } from 'react-router-dom' 
import Header from './pages/header/header';
import PostUser from "./pages/employee/PostUser.jsx"


function App() {
  return (
   <>
   <Header />
   <Routes> 
    <Route  path="/employee" element={<PostUser/>} />   


   </Routes>
   </>
  );
}

export default App;
