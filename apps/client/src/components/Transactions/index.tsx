import React, { useEffect } from 'react';
import { ITransaction, ITransactionTable } from '../../types/types';
import { Transaction } from './Transaction';
import { useTransactions, deleteTransaction, useGetTransactionsByMonth } from '../../api/index';
import { Btn } from '../../core/Button';
import { DeleteOutlined } from '@ant-design/icons';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { DropDownMenu } from '../DropDown/DropDownMenu';

export const Transactions: React.FC = () => {
  const { transactions, isLoading, isError } = useTransactions();
  const [month, setMonth] = React.useState('');
  const { transactionsByMonth } = useGetTransactionsByMonth(month);
  const notify = (message: string) => toast(message);
  const [dataSource, setDataSource] = React.useState<ITransactionTable[]>();
  useEffect(() => {
    if (transactionsByMonth && month != '0') {
      const data: ITransactionTable[] = transactionsByMonth.map((transaction: ITransaction, index: number) => {
        return {
          key: String(index + 1),
          name: transaction.category,
          amount: transaction.amount,
          type: transaction.vendor,
          delete: <Btn onClick={
            () => {

              deleteTransaction(transaction._id).then(() => {
                setDataSource((prev) => {
                  if (prev) {
                    return prev.filter((item) => item.key !== String(index + 1));
                  }
                  return prev;
                });
              });
              notify('Transaction deleted');
            }
          } icon={<DeleteOutlined />} type={'primary'} danger={true} />
        };
      });
      setDataSource(data);
    } else if (transactions) {
      const data: ITransactionTable[] = transactions.map((transaction: ITransaction, index: number) => {
        return {
          key: String(index + 1),
          name: transaction.category,
          amount: transaction.amount,
          type: transaction.vendor,
          delete: <Btn onClick={
            () => {

              deleteTransaction(transaction._id).then(() => {
                setDataSource((prev) => {
                  if (prev) {
                    return prev.filter((item) => item.key !== String(index + 1));
                  }
                  return prev;
                });
              });
              notify('Transaction deleted');
            }
          } icon={<DeleteOutlined />} type={'primary'} danger={true} />
        };
      });
      setDataSource(data);
    }
  }, [transactions, transactionsByMonth]);
  return (
    <div>
      <DropDownMenu setMonth={
        setMonth
      } />
      {isError && <div>Something went wrong ...</div>}
      {isLoading ? (
        <div>Loading ...</div>
      ) : (
        <div>
          <Transaction dataSource={
            dataSource
          } />
          <ToastContainer />
        </div>
      )}
    </div>
  );
};


