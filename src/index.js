import React from 'react';
import Login from "./components/Login/Login";
import MedicineDetails from './components/MedicineDetails/MedicineDetails';
import App from './components/App/App';
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/login" element={<Login />} />
      <Route path="/addMedicine" element={<MedicineDetails />} />
    </Routes>
  </BrowserRouter>
);