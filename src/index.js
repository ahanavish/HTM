import React from 'react';
import ReactDOM from 'react-dom/client';
// import Login from "./components/Login/Login";
// import MedicineDetails from './components/MedicineDetails/MedicineDetails';
// import App from './components/App/App';
import Login from './components/Login/Login';
// import Otp from './components/Otp/Otp'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <Otp /> */}
    <Login />
    {/* <App /> */}
    {/* <MedicineDetails /> */}
  </React.StrictMode>
);