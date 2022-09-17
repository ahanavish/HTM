import React from 'react';
import ReactDOM from 'react-dom/client';
import Login from "./components/Login/Login";
import MedicineDetails from './components/MedicineDetails/MedicineDetails';
import App from './components/App/App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <Login /> */}
    {/* <App /> */}
    <MedicineDetails />
  </React.StrictMode>
);