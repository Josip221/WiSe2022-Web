import React from 'react';

function TableElement({ id, temp, hum, pres }) {
  return (
    <tr className="hover">
      <th>{id + 1}</th>
      <td>1.1.2022</td>
      <td>{temp}</td>
      <td>{hum}</td>
      <td>{pres}</td>
    </tr>
  );
}

export default TableElement;
