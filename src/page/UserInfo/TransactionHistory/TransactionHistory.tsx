import React from 'react';
import items from '../../../transactions.json';
import { Container, TableConatainer } from './TransactionHistory.styled';

const TransactionHistory = () => {
  return (
    <Container>
      <TableConatainer>
        <thead>
          <tr>
            <th>Type</th>
            <th>Amount</th>
            <th>Currency</th>
          </tr>
        </thead>

        <tbody>
          {items.map(({ id, type, amount, currency }) => (
            <tr key={id}>
              <td>{type}</td>
              <td>{amount}</td>
              <td>{currency}</td>
            </tr>
          ))}
        </tbody>
      </TableConatainer>
    </Container>
  );
};
export { TransactionHistory };
