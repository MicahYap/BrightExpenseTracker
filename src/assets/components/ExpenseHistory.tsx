import { useState, useEffect } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

function ExpenseHistory() {
 return (
  <>
    <div>
      put total expense here
    </div>

    <table>
      <thead>
        <tr>
          <th>Category</th>
          <th>Item</th>
          <th>Description</th>
          <th>Amount</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td><FontAwesomeIcon icon={faTrash} /></td>

        </tr>
      </tbody>
    </table>
    <div>
      pagination here
    </div>
  </>
 )
}

export default ExpenseHistory