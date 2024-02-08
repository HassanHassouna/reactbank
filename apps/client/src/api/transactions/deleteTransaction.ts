import axios from 'axios';
import { ITransaction } from '../../types/types';

const version = 'v1';

export const deleteTransaction = async (id: string) => {
  const response = await axios.delete(`http://localhost:8000/api/${version}/transactions/${id}`);
  return response.data as ITransaction;
};

