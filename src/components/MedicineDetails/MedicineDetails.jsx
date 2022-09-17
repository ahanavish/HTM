import React, { useState } from 'react';
import { db } from '../../firebase';
import { collection, doc, addDoc, updateDoc, deleteDoc } from 'firebase/firestore';

function MedicineDetails() {

  const id=0;
  
  const [medicine, setMedicine] = useState({
    name: "",
    expiry: "",
    quantity: 0,
    price: 0
  });

  const handleChange = (e) => {
    setMedicine({ ...medicine, [e.target.name]: e.target.value });
  }

  async function addMedicine(){
    try {
      await addDoc(collection(db, 'medicines'), medicine)
    } catch (err) {
      alert(err)
    }
  }

  async function editMedicine(){
    const medDocRef = doc(db, 'medicines', id)
    try{
      await updateDoc(medDocRef, medicine)
    } catch (err) {
      alert(err)
    }
  }

  async function deleteMedicine(){
    const medDocRef = doc(db, 'medicines', id)
    try{
      await deleteDoc(medDocRef)
    } catch (err) {
      alert(err)
    }
  }
    
  const handleSubmit = async (e) => {
    e.preventDefault();
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
