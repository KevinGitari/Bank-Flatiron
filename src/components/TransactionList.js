import React, { useState, useEffect } from "react";
import SingleTransaction from "./SingleTransaction";

function TransactionList() {
  const [transactionList, setTransactionList] = useState([]);

  useEffect(() => {
    
    fetch("http://localhost:3000/transactions")
      .then((response) => response.json())
      .then((data) => setTransactionList(data))
      .catch((error) => console.error("Error fetching transactions:", error));
    
  }, []);

  const handleDelete = (id) => {
    
    fetch(`http://localhost:3000/transactions/${id}`, {
      method: "DELETE",
      
    })
      .then((response) => {
        if (response.ok) {
          // Remove the deleted item from the state
          setTransactionList((prevList) =>
            prevList.filter((transaction) => transaction.id !== id)
          );
        } else {
          throw new Error("Network response was not ok");
        }
      })
      .catch((error) => console.error("Error deleting transaction:", error));
  };

  return (
    
    <div>
      <h1>Transaction List</h1>
      <table className="table">
    
        <thead>
          <tr>
            <th>Date</th>
            <th>Description</th>
            <th>Category</th>
            <th>Amount</th>
            <th>Actions</th>
          </tr>
        </thead>
    
        <tbody>
          {transactionList.map((transaction) => (
            <SingleTransaction
              key={transaction.id}
              transaction={transaction}
              handleDeleteDelete={handleDelete}
            />   
          ))}
        </tbody>
                
      </table>
    </div>
  );
}

export default TransactionList;
