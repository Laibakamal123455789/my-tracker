import React from 'react'
import "./globals.css";
import Header from '@/component/Header/header';
import Balance from '@/component/Balance/balance';
import IncomeExpense from '@/component/IncomeExpense/IncomeExpense';
import AddTransaction from '@/component/addTransaction/addTransaction';
import TransactionHistory from '@/component/transactionHistory/transactionHistory';

export default function page() {
  return (
    <div className="container">
  <Header></Header>
  <Balance></Balance>
  <IncomeExpense></IncomeExpense>
  <TransactionHistory></TransactionHistory>
  <AddTransaction></AddTransaction>

    </div>
  )
}
