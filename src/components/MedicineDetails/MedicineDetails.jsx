import React, { useState } from 'react';
import { db } from '../../firebase';
import { collection, addDoc } from 'firebase/firestore';

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

    <form onSubmit={handleSubmit}>
      <input type="text" name="name" value={medicine.name} onChange={handleChange} />
      <input type="date" name="expiry" value={medicine.expiry} onChange={handleChange} />
      <input type="number" name="quantity" value={medicine.quantity} onChange={handleChange} />
      <input type="number" name="price" value={medicine.price} onChange={handleChange} />
      <button type="submit">Submit</button>
    </form>

  );

}

export default MedicineDetails;
