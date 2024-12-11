import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import Register from "./components/Resister"; 
import MainLayout from "./components/MainLayout";
import DashBoard from "./components/DashBoard";
import Logout from "./components/Logout"; // Import Logout component

const App = () => {
  const [data, setData] = useState(null); // User data state

  return (
    <div>
      <BrowserRouter>
        <Routes>
          {/* Main Layout Route */}
          <Route path="/" element={<MainLayout />}>
            <Route path="/login" element={<Login regLogin={data} setUserData={setData} />} />
            <Route path="/register" element={<Register regData={setData} />} />
          </Route>

          {/* Dashboard Route */}
          <Route path="/dashboard" element={<DashBoard userData={data} setUserData={setData} />} />

          {/* Logout Route */}
          <Route
            path="/logout"
            element={<Logout setUserData={setData} />}
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
