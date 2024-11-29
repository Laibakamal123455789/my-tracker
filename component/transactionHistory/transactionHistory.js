"use client";
import { deleteIncome } from '@/store/slices/expense';
import { store } from '@/store/store';
import React from 'react'
import { Provider, useDispatch, useSelector } from 'react-redux';
export default function TransactionHistory(){
    return <Provider store={store}>
        <History></History>
    </Provider>
}
function History() {
    let dispatch = useDispatch()
    let  deleteTransaction=(index)=>{
        // console.log("ni aya");
        dispatch(deleteIncome(index));
    }
    const{transactions} = useSelector((state)=>state)
  return (
    <div>
      <div className='my-5' style={{borderBottom: '1px solid lightGrey' , maxWidth: '330px', margin: '0 auto' }}>
<h3 className="trans" style={{fontSize:"20px", fontWeight:"bold"}}>Transection History</h3>
<ul className={`${transactions.length}`}>
    {transactions.map((transaction,index)=>(
        <li key={index} className={`list-items d-flex justify-content-between
        ${transaction.amount>0 ? `bg-info-hover`:`bg-warning-hover` }  border-right`}>
           <sapn><button className= 'mybtn' onClick={()=>deleteTransaction(index)}>X</button> {transaction.description}</sapn>  
            <span>
                {transaction.amount>0 ? `+${transaction.amount}` : `${transaction.amount}`}
            </span>
        </li>
    ))}
    </ul>
    </div>
    </div>
  )
}
