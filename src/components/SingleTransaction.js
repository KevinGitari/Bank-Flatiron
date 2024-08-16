import React from "react";

function SingleTransaction({ transaction, handleDeleteDelete }) {
  return (
    <tr className="tableList">
      <td className="tableData">{transaction?.date}</td>
      <td className="tableData">{transaction?.description}</td>
      <td className="tableData">{transaction?.category}</td>
      <td className="tableData">{transaction?.amount}</td>
      <td>
        <button 
          className="del" 
          onClick={() => handleDeleteDelete(transaction.id)}
        >
          Delete Transaction
        </button>
      </td>
    </tr>
  );
}

export default SingleTransaction;
