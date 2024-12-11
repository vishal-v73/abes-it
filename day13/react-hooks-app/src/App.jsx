import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainLayout from "./Components/MainLayout";
import CounterApp from "./Components/CounterApp";
import ImageApp from "./Components/ImageApp";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route path="CounterApp" element={<CounterApp />} />
          <Route path="ImageApp" element={<ImageApp />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
