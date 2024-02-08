import React from 'react';
import { ICategory, Transaction } from '../../types/types';
import { useGetTransactionsByCategory } from '../../api/transactions/getTransactionByCategory';
import { Popover, Spin } from 'antd';

export const CategoryPopover: React.FC<{ category: ICategory }> = ({ category }) => {
  const { transactionsByCategory, isLoading, isError } = useGetTransactionsByCategory(category._id);

  const content = (
    <div>
      {isLoading && <Spin />} {/* Show loading indicator while data is fetching */}
      {isError && <p>Error loading transactions</p>}
      {transactionsByCategory && (
        <ul>
          {transactionsByCategory.map((transaction: Transaction, index: number) => (
            <li key={index}>
              vendor: {transaction.vendor} - amount: {transaction.amount} - date: {transaction.date}
            </li>
          ))}
        </ul>
      )}
    </div>
  );

  return (
    <Popover trigger="hover" content={content} title={category._id}>
      <span>{category._id}</span>
      <span>: {category.total}</span>
      <br />
    </Popover>
  );
};
