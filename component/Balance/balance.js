"use client";
import { store } from '@/store/store';
import React from 'react'
import { Provider, useSelector } from 'react-redux'
export default function Balance(){
  return <Provider store={store}>
<Mybalance></Mybalance>
  </Provider>
}
function Mybalance() {
  const{balance} = useSelector((state)=>state)
       
  return (
    <div>
      <div>
        <h3 className="Balance" style={{fontSize:"20px"}}>Current Balance</h3>
        <h2>${balance}</h2>
          </div>
    </div>
  )
}
