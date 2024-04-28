import React, {useState} from "react";


function AddTransactionForm() {
  //State variables for form data
  const [date, setDate] = useState("")
  const [description, setDescription] = useState("")
  const [category, setCategory] = useState("")
  const [amount, setAmount] = useState("")
  //function for the form
  function handleSubmit(e) {
    //POST request to db.json
    fetch("http://localhost:3000/transactions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        date: date,
        description: description,
        category: category,
        amount: amount,
      }),
    });
     alert("added successfully")
  }
  // rendering form
  return (
    <div className="ui segment">
      <form onSubmit={handleSubmit} className="ui form">
        <div className="inline fields">
          <input value= {date} onChange={(e) => setDate(e.target.value)} name="date" />
          <input value={description} onChange={(e) => setDescription(e.target.value)} type="text" name="description" placeholder="Description" />
          <input value={category} onChange={(e) => setCategory(e.target.value)} type="text" name="category" placeholder="Category" />
          <input value={amount} onChange={(e) => setAmount(e.target.value)} type="number" name="amount" placeholder="Amount" step="0.01" />
        </div>
        <button className="ui button" type="submit">
          Add Transaction
        </button>
      </form>
    </div>
  );
}

export default AddTransactionForm;
