import React from 'react';
import PropTypes from 'prop-types';
import TransactionHistoryItem from './TransactionHistoryItem/TransactionHistoryItem'
import s from './transaction.module.css'
function TransactionHistory({ type, amount, currency, id, items, item }) {
  return (
    <table className={s.transactionHistory}>
  <thead>      
        <tr>
        <th>Type</th>
      <th>Amount</th>
      <th>Currency</th>
    </tr>          
      </thead>
  <tbody>
  {items.map(item=>(
<TransactionHistoryItem 
 key={item.id}
 type={item.type}
 amount={item.amount}
 currency={item.currency}
 />
  ))}
</tbody>
</table>
    )
};

TransactionHistory.propTypes={
    friends:PropTypes.arrayOf(
        PropTypes.shape({
            id:PropTypes.number.isRequired,
        })
    ),
};

export default TransactionHistory;