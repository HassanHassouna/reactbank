import useSWR from 'swr'
import { ITransaction } from '../../types/types'
import axios from 'axios';
const version ='v1'
const fetcher =  (url: string) => axios.get(url).then(res => res.data)
export const useTransactions = () => {
  const { data, error } = useSWR<ITransaction[]>(`http://localhost:8000/api/${version}/transactions`, fetcher);
  return {
    transactions: data,
    isLoading: !error && !data,
    isError: error,
  };
};
