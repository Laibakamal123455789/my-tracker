"use client"
import { addExpense, addIncome } from '@/store/slices/expense';
import { store } from '@/store/store';
import React, { useState } from 'react'
import { Provider, useDispatch } from 'react-redux';


export default function AddTransaction(){
    return <Provider store={store}>
      <Add></Add>
    </Provider>
}
function Add() {
  let dispatch = useDispatch();

  let [description, setDescription] = useState("");
  let [amount, setAmount] = useState(0);

  // State for validation errors
  let [errors, setErrors] = useState({ description: "", amount: "" });
  let [isSubmitted, setIsSubmitted] = useState(false); // Track if the form was submitted

  const validateForm = () => {
    let newErrors = {};

    // Check if description is empty
    if (!description.trim()) {
      newErrors.description = "Description cannot be empty.";
    }

    // Check if amount is valid
    const parsedAmount = parseFloat(amount);
    if (!amount || isNaN(parsedAmount) || parsedAmount === 0) {
      newErrors.amount = "Transaction amount must be a valid number and not zero.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0; // Return true if no errors
  };

  const addTransaction = () => {
    setIsSubmitted(true); // Mark form as submitted

    if (!validateForm()) return; // Stop if validation fails

    // If validation passes, proceed with dispatching the action
    const parsedAmount = parseFloat(amount) || 0; // Fallback to 0 if amount is NaN
    if (parsedAmount > 0) {
      dispatch(addIncome({ description, amount: parsedAmount }));
    } else {
      dispatch(addExpense({ description, amount: Math.abs(parsedAmount) }));
    }

    // Clear form after successful submission
    setDescription("");
    setAmount(0);
    setErrors({});
    setIsSubmitted(false); // Reset submission state
  };

  return (
    <div>
      <div>
        <div
          className="my-4"
          style={{
            borderBottom: "1px solid lightGrey",
            maxWidth: "330px",
            margin: "0 auto",
          }}
        >
          <h3
            className="trans"
            style={{ fontSize: "20px", fontWeight: "bold" }}
          >
            Add New Transaction
          </h3>
        </div>
        <form>
          <label className="label-style1">
            <b>Description</b>
          </label>
          <br />
          <input
            type="text"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="input-style"
            placeholder="Details of Transaction"
          />
          {isSubmitted && errors.description && (
            <div style={{ color: "purple", fontSize: "12px" }}>
              {errors.description}
            </div>
          )}
          <br />
          <label className="label-style2">
            <b>Transaction Amount</b>
          </label>
          <br />
          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            className="input-style"
            placeholder="Dollar value of transaction"
          />
          {isSubmitted && errors.amount && (
            <div style={{ color: "purple", fontSize: "12px" }}>
              {errors.amount}
            </div>
          )}
        </form>
        <button className="btn1" onClick={addTransaction}>
          Add Transaction
        </button>
      </div>
    </div>
  );
}
// function Add() {
//     let dispatch = useDispatch();

//     let[description,setDescription] = useState("");
//     let[amount,setAmount] = useState(0);

//     const addTransaction=()=>{

//       const parsedAmount = parseFloat(amount) || 0; // Fallback to 0 if amount is NaN
//       if (parsedAmount > 0) {
//           dispatch(addIncome({ description, amount: parsedAmount }));
//       } else {
//           dispatch(addExpense({ description, amount: Math.abs(parsedAmount) }));


//       }

//         // if(amount >0){
//         //   dispatch(addIncome({description,amount : parseFloat(amount)}))
//         // }else{
//         //   dispatch(addExpense({description,amount : Math.abs(parseFloat(amount))}))
//         // }
//          setAmount(0); 
//       }
//   return (
//     <div>
//       <div>
//             <div className='my-4' style={{borderBottom: '1px solid lightGrey' , maxWidth: '330px', margin: '0 auto'}}>
//              <h3 className="trans" style={{fontSize:"20px", fontWeight:"bold"}} >Add New Transection</h3>
//              </div>
//               <form >
//                 <label className='label-style1'> <b>Description</b></label>
//                 <br/>
//                 <input type="text" value={description} onChange={(e)=>setDescription(e.target.value)}  className='input-style' placeholder="Detalils of Transection"/>
//                 <br/>               
//                 <label className='label-style2'> <b>Transection Amount</b></label>
//                 <br/>
//                 <input type="number" value={amount} onChange={(e)=>setAmount(e.target.value)} className='input-style'  placeholder="Dollar value of transection"/>
             
//               </form>

//               <button className='btn1' onClick={addTransaction} > Add Transection</button>
                                    
//           </div>
//     </div>
//   )
// }
