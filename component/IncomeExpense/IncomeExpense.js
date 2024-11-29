"use client";
import { store } from '@/store/store';
import React from 'react'
import { Provider, useSelector } from 'react-redux'
export default function IncomeExpense(){
    return <Provider store={store}>
        <Income></Income>
    </Provider>
}
function Income() {
    const{income,expense} = useSelector((state)=>state)

  return (
    
       <div className=' d-flex justify-content-center text-center  rounded-2 '>
          <div className='px-5 py-2 'style={{ backgroundColor: "#fff", boxShadow: '2px 4px 6px rgba(0, 0, 0, 0.3)'}}>
            <span> <b>INCOME</b></span>
            <h4 className="money-plus" style={{color:"#8B8000"}}>${income}</h4>
          </div>
          <div className='px-5 py-2 ' style={{ backgroundColor: "#fff" , boxShadow: '2px 4px 6px rgba(0, 0, 0, 0.3)'}}>
            <span><b>EXPENSE</b></span>
            <h4 className="money-minus" style={{color:"#448EE4"}}>${expense}</h4>
          </div>
          </div>
  )
}
