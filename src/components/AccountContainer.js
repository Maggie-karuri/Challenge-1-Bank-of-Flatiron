import React, { useEffect, useState } from "react";
import TransactionsList from "./TransactionsList";
import Search from "./Search";
import AddTransactionForm from "./AddTransactionForm";

function AccountContainer() {
  // State variables for transaction data 
  const [transaction, setTransaction] = useState([])
  const [query, setQuery] = useState("")
  // Effect hook to fetch transaction data 
  useEffect(() => {
    fetch("http://localhost:3000/transactions" + query)
      .then((resp) => resp.json())
      .then(transaction => setTransaction(transaction))
  }, [query])
  // search input changes
  function handleSearch(e) {
    setQuery(e.target.value)
  }
  // render account container
  return (
    <div>
      <Search handleSearch={handleSearch} />
      <AddTransactionForm />
      <TransactionsList transactions={transaction} />
    </div>
  );
}

export default AccountContainer;