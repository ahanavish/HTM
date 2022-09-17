import React, { useState } from 'react';
import { db } from '../../firebase';
import { collection, addDoc } from 'firebase/firestore';
import "./MedicineDetails.css";

function MedicineDetails() {
  const [medicine, setMedicine] = useState({
    name: "",
    expiry: "",
    quantity: 0,
    price: 0
  });

  const handleChange = (e) => {
    setMedicine({ ...medicine, [e.target.name]: e.target.value });
  }

  const handleSubmit = async (e) => {
    console.log(medicine);
    e.preventDefault();
    try {
      await addDoc(collection(db, 'medicines'), medicine)
    } catch (err) {
      alert(err)
    }
  }

  return (
    <form className="forms" onSubmit={handleSubmit}>
      <label for="myfile">Select a file:</label><br></br>
      <input type="file" id="myfile" name="myfile" /><br></br>

      <label for="med-name">Medicine Name: </label><br></br>
      <input type="text" name="name" value={medicine.name} onChange={handleChange} /><br></br>

      <label for="med-name">Expiry date: </label><br></br>
      <input type="date" name="expiry" value={medicine.expiry} onChange={handleChange} /><br></br>

      <label for="med-name">Quantity: </label><br></br>
      <input type="number" name="quantity" value={medicine.quantity} onChange={handleChange} /><br></br>

      <label for="med-name">Price: </label><br></br>
      <input type="number" name="price" value={medicine.price} onChange={handleChange} /><br></br>

      <button className="submit-button" type="submit">Submit</button>
    </form >
  );

}

export default MedicineDetails;
