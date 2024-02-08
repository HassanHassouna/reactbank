import axios from 'axios';
import { ITransaction, Transaction } from '../../types/types';

const version = 'v1';

export const postTransaction = async (transaction: Transaction) => {
  const response = await axios.post(`http://localhost:8000/api/${version}/transactions`, transaction);
  return response.data as ITransaction;
};

