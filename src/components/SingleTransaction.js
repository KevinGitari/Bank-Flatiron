import React from "react";

function SingleTransaction({ transaction }) {

  return (

    <tr className="tableList">

      <td className="tableData">{transaction?.date}</td>
      <td className="tableData">{transaction?.description}</td>
      <td className="tableData">{transaction?.category}</td>
      <td className="tableData">{transaction?.amount}</td>
      <button className = "del" onClick = {()=>onDelete(transaction)}>Delete Transaction</button>

    </tr>
  );
}

export default SingleTransaction;




