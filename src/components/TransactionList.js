import React, { useEffect, useState } from "react";
import SingleTransaction from "./SingleTransaction";

function TransactionList() {
  const [transactionList, setTransactionList] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/transactions")
      .then((response) => response.json())
      .then((data) => setTransactionList(data))
      .catch((error) => console.error("Error fetching transactions:", error));
  }, []);

  return (

    <div>
      <h1 className="Transaction-form">Transaction List</h1>
      <table className="table">
        
        <thead>

          <tr>
            <th>Date</th>
            <th>Description</th>
            <th>Category</th>
            <th>Amount</th>
          </tr>

        </thead>

        <tbody>

          {transactionList.map((transaction) => (
            <SingleTransaction 
              key={transaction.id} 
              transaction={transaction} 
            />
          ))}

        </tbody>

      </table>

    </div>
  );
}

export default TransactionList;


