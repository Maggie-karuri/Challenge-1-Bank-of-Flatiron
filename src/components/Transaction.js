import React from "react";

function Transaction({ date, description, category, amount}) {
  return (
    //table transaction representation rows
    <tr>
      <td>{date}</td>
      <td>{description}</td>
      <td>{category}</td>
      <td>{amount}</td>
    </tr>
  );
}

export default Transaction;
